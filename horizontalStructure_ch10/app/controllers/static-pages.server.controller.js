exports.renderContact = function(req, res) {
  res.render('contact', {
    user: JSON.stringify(req.user)
  });
};

exports.renderMembers = function(req, res) {
  res.render('members', {
    user: JSON.stringify(req.user)
  });
};

exports.renderPhotos = function(req, res) {
  res.render('photos', {
    user: JSON.stringify(req.user)
  });
};

exports.renderAnnouncementsAndStories = function(req, res) {
  res.render('announcements-and-stories', {
    user: JSON.stringify(req.user)
  });
};
