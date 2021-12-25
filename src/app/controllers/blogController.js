const Blog = require("../models/Blog");
class BlogController{
    index(req, res){
        res.render('blogs');
    }
    show(req,res){
        Blog.find({}, function (err, blogs) {
            if (!err) {
              blogs = blogs.map(blog => blog.toObject());
              const currentBlog = blogs.find(blog => blog.test === req.params.test);
              res.render("blog", {blog: currentBlog});
            } else res.status(400).json({ error: "Error!" });
          });
        
    }
}
module.exports = new BlogController();