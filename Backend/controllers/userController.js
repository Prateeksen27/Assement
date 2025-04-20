import UserModel from "../models/userModel.js";
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import validator from 'validator'

const createToken=(_id)=>{
    const key = process.env.JWT_SECRET_KEY;
    return jwt.sign({_id},key,{
        expiresIn:"3d"
    });
}

export const registerUser = async (req,res)=>{
    try {
        const {username,email,password}=req.body

        let user = await UserModel.findOne({username})
        if (user) return res.status(400).json("User already exists");
        if (!username || !email || !password) return res.status(400).json("All fields are required");
        if (!validator.isEmail(email)) return res.status(400).json("Email must be valid");
        if (!validator.isStrongPassword(password)) return res.status(400).json("Password must be strong");

        user = new UserModel({ username, email, password });

        const salt = await bcrypt.genSalt(10);
        user.password = await bcrypt.hash(password, salt);
        await user.save();

        const token = createToken(user._id);
        res.status(200).json({ _id: user._id, username, email, token });
    } catch (error) {
        console.log(error);
        res.status(500).json('Error');
    }
}


export const loginUser = async (req, res) => {
    const { username, password } = req.body;

    try {
        let user = await UserModel.findOne({ username });
        if (!user) return res.status(400).json("User does not exist");
        
        const isValid = await bcrypt.compare(password, user.password);
        if (!isValid) return res.status(400).json("Incorrect Password");
        
        const token = createToken(user._id);
        res.status(200).json({ _id: user._id, name: username, email:user.email, token });
    } catch (err) {
        console.log(err);
        res.status(500).json('Error');
    }
};
