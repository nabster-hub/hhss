import { NextResponse } from "next/server";
import axios from "axios";
import nodemailer from "nodemailer";


export async function POST(req) {

    const body = await req.json();

    const {
        name = "",
        email = "",
    } = body;

    try{
        console.log(process.env.SMTP_PASS);
        const transporter = nodemailer.createTransport({
            host: process.env.SMTP_HOST,
            port: process.env.SMTP_PORT,
            secure: false, // true для 465 порта, false для других
            auth: {
                user: process.env.SMTP_USER,
                pass: process.env.SMTP_PASS
            }
        });


        const mailOptions = {
            from: `"${name}" <${process.env.SMTP_USER}>`,
            to: "wp@hhss.info", // Кому отправляем
            subject: "New Contact Request",
            text: `You have a new contact request from ${name} (${email}).`,
            html: `<p>You have a new contact request from <br />Name: <strong>${name}</strong> <br /> Email: <a href="mailto:${email}">${email}</a>.</p>`
        };

        await transporter.sendMail(mailOptions);

        return NextResponse.json({ success: true });
    } catch (e) {
        console.error("Error sending email:", e);
        return NextResponse.json({ success: false, error: e.message });
    }
}