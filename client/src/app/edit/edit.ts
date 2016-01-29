import {Component} from 'angular2/core';

console.log('`edit` page component loaded asynchronously');

@Component({
  selector: 'edit-page',
  template: require('./edit.html')
})
export class EditPage {
  constructor() {

  }

  ngOnInit() {
    console.log('hello `Edit Page` component');
  }

}
