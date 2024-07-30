import { NextResponse, NextRequest } from "next/server";
import { SignUp as ISignUp } from "@/schemas/signup";
import { connectMongoDB } from "@/lib/mongo";
import User from "@/models/user";
import bcrypt from "bcryptjs";
export const hashPassword = async (password: string) => {
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);
  return hashedPassword;
};

export const comparePassword = async (password: string, hashedPassword:string) => {
  const isMatch = await bcrypt.compare(password, hashedPassword);
  return isMatch;
};

export async function POST(req: NextRequest, res: NextResponse) {
  const data: ISignUp = await req.json();

  const hashedPassword = await hashPassword(data.password);
  data.password = hashedPassword;

  await connectMongoDB();
  await User.create(data);

  const response = new NextResponse(JSON.stringify({ message: "User created successfully" }), res);

  return response
}