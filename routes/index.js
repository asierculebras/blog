var express = require('express');
var router = express.Router();

var blogController = require('../controllers/blog_controller');

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index');
  	console.log("Peticion get de la pagina views/index desde routes/index");
});

// Autoload de rutas que usen :quizId
router.param('quizId', blogController.load);  // autoload :quizId

// Definición de rutas de /quizzes
router.get('/quizzes',                     blogController.index);
router.get('/quizzes/:quizId(\\d+)',       blogController.show);
router.get('/quizzes/:quizId(\\d+)/check', blogController.check);
router.get('/autor',    blogController.autor);
router.get('/buscador',    blogController.buscar);



module.exports = router;
