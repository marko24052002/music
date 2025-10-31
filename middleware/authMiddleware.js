const isLoggedIn = (req, res, next) => {
  if (req.session.userId) {
    return next();
  }
  res.redirect('/auth/login');
};

const isGuest = (req, res, next) => {
  if (!req.session.userId) {
    return next();
  }
  res.redirect('/');
};

module.exports = {
  isLoggedIn,
  isGuest
};