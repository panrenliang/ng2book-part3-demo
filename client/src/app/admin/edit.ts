import {Component} from 'angular2/core';
import {AuthBase} from '../common/directives/auth';
import {RouteParams} from 'angular2/router';
import {QuestionnaireService} from '../services/questionnaire.service';
import { QuestionType, QuestionModel } from '../models/question.model';
import { QuestionnaireModel } from '../models/questionnaire.model';
import {QuestionControlList} from './components/questionnaire.controls';
import {QuestionnairePage} from '../common/components/questionnaire.page';

console.log('`edit` page component loaded asynchronously');

@Component({
  selector: 'edit-page',
  template: require('./edit.html'),
  providers:[QuestionnaireService],
  directives:[QuestionControlList, QuestionnairePage],
  styles: [`
    .tabs {
      overflow: hidden;
    }
  `]
})
export class EditPage extends AuthBase{
  questionnaire:QuestionnaireModel;
  private _id:string;
  constructor(
    private _questionnaireService:QuestionnaireService,
    routeParams:RouteParams) {
    this._id = routeParams.get('id');
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

  saveQuestionnaire(questionnaire:QuestionnaireModel){
    if(!questionnaire) {return;}
    this._questionnaireService.addQuestionnaire(questionnaire)
      .subscribe(
        error=> console.error(error));
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
    this._questionnaireService.getQuestionnaireById(this._id)
      .subscribe(
        questionnaire => this.questionnaire = questionnaire,
        error => console.error(error)
    );
  }
}
