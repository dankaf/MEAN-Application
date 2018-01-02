exports.render = function(req, res) {
  res.render('index', {
    title: 'Troop 832',
    user: JSON.stringify(req.user),
    messages: req.flash('error') || req.flash('info')
  });
};
