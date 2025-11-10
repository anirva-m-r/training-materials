import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET() {
  const tasks = await prisma.task.findMany({ include: { user: true } });
  return NextResponse.json(tasks);
}
