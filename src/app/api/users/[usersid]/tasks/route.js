
import { getResponseMessage } from "../../../../../helper/responseMessage";
import { Task } from "../../../../../models/tasks";
import { NextResponse } from "next/server";

export async function GET(request, { params }) {
  const { usersid } = params;

  try {
    // get all the task of one user

    const tasks = await Task.find({
      userId: usersid,
    });
    return NextResponse.json(tasks);
  } catch (error) {
    console.log(error);
    return getResponseMessage("Failed to get tasks", 404, false);
  }
}