const User = require('../models/user');
const { validationResult } = require('express-validator');

exports.getLogin = (req, res) => {
  res.render('auth/login', { title: 'Login' });
};

exports.postLogin = async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).render('auth/login', {
        title: 'Login',
        error: 'Invalid credentials'
      });
    }

    const { email, password } = req.body;
    const user = await User.findOne({ email });
    
    if (!user || !(await user.correctPassword(password, user.password))) {
      return res.render('auth/login', {
        title: 'Login',
        error: 'Invalid email or password'
      });
    }

    req.session.userId = user._id;
    req.session.username = user.username;
    res.redirect('/');
  } catch (error) {
    console.error(error);
    res.render('auth/login', {
      title: 'Login',
      error: 'An error occurred during login'
    });
  }
};

exports.getRegister = (req, res) => {
  res.render('auth/register', { title: 'Register' });
};

exports.postRegister = async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).render('auth/register', {
        title: 'Register',
        error: 'Please check your input'
      });
    }

    const { username, email, password } = req.body;
    const existingUser = await User.findOne({ 
      $or: [{ email }, { username }] 
    });

    if (existingUser) {
      return res.render('auth/register', {
        title: 'Register',
        error: 'User already exists with this email or username'
      });
    }

    const newUser = new User({ username, email, password });
    await newUser.save();

    req.session.userId = newUser._id;
    req.session.username = newUser.username;
    res.redirect('/');
  } catch (error) {
    console.error(error);
    res.render('auth/register', {
      title: 'Register',
      error: 'An error occurred during registration'
    });
  }
};

exports.logout = (req, res) => {
  req.session.destroy((err) => {
    if (err) {
      console.error(err);
    }
    res.redirect('/');
  });
};