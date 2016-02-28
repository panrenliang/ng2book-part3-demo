import {Component} from 'angular2/core';
import {AuthBase} from '../common/directives/auth';

console.log('`My Page` component loaded asynchronously');

@Component({
  selector: 'my-page',
  template: require('./my.html')
})
export class MyPage extends AuthBase{
  constructor() {
    super();
  }

  ngOnInit() {
    console.log('hello `My Page` component');
  }

}
