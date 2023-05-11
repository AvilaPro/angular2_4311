import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HoraValidaGuard implements CanActivate {
  constructor(private route: Router){

  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      const hora = new Date().getHours();
      console.log(hora);

      if (hora < 17) {
        this.route.navigate(['']);
        console.warn("Hora invalida para ir a Premium");
        return false;
      }
    return true;
  }

}
