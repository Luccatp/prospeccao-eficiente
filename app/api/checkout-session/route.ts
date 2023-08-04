import getStripe from "@/lib/stripe";
import { currentUser, useUser } from "@clerk/nextjs";
import { NextRequest, NextResponse } from "next/server";


export async function GET() {
    const stripe = getStripe();
    const user = await currentUser()
    if(!user) {
        return NextResponse.redirect("sign-in");
    } 
    if(stripe === null) {
        return NextResponse.json({message: "Erro inesperado ocorreu, tente novamente mais tarde"}, {status: 500})
    }

    if(user.emailAddresses.length > 0) {
        const isCustomer = await stripe.customers.list({
            email: user.emailAddresses[0].emailAddress
        })

        if(isCustomer.data.length > 0) {
            return NextResponse.redirect("/dashboard")
        }
    }  

    const session = await stripe.checkout.sessions.create({
        customer_email: user.emailAddresses[0].emailAddress,
        success_url: "http://localhost:3000/dashboard",
        line_items: [
            {
                price: "price_1NG5pJAELPJChHva93uqtJGj",
                quantity: 1
            }
        ],
        mode: "payment",
    })

    if(session.url === null) {
        return NextResponse.json({message: "Erro inesperado ocorreu, tente novamente mais tarde"}, {status: 500})
    }
    return NextResponse.json({url: session.url}, {status: 200})
}