import { User } from "@prisma/client";
import { cookies } from "next/headers";
import jwt from "jsonwebtoken";

export type UserPayload = Pick<User, "id" | "username">;

const secretKey = process.env.JWT_SECRET!;

export const createToken = (user: Partial<User>) => {
  return jwt.sign(
    {
      id: user.id,
      username: user.username,
    },
    secretKey,
    { expiresIn: "1h" }
  );
};

export const verifyToken = (token: string) => {
  try {
    return jwt.verify(token, secretKey);
  } catch (error) {
    return null;
  }
};

export const getCurrentUser = async (): Promise<{
  user?: UserPayload;
  error?: string;
}> => {
  const token = cookies().get("token")?.value;

  if (!token) return { error: "Not authenticated" };

  const decodedToken = verifyToken(token);
  if (!decodedToken) return { error: "Invalid token" };

  return { user: decodedToken as UserPayload };
};
