import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
    if (req.method !== "GET") {
        return NextResponse.json({ error: "Method not allowed." }, { status: 405 })
    }
    let username = process.env.USERNAME;
    let password = process.env.PASSWORD;
    let auth = btoa(`${username}:${password}`);

    try {
        const response = await fetch("https://fedskillstest.coalitiontechnologies.workers.dev", {
            method: "GET",
            headers: {
                'Authorization': `Basic ${auth}`
            }
        });

        if(response.ok) {
            const data = await response.json();
            return NextResponse.json(data);
        }else {
            return NextResponse.json({ error: `Failed to fetch data: ${response.statusText}` }, { status: response.status });
        }

    }catch(error) {
        return NextResponse.json({error: "The following error occured when fetching the patients data:\n" + error}, {status: 500})
    }
}