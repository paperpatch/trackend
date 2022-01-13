const authAdmin = (req, res, next) => {
  console.log('============================')
  console.log(req.session)
  console.log('============================')
  console.log(req.session)
  console.log('============================')
  console.log(req.session.user_id)
  console.log('============================')
  if (!req.session.user_id) {
    res.redirect('/login');
  } else if (req.session.username === 'admin') {
    next();
  } else {
    res.redirect('/login');
  }
};

module.exports = authAdmin;
