const User = require('../models/userModel');
const bcrypt = require('bcrypt');

const registerLoad = async (req, res) => {
    try {
        res.render('register');
    } catch (error) {
        console.log(error.message);
    }
};

const register = async (req, res) => {
    try {
        const passwordHash = await bcrypt.hash(req.body.password, 10);

        const user = new User({
            name: req.body.name,
            email: req.body.email, // Fixed typo here
            image: 'images/' + req.file.filename,
            password: passwordHash
        });

        await user.save();

        res.render('register', { message: 'Your Registration is completed' });
    } catch (error) {
        console.log(error.message);
        res.render('register', { message: 'Error registering user' });
    }
};

module.exports = {
    registerLoad,
    register
};
