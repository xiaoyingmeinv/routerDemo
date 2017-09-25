import {Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, Router} from "@angular/router";
import {Stock} from "../stock/stock.component";
import {Observable} from "rxjs";
import {inject} from "@angular/core/testing";
import {Injectable} from "@angular/core";
/**
 * Created by qs on 2017/9/22.
 */
@Injectable()
export class StockResolve implements Resolve<Stock>{

  constructor(private router:Router){

  }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Stock>|Promise<Stock>|Stock {
    let id=route.params['id'];
    if(id==1){
      return new Stock("IBM",1);
    }else{
      this.router.navigate(['/home']);
      return undefined;
    }
  }

}
