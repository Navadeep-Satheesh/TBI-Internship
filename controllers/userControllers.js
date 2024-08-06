const User = require("../Models/user");
const userRegister=async(req,res)=>{
    const { username, password, email, phone } = req.body;

    try{
        const user = await User.findById(username);
        if (user) {
            return res.status(404).json({ msg: 'User with same credentials exist' });
        }
        const newUser = new User({
            username,
            password,
            email,
            phone
        });
        const users = await newUser.save();
        res.json(users);
    }
    catch(err){
        console.error(err.message);
        res.status(500).send('Server Error');
    }
}
module.exports = {
    userRegister,
  };