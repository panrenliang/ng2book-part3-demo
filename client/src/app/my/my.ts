import {Component,OnInit} from 'angular2/core';
import {AuthBase} from '../common/directives/auth';
import { Questionnaire } from '../models/questionnaire';
import { QuestionnaireCardComponent } from './components/questionnaire-card';
import { QuestionnaireDetailComponent } from './components/questionnaire-detail';

console.log('`My Page` component loaded asynchronously');

@Component({
  inputs:['questionnaire'],
  selector: 'my-page',
  templateUrl: 'app/my/my.html',
  directives:[QuestionnaireCardComponent, QuestionnaireDetailComponent]
})
export class MyPage extends AuthBase{
  questionnaires = questionnaires;
  selectedQuestionnaire:Questionnaire;
  constructor() {
    super();
  }

  ngOnInit() {
    console.log('hello `My Page` component');
  }

  onSelect(questionnaire:Questionnaire){
    this.selectedQuestionnaire = questionnaire;
  }

}

var questionnaires:Questionnaire[] = [
  {id:1111, title:'测试1'},
  {id:1111, title:'测试2'},
  {id:1111, title:'测试3'},
  {id:1111, title:'测试4'},
  {id:1111, title:'测试5'},
  {id:1111, title:'测试6'},
  {id:1111, title:'测试7'},
  {id:1111, title:'测试8'},
  {id:1111, title:'测试9'},
  {id:1111, title:'测试10'},
  {id:1111, title:'测试11'}
];
