var proxy = require('connect-instagram-proxy')

INSTAGRAM_USER_ID = process.env.INSTAGRAM_USER_ID
INSTAGRAM_CLIENT_ID = process.env.INSTAGRAM_CLIENT_ID

module.exports = function(app) {
  
  app.get('/', proxy.firstPage(INSTAGRAM_CLIENT_ID, INSTAGRAM_USER_ID))
  app.get('/all', proxy.allPages(INSTAGRAM_CLIENT_ID, INSTAGRAM_USER_ID))
}
