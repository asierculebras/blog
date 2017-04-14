var express = require('express');
var router = express.Router();

var blogController = require('../controllers/blog_controller');
var commentController = require('../controllers/comment_controller');
var userController = require('../controllers/user_controller');


/* GET home page. */
router.get('/', function(req, res) {
  res.render('index');
  	console.log("Peticion get de la pagina views/index desde routes/index");
});

// Autoload de rutas que usen :quizId
router.param('quizId', blogController.load);  // autoload :quizId
router.param('userId', userController.load);  // autoload :userId



// Definición de rutas de cuenta
router.get('/users',                    userController.index);   // listado usuarios
router.get('/users/:userId(\\d+)',      userController.show);    // ver un usuario
router.get('/users/new',                userController.new);     // formulario sign un
router.post('/users',                   userController.create);  // registrar usuario
router.get('/users/:userId(\\d+)/edit', userController.edit);     // editar información de cuenta
router.put('/users/:userId(\\d+)',      userController.update);   // actualizar información de cuenta
router.delete('/users/:userId(\\d+)',   userController.destroy);  // borrar cuenta


// Definición de rutas de /quizzes cuando se invoca un metodo GET
router.get('/quizzes',                     blogController.index);
router.get('/quizzes/:quizId(\\d+)',       blogController.show);
router.get('/quizzes/:quizId(\\d+)/check', blogController.check);
router.get('/autor',    blogController.autor);
router.get('/quizzes/new',    blogController.new);
router.get('/buscador',    blogController.buscar);
router.get('/quizzes/:quizId(\\d+)/edit',  blogController.edit);
router.put('/quizzes/:quizId(\\d+)',       blogController.update);
router.delete('/quizzes/:quizId(\\d+)',    blogController.destroy);



router.get('/quizzes/:quizId(\\d+)/comments/new',  commentController.new);
router.post('/quizzes/:quizId(\\d+)/comments',     commentController.create);


// Definición de rutas de /quizzes cuando se invoca un metodo POST para añadir cosas a quiz
router.post('/quizzes',    blogController.create);



module.exports = router;
