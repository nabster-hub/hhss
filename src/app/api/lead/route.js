import { NextResponse } from "next/server";
import axios from "axios";


export async function POST(req) {

    const body = await req.json();

    const {
        name = "",
        email = "",
    } = body;

    try{
        console.log(name, email);
        const res = {
            success: true,
        };
        return NextResponse.json(res);
    } catch (e) {
        return NextResponse.json({ success: false, error: e });
    }
}