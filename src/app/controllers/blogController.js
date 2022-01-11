const Blog = require("../models/Blog");
const {multiMongooseToObject} = require('../../util/mongoose')
const {mongooseToObject} = require('../../util/mongoose')
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
    sendComment(req,res){
      Blog.findOne({name: req.params.name}).exec((err, blog) => {
        if(err) return console.error(err);
        const formatDate = date => {
          const options = {
          year: 'numeric', month: 'numeric', day: 'numeric',
          hour: 'numeric', minute: 'numeric', second: 'numeric',
          hour12: false,
          timeZone: 'Asia/Ho_Chi_Minh'
        }
          return new Intl.DateTimeFormat('en-GB', options).format(date)
          
      };
        const newComment = {
          displayName: req.body.displayName,
          commentContent: req.body.commentContent,
          createAt: formatDate(new Date())
        }
        blog.comments.push(newComment);
        //reset comment
        // blog.comments = [];
        blog.save((err, blog) => {
          if(err){
            return res.status(400).json({
                message: 'Something went wrong'
            })
        }
        if(blog){
           console.log('succesfully');
          blog = mongooseToObject(blog);
          const tags = blog.tags.split(',');
        
          res.render("blog", {blog: blog, tags: tags});
        }
        })
      })
      // res.send('test');
      // console.log(req.params, req.body);
    }
}
module.exports = new BlogController();