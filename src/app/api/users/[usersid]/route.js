import { NextResponse } from "next/server";
import { User } from "../../../../models/user";
export async function DELETE(request, { params }) {
  const { usersid } = params;

  try {
    await User.deleteOne({
      _id: usersid,
    });
    return NextResponse.json({
      message: "User deleted successfully",
      status: 201,
      success: true,
    });
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      {
        message: "Unable to delete the user",
        status: 400,
      },
      { status: 400 }
    );
  }
}
export async function GET(request, { params }) {
  const { usersid } = params;
  console.log(usersid);
  try {
    let user = await User.findById(usersid);
    if (!user) {
      return NextResponse.json(
        {
          message: "User not found",
          status: 404,
          success: false,
        },
        { status: 404 }
      );
    }
    return NextResponse.json(
      {
        user,
        status: 201,
        success: true,
      },
      { status: 201 }
    );
  } catch (error) {
    console.log(error);
    let errorMessage = "Unable to retrieve user data";
    if (
      error.name === "MongooseError" &&
      error.message.includes("buffering timed out")
    ) {
      errorMessage = "Database operation timed out";
    }
    return NextResponse.json(
      {
        message: errorMessage,
        status: 500,
        success: false,
      },
      { status: 500 }
    );
  }
}

export async function PUT(request, { params }) {
  const { usersid } = params;

  const { name, password, about, profileURL } = await request.json();

  try {
    const user = await User.findById(usersid);

    user.name = name;
    user.about = about;
    user.password = password;
    user.profileURL = profileURL;
    // add more informationss

    const updatedUser = await user.save();
    return NextResponse.json(updatedUser);
  } catch (error) {
    return NextResponse.json({
      message: "failed to update user !!",
      success: false,
    });
  }
}
