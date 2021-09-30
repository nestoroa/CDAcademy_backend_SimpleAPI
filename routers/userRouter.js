const router = require('express').Router();
const UserCtrl = require('../controllers/userController');

router
  .route('/user')
  .get(UserCtrl.findAllUsers)
  .post(UserCtrl.addUser);

router
  .route('/user/:id')
  .get(UserCtrl.findById)
  .put(UserCtrl.updateUser)
  .delete(UserCtrl.deleteUser);

router.get('/', (req, res) => {
  res.send('Hello World!');
});

router.get('/', (req, res) => {
  res.send('Hello World!');
});

module.exports = router;
