import { RedirectToSignIn, authMiddleware, redirectToSignIn } from "@clerk/nextjs";
import getStripe from "./lib/stripe";
import { NextResponse } from "next/server";
import { goToCheckout } from "./lib/fetchCheckout-session";

// This example protects all routes including api/trpc routes
// Please edit this to allow other routes to be public as needed.
// See https://clerk.com/docs/nextjs/middleware for more information about configuring your middleware
export default authMiddleware({
    publicRoutes: [
        "/", "/sign-in", "/sign-up", "/capajpg"
    ],
    apiRoutes: [
        "/api/checkout-session"
    ]
});

export const config = {
    matcher: ["/((?!.*\\..*|_next).*)","/","/(api|trpc)(.*)"],
};
