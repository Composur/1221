var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  var Login;
  if(req.session.user){
    Login= {
      title:'小便签',
      isLogin:true,
      user:{
        username:req.user.displayName || req.user.username,
        avatar:req.user._json.avatar_url,
      }
    }
  }else{
    Login={
      title:'小便签',
      isLogin:false
    }
  }

  res.render('index', Login)
})
module.exports = router;
