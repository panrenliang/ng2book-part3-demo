import {Component} from 'angular2/core';
import {AuthBase} from '../common/directives/auth';
import { QuestionType, QuestionModel } from '../models/question.model';
import { QuestionnaireModel } from '../models/questionnaire.model';
import {QuestionControlList} from './components/questionnaire.controls';
import {QuestionnairePage} from '../common/components/questionnaire.page';

console.log('`create` page component loaded asynchronously');

@Component({
  selector: 'create-page',
  template: require('./create.html'),
  directives:[QuestionControlList, QuestionnairePage],
  styles: [`
    .tabs {
      overflow: hidden;
    }
  `]
})
export class CreatePage extends AuthBase{
  questionnaire:QuestionnaireModel;
  constructor() {
    super();
  }

  addQuestion(type:QuestionType){
    let question;
    switch(type){
      case QuestionType.Text:
            question = {
              id:'',
              desc:'',
              type:type,
              answer:''
            };
            break;
      case QuestionType.SingleSelect:
            question = {
              id:'',
              desc:'',
              type:type,
              options:[{key:0, value:''},{key:1, value:''}],
              answer:''
            };
            break;
      case QuestionType.MultiSelect:
        question = {
          id:'',
          desc:'',
          type:type,
          options:[{key:0, value:''},{key:1, value:''}],
          answer:''
        };
        break;
      case QuestionType.Score:
        question = {
          id:'',
          desc:'',
          type:type,
          answer:''
        };
        break;
      default:
            question = {
              id:'',
              desc:'',
              type:type,
              answer:''
            };
            break;

    }
    this.questionnaire.questionList.push(question);
  }

  ngOnInit() {
    console.log('hello `Edit Page` component');
    $('ul.tabs').tabs();
    this.questionnaire = {
      title:'',
      starter:'',
      ending:'',
      questionList:[]
    };
  }
}
