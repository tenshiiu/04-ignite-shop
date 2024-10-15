import { stripe } from "@/lib/stripe";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const priceId = "price_1Q8Q2zDKlyt3o3NiXlo68bVS";

    const successUrl = `${process.env.NEXT_URL}/sucesss`;
    const cancelUrl = `${process.env.NEXT_URL}/`;

    const checkoutSession = await stripe.checkout.sessions.create({
        success_url: successUrl,
        cancel_url: cancelUrl,
        mode: "payment",
        line_items: [
            {
              price: priceId,
              quantity: 1,
            }
        ]
    })

    return res.status(201).json({
        checkoutUrl: checkoutSession,
    })
}