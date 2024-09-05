import mongoose, { Schema } from 'mongoose'

const userSchema= new Schema({
    name:String,
    email:{
        type:String,
        require:[true,"Email Required"]
            },
    password:{
        type: String,
        require:[true,"Password Required !!"]
    },
    about:String,
    profileURL:String,
    // address:{
    //     street:String,
    //     city:String,
    //     cou
    // }
})

export const User=mongoose.models.users || mongoose.model("users",userSchema)