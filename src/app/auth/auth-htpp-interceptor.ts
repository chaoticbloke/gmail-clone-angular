import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
//we do not use "prodivdedIn:'root' with httpInterceptor"
@Injectable()
export class AuthHtppInterceptor implements HttpInterceptor{
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        console.log(req)
        const modifiedReq = req.clone({withCredentials:true})
      
        return next.handle(modifiedReq);
        //pass the flow to 'next interceptor' in chain or the fucntion which makes the request
    }
}
