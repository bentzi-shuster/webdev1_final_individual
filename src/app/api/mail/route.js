import { NextResponse } from "next/server";
import makeEmailToUser from "@/lib/sendMail";
export async function GET(request){
    try{
    //check if request is from my site
    let url = request.nextUrl.searchParams
    let email = url.get('email');
    let name = url.get('name');
    await makeEmailToUser(email,name);
    return NextResponse.json({message:"email sent"},{status:200});
    }catch(e){
        console.log(e);
        return NextResponse.json({message:"email not sent"},{status:500});
    }

}
