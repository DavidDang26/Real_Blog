const User = require('../models/User');
function checkUser(response){
    User.findOne({id: response.id })
        .exec((err, user) => {
            if(user) return;
            const {
                id,
                name,
                email,
            } = response;
            const image = response.picture.data.url;
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
                   alert('successfully');
                }
            })
        })
}
module.exports = checkUser;