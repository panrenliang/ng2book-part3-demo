import {Component} from 'angular2/core';
import {AuthBase} from '../common/directives/auth';
import {QuestionControlList} from './components/question-control-list';
import {QuestionnaireOutline} from './components/questionnaire-outline';
import {Questionnaire} from './components/questionnaire';

import {DataService} from './data.service';

console.log('`edit` page component loaded asynchronously');

@Component({
  selector: 'edit-page',
  template: require('./edit.html'),
  directives: [QuestionControlList, QuestionnaireOutline, Questionnaire],
  providers: [DataService],
  styles: [`
    .tabs {
      overflow: hidden;
    }
  `]
})
export class EditPage extends AuthBase{
  constructor(dataService: DataService) {
    super();
    this.dataStore = dataService.data;
  }

  ngOnInit() {
    console.log('hello `Edit Page` component');
    $('ul.tabs').tabs(); // Todo: specifc reference
  }

}

