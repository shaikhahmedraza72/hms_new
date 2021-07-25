import { HttpInterceptor } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthService } from '../service/auth.service';
import { StorageService } from '../service/storage.service';

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor{
  storage: Storage;
  constructor(private authService: AuthService, private storageService:StorageService ) {
    this.storage = this.storageService.get();
   }
   intercept(req, next){
let tokenizedReq = req.clone({
  setHeaders:{
    Authorization: `Bearer ${this.storage.getItem('HMSToken')}`
  }
})
return next.handle(tokenizedReq)
   }
}
