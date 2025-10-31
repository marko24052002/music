exports.getHome = (req, res) => {
  res.render('homePage', {
    title: 'Music For The Moment',
    user: req.session.userId ? { username: req.session.username } : null
  });
};