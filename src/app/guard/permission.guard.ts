import {CanActivate} from "@angular/router";
/**
 * Created by qs on 2017/9/21.
 */
export class PermissionGuard implements CanActivate{
  canActivate(){
    var hasPermission:boolean=Math.random()<0.5;
    if(!hasPermission){
      console.log("用户无权访问此股票详情");
    }
    return hasPermission;
  }

}
