exports.render = function(req, res) {
  res.render('index', {
    title: 'About | Troop 832',
    user: JSON.stringify(req.user)
  });
};
