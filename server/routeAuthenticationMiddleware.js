module.exports = function(req, res, next) {
  const { parse } = require('url');
  const route = parse(req.url, true).pathname;
  // console.log("middleware ", route)
  
  if (route === '/today') {
    console.log("going to redirect")
    return res.redirect('/');
  }
  else {
    console.log("not redirecting", route)
    next();
  }
}