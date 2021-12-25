const Blog = require("../models/Blog");

class SiteController {
  index(req, res) {
    // res.render('home');
    Blog.find({}, function (err, blogs) {
      if (!err) {
        blogs = blogs.map(blog => blog.toObject());
        res.render("home", {blog: blogs[0]});
      } else res.status(400).json({ error: "Error!" });
    });
  }
  search(req, res) {
    res.render("search");
  }
}

module.exports = new SiteController();
