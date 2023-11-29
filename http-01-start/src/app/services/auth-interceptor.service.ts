import { HttpEventType, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { tap } from "rxjs/operators";

export class AuthInterceptorService implements HttpInterceptor{
  intercept(req: HttpRequest<any>, next: HttpHandler){
    console.log("Your HTTP request was intercepted. ")

    const interceptedRequest = req.clone({
      headers: req.headers.append("Authorization", "Bearer xyz123")
    })

    return next.handle(interceptedRequest)
      .pipe(
        tap(
          event => {
            if(event.type === HttpEventType.Response){
              console.log("Response arrived. Body data: ")
              console.log(event.body)
            }
          }
        )
      ); 
  }
}
