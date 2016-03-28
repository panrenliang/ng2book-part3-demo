/*
 * Angular 2 decorators and services
 */
import {Component} from 'angular2/core';
import {RouteConfig, Router, ROUTER_DIRECTIVES} from 'angular2/router';
import {FORM_PROVIDERS} from 'angular2/common';
import { List, Map } from 'immutable';
import {RouterActive} from './common/directives/router-active';
import {Home} from './home/home';
import  {AuthBase} from './common/directives/auth';
import {MyPage} from './my/my';
import {CreatePage } from './admin/create';
import {EditPage} from './admin/edit';
import  {LoginPop} from './common/directives/login-pop';
/*
 * App Component
 * Top Level Component
 */
@Component({
  selector: 'app',
  providers: [ ...FORM_PROVIDERS ],
  directives: [ ...ROUTER_DIRECTIVES, RouterActive,LoginPop],
  pipes: [],
  styles: [`
    footer {
      margin: 30px;
      text-align:center;
    }
  `],
  template: `
    <nav>
      <div class="nav-wrapper">
        <a href="#" class="brand-logo">{{ name }}</a>
        <login-pop></login-pop>
        <ul id="nav-mobile" class="right hide-on-med-and-down">
          <li router-active>
            <a [routerLink]=" ['Index'] ">首页</a>
          </li>
          <li router-active>
            <a [routerLink]=" ['Create'] ">创建问卷</a>
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
  { path: '/admin/create', component: CreatePage, name:'Create'},
  { path: '/admin/edit/:id', component: EditPage, name: 'Edit' },
  { path: '/admin/my', component: MyPage, name: 'My' },
  // Async load a component using Webpack's require with es6-promise-loader
  { path: '/help', loader: () => require('./help/help')('Help'), name: 'Help' },
  { path: '/**', redirectTo: ['Index'] }
])
export class App {
  angularclassLogo = 'assets/img/angularclass-avatar.png';
  name = 'Angular DEMO - 问卷系统';
  url = 'https://github.com/gf-rd';
  constructor()
  {
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
