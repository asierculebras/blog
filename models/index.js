var path = require('path');

// Cargar ORM
var Sequelize = require('sequelize');

// Usar BBDD SQLite:
//    DATABASE_URL = sqlite:///
//    DATABASE_STORAGE = post.sqlite

var url, storage;

if (!process.env.DATABASE_URL) {
    url = "sqlite:///";
    storage = "post.sqlite";
} else {
    url = process.env.DATABASE_URL;
    storage = process.env.DATABASE_STORAGE || "";
}

var sequelize = new Sequelize(url, 
	 						  { storage: storage,
				              	omitNull: true 
				              });

// Importar la definicion de la tabla Post de post.js
var Post = sequelize.import(path.join(__dirname,'post'));

// Importar la definicion de la tabla Comments de comment.js
var Comment = sequelize.import(path.join(__dirname,'comment'));

// Importar la definicion de la tabla Usuarios de User.js
var User = sequelize.import(path.join(__dirname,'user'));

// Relaciones 1 a N entre Quiz y comentarios 
Comment.belongsTo(Post);
Post.hasMany(Comment);

//Relaccion 1 a N entre User y Quiz
User.hasMany(Post, {foreingKey: 'AuthorId'});
Post.belongsTo(User, {as: 'Author', foreingKey:'AuthorId' });


exports.Post = Post; // exportar definición de tabla Post
exports.Comment = Comment; // exportar definición de tabla Comments
exports.User = User; // exportar definición de tabla Usuasios

