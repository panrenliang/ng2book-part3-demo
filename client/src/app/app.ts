/*
 * Angular 2 decorators and services
 */
import {Component} from 'angular2/core';
import {RouteConfig, Router, ROUTER_DIRECTIVES} from 'angular2/router';
import {FORM_PROVIDERS} from 'angular2/common';
import { List, Map } from 'immutable';
import {RouterActive} from './common/directives/router-active';
import {Home} from './home/home';

import {EditPage} from './edit/edit';
import {MyPage} from './my/my';
/*
 * App Component
 * Top Level Component
 */
@Component({
  selector: 'app',
  providers: [ ...FORM_PROVIDERS ],
  directives: [ ...ROUTER_DIRECTIVES, RouterActive ],
  pipes: [],
  styles: [`
    footer {
      margin: 30px;
      text-align:center;
    }

    .login-model .modal-content .title {
          text-align:center;
    }

    .modal-footer {
      text-align:center;
    }

    .modal-footer .btn {
        float:none;
     }

  `],
  template: `
    <nav>
      <div class="nav-wrapper">
        <a href="#" class="brand-logo">{{ name }}</a>
        <div class="right" style="margin-left: 5rem;margin-right: 2rem;">
            <a  *ngIf="!isLogin" (click)="openLoginModel()" >登录</a>
            <div *ngIf="isLogin" ><span>{{user.name}}</span><a href="/"> | 退出</a></div>
        </div>
        <ul id="nav-mobile" class="right hide-on-med-and-down">
          <li router-active>
            <a [routerLink]=" ['Index'] ">首页</a>
          </li>
          <li router-active>
            <a [routerLink]=" ['Edit'] ">创建问卷</a>
          </li>
          <li router-active>
            <a [routerLink]=" ['My'] ">我的问卷</a>
          </li>
          <li router-active>
            <a [routerLink]=" ['Help'] ">使用帮助</a>
          </li>
        </ul>
      </div>
    </nav>

    <main>
      <router-outlet></router-outlet>
    </main>
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
    <footer>
      广发证券 Angular2 Demo by <a [href]="url">@gf-rd</a>
      <div>
        <img [src]="angularclassLogo" width="10%">
      </div>
    </footer>
  `
})
@RouteConfig([
  { path: '/', component: Home, name: 'Index' },
  { path: '/home', component: Home, name: 'Home' },
  { path: '/admin/edit', component: EditPage, name: 'Edit' },
  { path: '/admin/my', component: MyPage, name: 'My' },
  // Async load a component using Webpack's require with es6-promise-loader
  { path: '/help', loader: () => require('./help/help')('Help'), name: 'Help' },
  { path: '/**', redirectTo: ['Index'] }
])
export class App {
  angularclassLogo = 'assets/img/angularclass-avatar.png';
  name = 'Angular DEMO - 问卷系统';
  url = 'https://github.com/gf-rd';
  isLogin:boolean = false;

  constructor()
  {
    this.user = {
      id:"",
      name:"用户名"
    };
  }


  openLoginModel(){
    $('#loginModel').openModal();
  }

  loginClick(){
    this.isLogin = true;
    this.user.key = this.user.name = $("#userName").val();
    $('#loginModel').closeModal();
  }

  cancelLoginClick(){
    $('#loginModel').closeModal();
  }

}

/*
 * Please review the https://github.com/AngularClass/angular2-examples/ repo for
 * more angular app examples that you may copy/paste
 * (The examples may not be updated as quickly. Please open an issue on github for us to update it)
 * For help or questions please contact us at @AngularClass on twitter
 * or our chat on Slack at https://AngularClass.com/slack-join
 * or via chat on Gitter at https://gitter.im/AngularClass/angular2-webpack-starter
 */
