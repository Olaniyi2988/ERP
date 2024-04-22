// // auth.interceptor.ts
// import { Injectable } from '@angular/core';
// import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
// import { Observable } from 'rxjs';
// import { AuthService } from './auth.service';

// @Injectable()
// export class AuthInterceptor implements HttpInterceptor {
//   constructor(private authService: AuthService) {}

//   intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
//     const authToken = this.authService.getToken(); // Assuming you have a method to get the auth token from AuthService
//     const authReq = req.clone({
//       setHeaders: {
//         Authorization: `Bearer ${authToken}`
//       }
//     });
//     return next.handle(authReq);
//   }
// }
