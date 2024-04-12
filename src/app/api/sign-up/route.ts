import dbConnect from "@/lib/dbConnect";
import UserModel from "@/model/User";
import bcrypt from "bcryptjs";

import { sendVerificationEmail } from "@/helpers/sendVerificationEmail";

export async function POST(request: Request){
    await dbConnect()

    try {
        const { email, password, username } = await request.json()
    } catch (error) {
        console.log('Error registering user', error)
        return Response.json(
            {
                success: false,
                error: 'Error registering user'
            },
            {
                status: 500
            }
        )
    }
}