const mysql = require('mysql');

// Creation de la connection a la bdd mysql
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'qwertyui'
});

// Connexion a mysql
db.connect(err => {
    if (err) {
        throw err;
    }
    console.log('Connexion a mysql reussie');
});

db.query('USE groupomania', err => {
    if (err) {
        throw err;
    }
    console.log('Utilisation de la bdd groupomania');
});

exports.getAllComment = (req, res, next) => {

    /*
        response : [{articleId, userId, content, img_path}, {}, {}, ... ]

        Returns all articles in database.
    */


    let getComments = `SELECT * FROM comments`;
    db.query(getComments, function(err, result, field) {
        if (err) {
            throw err;
        }
        console.log(result);
        res.status(200).json({ result });
    });
};

exports.postComment = (req, res, next) => {
    /*

    */

    let postQuery = `INSERT INTO comments (\`c_article_id\`, \`c_user_id\`, \`c_text_content\`, \`c_img_path\`)
    VALUES
    ('${req.body.article_id}', '${req.body.user_id}', '${req.body.text_content}', '${req.body.img_path}')`;
};