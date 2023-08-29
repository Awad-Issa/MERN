const UserController = require('../controllers/author.controllers');
const {createNewAuthor, updateExistingAuthor, findAllAuthors, deleteAnExistingAuthor, findOneSingleAuthor} = require("../controllers/author.controllers");

module.exports = app => {
    app.post('/authors/new', createNewAuthor);
    app.patch('/authors/edit/:id', updateExistingAuthor);
    app.get('/authors', findAllAuthors);
    app.delete('/author/delete/:id', deleteAnExistingAuthor);
    app.get('/author/:id', findOneSingleAuthor);


}