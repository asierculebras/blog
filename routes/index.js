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

// Definición de rutas de /quizzes cuando se invoca un metodo GET
router.get('/quizzes',                     blogController.index);
router.get('/quizzes/:quizId(\\d+)',       blogController.show);
router.get('/quizzes/:quizId(\\d+)/check', blogController.check);
router.get('/autor',    blogController.autor);
router.get('/quizzes/new',    blogController.new);
router.get('/buscador',    blogController.buscar);
router.get('/quizzes/:quizId(\\d+)/edit',  blogController.edit);
router.put('/quizzes/:quizId(\\d+)',       blogController.update);

// Definición de rutas de /quizzes cuando se invoca un metodo POST para añadir cosas a quiz
router.post('/quizzes',    blogController.create);



module.exports = router;
