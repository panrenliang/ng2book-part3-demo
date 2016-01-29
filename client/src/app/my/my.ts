import {Component} from 'angular2/core';

console.log('`My Page` component loaded asynchronously');

@Component({
  selector: 'my-page',
  template: require('./my.html')
})
export class MyPage {
  constructor() {

  }

  ngOnInit() {
    console.log('hello `My Page` component');
  }

}