import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import { createToken } from "@/lib/utils/server/auth";
import { serialize } from "cookie";
import { PrismaClient } from "@prisma/client";

type User = {
  id: number;
  username: string;
  password: string;
};

const users: User[] = [
  { id: 1, username: "user1", password: bcrypt.hashSync("password1", 8) },
  // Add more users as needed
];

export async function POST(req: NextRequest) {
  const { username, password } = await req.json();
  const prisma = new PrismaClient();

  const user = await prisma.user.findFirst({
    where: {
      username,
    },
  });
  if (!user || !bcrypt.compareSync(password, bcrypt.hashSync(user.password, 8)))
    // remove extra hashing when seed has been run
    return NextResponse.json({ message: "User not found" }, { status: 400 });

  const token = createToken(user);

  const response = NextResponse.json({ success: true });
  response.headers.set(
    "Set-Cookie",
    serialize("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
      maxAge: 3600, // 1 hour
      path: "/",
    })
  );

  return response;
}
