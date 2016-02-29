/*import {
  Directive,
  Query,
  QueryList,
  Attribute,
  ElementRef,
  Renderer,
  Optional
} from 'angular2/core';
import {RouteConfig, Router, ROUTER_DIRECTIVES,OnActivate, ComponentInstruction} from 'angular2/router';
/!**
 * RouterActive dynamically finds the first element with routerLink and toggles the active class
 *
 * ## Use
 *
 * ```
 * <li router-active="active"><a [routerLink]=" ['/Home'] ">Home</a></li>
 * <li [routerActive]=" activeStringValue "><a [routerLink]=" ['/Home'] ">Home</a></li>
 * ```
 *!/
@Directive({
  selector: '[auth-base]'
})
export class AuthBase implements OnActivate{

  routerOnActivate(next: ComponentInstruction, prev: ComponentInstruction) {
    return false;
  }

 static isLogin:boolean = false;

 constructor() {
   if(!AuthBase.isLogin){
      $('#loginModel').openModal();
   }
 }

  ngOnInit() {

  }
}
*/

import {LoginPop} from "./login-pop";
/**
 * 简单版的鉴权基类,现在是直接弹出登录框
 *
 * **/
export class AuthBase {

  static isLogin:boolean = false;
  static user = {
    id:"",
    name:"用户名"
  };

  constructor() {
    if(!AuthBase.isLogin){
      LoginPop.openLoginModel();
    }
  }
}
