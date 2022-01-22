import { HttpEvent, HttpEventType, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import {filter, tap} from "rxjs/operators"
//we do not use "prodivdedIn:'root' with httpInterceptor"
@Injectable()
export class AuthHtppInterceptor implements HttpInterceptor{
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        //console.log(req)
        const modifiedReq = req.clone({withCredentials:true})
      
        return next.handle(modifiedReq).pipe(

            //filter(val=>val.type ===HttpEventType.Sent),
            //in case if we want only to flow sent request throw next of pipe()
            (tap((res:any)=>{
           if(res.type === HttpEventType.Sent){
            //    console.log("Request was sent to server",res);
               
           }
           if(res.type ===HttpEventType.Response){
            //    console.log("Got response from Server/API",res);
               
           }
            
        })));
        //pass the flow to 'next interceptor' in chain or the fucntion which makes the request
    }
}
