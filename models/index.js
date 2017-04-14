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

// Relaciones entre modelos
Comment.belongsTo(Post);
Post.hasMany(Comment);




exports.Post = Post; // exportar definición de tabla Post
exports.Comment = Comment; // exportar definición de tabla Comments
exports.User = User; // exportar definición de tabla Usuasios

