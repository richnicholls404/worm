import { NextResponse } from "next/server";
import { getCurrentUser } from "@/lib/utils/server/auth";

export async function GET() {
  const { user, error } = await getCurrentUser();

  if (error) return NextResponse.json({ message: error }, { status: 401 });

  return NextResponse.json(user);
}
