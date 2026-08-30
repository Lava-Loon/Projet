import bcrypt from "bcrypt";

import prisma from "@/app/libs/prismadb";
import { NextResponse } from "next/server";

export async function POST(
  request: Request
) {
  try { 
    const body = await request.json();
    const {
      email,
      name,
      password,
      confirmPassword
    } = body;

    if (!email || !name || !password || !confirmPassword) {
      return new NextResponse('Missing info', { status: 400 });
    }

    if (password !== confirmPassword) {
      return new NextResponse("Password do not match ", { status: 400 });
    }

    const hashedPassword = await bcrypt.hash(password, 12);

    const user = await prisma.user.create({
      data: {
        email,
        name,
        hashedPassword
      }
    });

    return NextResponse.json(user);
  } catch (error: any) {
    console.log(error, 'REGISTRATION_ERROR');
    return new NextResponse('Internal Error', { status: 500 });
  }
};
