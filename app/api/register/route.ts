import { NextRequest, NextResponse } from "next/server";

export default async function postHandler(req: NextRequest) {
    try {
        const { name, email, password } = await req.json()

        console.log("name: ", name)
        console.log('email : ', email)
        console.log('password : ', password)

        return NextResponse.json({ message: "user registered" }, { status: 200 })
    } catch (error) {
        return NextResponse.json({ message: "error occured while registering the user" }, { status: 500 })
    }
}