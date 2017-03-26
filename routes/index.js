var express = require('express');
var router = express.Router();

var blogController = require('../controllers/blog_controller');

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index');
  	console.log("Peticion get de la pagina views/index desde routes/index");
});

router.get('/question', blogController.question);
router.get('/check',    blogController.check);
router.get('/autor',    blogController.autor);



module.exports = router;
