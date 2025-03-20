import { auth } from "@/app/auth";
import { NextRequest, NextResponse } from "next/server";

const protectedRoutes = [""];

export default async function middleware(request: NextRequest) {
	const session = await auth();

	const { pathname } = request.nextUrl;

	const isProtected = protectedRoutes.some((route) =>
		pathname.startsWith(route)
	);

	if (isProtected && !session) {
		return NextResponse.redirect(new URL("/login", request.url));
	}

	return NextResponse.next();
}
