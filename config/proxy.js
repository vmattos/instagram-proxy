var proxy = require('connect-instagram-proxy');

INSTAGRAM_USER_ID = process.env.INSTAGRAM_USER_ID;
INSTAGRAM_CLIENT_ID = process.env.INSTAGRAM_CLIENT_ID;
INSTAGRAM_ACCESS_TOKEN = process.env.INSTAGRAM_ACCESS_TOKEN;

module.exports = function(app) {
  
  app.get('/', proxy.firstPage(INSTAGRAM_CLIENT_ID, INSTAGRAM_USER_ID), function(req, res) {
    var firstPage = req.instagram.firstPage;

    res.setHeader("Access-Control-Allow-Origin", "*");
    res.send({data: firstPage})
  });

  app.get('/all', proxy.allPages(INSTAGRAM_CLIENT_ID, INSTAGRAM_USER_ID), function(req, res) {
    var allPages = req.instagram.allPages;

    res.setHeader("Access-Control-Allow-Origin", "*");
    res.send(allPages)
  });

  app.get('/tag/:tag', proxy.firstTagPage(INSTAGRAM_ACCESS_TOKEN), function(req, res) {
     var firstTagPage = req.instagram.firstTagPage;

      res.setHeader("Acess-Control-Allow-Origin", "*");
      res.send(firstTagPage);
  });
};
