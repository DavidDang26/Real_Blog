const User = require("../models/User");

class ScriptController {
  index(req, res) {
    User.findOne({id: req.body.id })
        .exec((err, user) => {
            if(user) return;
            const {
                id,
                name,
                email,
                image
            } = req.body;
            const newUser = new User({
                id,
                name,
                email,
                image,
            });
            newUser.save((err, data) => {
                if(err){
                    return res.status(400).json({
                        message: 'Something went wrong'
                    })
                }
                if(data){
                   console.log('succesfully');
                }
            })
        })
  }
  
}

module.exports = new ScriptController();