import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";
import { map, take } from "rxjs/operators";
import { AuthService } from "./auth.service";

@Injectable({providedIn:'root'})
export class Authguard implements CanActivate{

    constructor(private asService: AuthService, private router:Router){}
canActivate( route:ActivatedRouteSnapshot, router:RouterStateSnapshot):boolean | Promise<boolean> | Observable <boolean | UrlTree> 
{
return this.asService.user.pipe(take(1),map( user =>
    {
        const isAuth = !!user;
        if(isAuth)
        {
            return true;

        }
        return this.router.createUrlTree(['/auth'])
    }));
}

}