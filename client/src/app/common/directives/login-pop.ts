///<reference path="auth.ts"/>
import {Component} from 'angular2/core';
import  {AuthBase} from './auth';

@Component({
  selector: 'login-pop',
  template: `
  <div class="right" style="margin-left: 5rem;margin-right: 2rem;">
            <a  *ngIf="!isLogin" (click)="openLoginModel()" >登录</a>
            <div *ngIf="isLogin" ><span>{{name}}</span><a href="/"> | 退出</a></div>
  </div>
    <div id="loginModel" class="modal login-model">
      <div class="modal-content">
        <h4 class="title">登录</h4>
        <div class="row">
          <div class="input-field col s12">
            <input id="userName" type="text" class="validate" >
            <label for="userName">用户名</label>
          </div>
        </div>
        <div class="row">
          <div class="input-field col s12">
            <input id="password" type="password" class="validate">
            <label for="password">密码</label>
          </div>
        </div>

      </div>
    <div class="modal-footer">
        <button type="button" *ngIf="!isLogin" (click)="loginClick()" class="btn btn-default">登录</button>
        <button type="button" *ngIf="!isLogin" (click)="cancelLoginClick()" class="btn btn-default">取消</button>
    </div>
  </div>
  `,
  styles:[`
     .login-model .modal-content .title {
          text-align:center;
    }

    .modal-footer {
      text-align:center;
    }

    .modal-footer .btn {
        float:none;
     }
  `]
})
export class LoginPop{
  name:string;
  isLogin:boolean = false;
  constructor() {
    this.isLogin = AuthBase.isLogin;
  }

  ngOnInit() {
  }

  static openLoginModel(){
    $('body').append($('#loginModel'));// append到一级,因为Material样式问题
    $('#loginModel').openModal();
  }

  loginClick(){
    this.isLogin = AuthBase.isLogin =  true;
    this.name = AuthBase.user.id = AuthBase.user.name = $("#userName").val();
    $('#loginModel').closeModal();
  }

  cancelLoginClick(){
    $('#loginModel').closeModal();
  }
}
