const Blog = require("../models/Blog");
const {multiMongooseToObject} = require('../../util/mongoose')
class BlogController{
    index(req, res){
        // res.render('blogs');
        Blog.find({}, function (err, blogs) {
          if (!err) {
            blogs = multiMongooseToObject(blogs);
            // const currentBlog = blogs.find(blog => blog.test === req.params.test);
            res.render("blogs", {blogs});
          } else res.status(400).json({ error: "Error!" });
        });
    }
    show(req,res){
        Blog.find({}, function (err, blogs) {
            if (!err) {
              blogs = multiMongooseToObject(blogs);
              const currentBlog = blogs.find(blog => blog.name === req.params.name);
              const tags = currentBlog.tags.split(',');
              res.render("blog", {blog: currentBlog, tags: tags});
            } else res.status(400).json({ error: "Error!" });
          });
        
    }
    showTag(req,res){
      Blog.find({}).then(blogs => {
        blogs = multiMongooseToObject(blogs);
        blogs = blogs.filter(blog => blog.tags.includes(req.params.tag));
        res.render("blogs", {blogs});
      }).catch(err => res.status(400).json({ error: "Error!" } ));
    }
}
module.exports = new BlogController();