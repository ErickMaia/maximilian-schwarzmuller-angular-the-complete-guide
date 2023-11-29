import { HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest } from "@angular/common/http";

export class AuthInterceptorService implements HttpInterceptor{
  intercept(req: HttpRequest<any>, next: HttpHandler){
    console.log("Your HTTP request was intercepted. ")

    const interceptedRequest = req.clone({
      headers: req.headers.append("Authorization", "Bearer xyz123")
    })

    return next.handle(interceptedRequest); 
  }
}
