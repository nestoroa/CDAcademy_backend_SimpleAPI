const User = require('../models/userModel');

exports.findAllUsers = (req, res) => {
  User.find((err, users) => {
    if (err) return res.status(500).send(err.message);
    return res.status(200).jsonp(users);
  });
};

exports.findById = (req, res) => {
  User.findById(req.params.id, (err, users) => {
    if (err) return res.status(500).send(err.message);
    if (users == null) return res.status(404).send('ID not found');
    return res.status(200).jsonp(users);
  });
};

exports.addUser = (req, res) => {
  const user = new User({
    username: req.body.username,
    fullName: req.body.fullName,
  });

  user.save((err) => {
    if (err) return res.status(500).send(err.message);
    return res.status(200).jsonp(user);
  });
};

exports.updateUser = (req, res) => {
  User.findById(req.params.id, (err, user) => {
    if (req.body.username) user.username = req.body.username;
    if (req.body.fullName) user.fullName = req.body.fullName;
    user.save(() => {
      if (err) return res.status(500).send(err.message);
      return res.status(200).jsonp(user);
    });
  });
};

exports.deleteUser = (req, res) => {
  User.findById(req.params.id, (err, user) => {
    user.remove(() => {
      if (err) return res.status(500).send(err.message);
      return res.status(200).jsonp(user);
    });
  });
};
