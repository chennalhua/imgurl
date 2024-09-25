import { NextResponse } from "next/server";

export async function GET(request) {
    const returnData = [
        {
            name: 'User',
            role: '1',
            mail:'test@mail.goldennet.com.tw'
        },
        {
            name: 'User2',
            role: '2',
            mail:'test2@mail.goldennet.com.tw'
        },
        {
            name: 'User3',
            role: '3',
            mail:'test3@mail.goldennet.com.tw'
        }
    ]
    return NextResponse.json({ userData: returnData, ResponseCode: '0', ResponseMes: 'success' }, { status: 200 });
}

// To handle a POST request to /api
export async function POST(request) {
    // Do whatever you want
    return NextResponse.json({ message: "Hello World" }, { status: 200 });
}