import makeEmailToUser from "@/lib/sendMail";
import { URL } from 'url';
export async function GET(request){
    //check if request is from my site
    let url = request.nextUrl.searchParams
    let email = url.get('email');
    let name = url.get('name');
    makeEmailToUser(email,name);
}
