const UserController = require('../controllers/user.controller');

module.exports = app => {
    app.get('/api/jokes', UserController.findAllJokes);
    app.get('/api/jokes/:id', UserController.findOneSingleJoke);
    app.patch('/api/jokes/:id', UserController.updateExistingJoke);
    app.post('/api/jokes', UserController.createNewJoke);
    app.delete('/api/jokes/:id', UserController.deleteAnExistingJoke);
}
