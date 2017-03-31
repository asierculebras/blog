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


// sequelize.sync() crea e inicializa tabla de posts en DB
sequelize.sync()
    .then(function() {
        // Ya se han creado las tablas necesarias.
        return Post.count()
                .then(function (c) {
                    if (c === 0) {   // la tabla se inicializa solo si está vacía
                        return Post.bulkCreate([ {question: 'Capital de Italia',   answer: 'Roma'},
                                                 {question: 'Capital de Portugal', answer: 'Lisboa'},
                                                 {question: 'Capital de España', answer: 'Madrid'}
                                              ])
                                   .then(function() {
                                        console.log('Base de datos inicializada con  2 datos');
                                    });
                    }
                });
    })
    .catch(function(error) {
        console.log("Error Sincronizando las tablas de la BBDD:", error);
        process.exit(1);
    });


exports.Post = Post; // exportar definición de tabla Post