import { NextResponse } from "next/server";
import { connectDb } from "../../../helper/db";
import { User } from "../../../models/user";
import bcrypt from "bcryptjs"
connectDb();
export async function GET(request) {
  let Users = [];
  try {
    Users = await User.find();
  } catch (error) {
    return NextResponse.json({
      message: "failed to get users",
      success: false,
    });
  }

  return NextResponse.json(Users);
}

// export function DELETE(request){
//     return NextResponse.json({
//         message:"deleted !!",
//         status:true
//     },{status: 201,statusText:"deleted "})
// }

export async function POST(request) {
  // fetch user detail from  request

  const { name, email, password, about,roles, profileURL } = await request.json();

  console.log({ name, email, password, about,roles, profileURL });

  // create user object with user model

  const user = new User({
    name,
    email,
    password,
    about,
    roles,
    profileURL,
   
  });

  try {
    // save the object to  database
    user.password = bcrypt.hashSync(
      user.password,
      parseInt(process.env.BCRYPT_SALT)
    );

    console.log(user);
    const createdUser = await user.save();
    const response = NextResponse.json(user, {
      status: 201,
    });
    return response;
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      {
        message: "failed to create user !!",
        status: false,
      },
      {
        status: 500,
      }
    );
  }
}