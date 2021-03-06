import {Component, OnInit} from 'angular2/core';
import {Router} from 'angular2/router';
import {QuestionnaireService} from '../services/questionnaire.service';
import { QuestionType, QuestionModel } from '../models/question.model';
import { QuestionnaireModel, QuestionnaireState } from '../models/questionnaire.model';
import {QuestionControlList} from './components/questionnaire.controls';
import { QuestionnaireOutline } from './components/questionnaire.outline';
import {QuestionnairePage} from '../common/components/questionnaire.page';

console.log('`create` page component loaded asynchronously');

@Component({
  selector: 'create-page',
  template: require('./create.html'),
  providers:[QuestionnaireService],
  directives:[QuestionControlList, QuestionnaireOutline, QuestionnairePage],
  styles: [`
    .tabs {
      overflow: hidden;
    }
  `]
})
export class CreatePage implements OnInit{
  questionnaire:QuestionnaireModel;
  constructor(private _questionnaireService:QuestionnaireService, private _router:Router) {
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
    questionnaire.state = QuestionnaireState.Edit;
    this._questionnaireService.addQuestionnaire(questionnaire)
          .subscribe(
            questionnaire => this._router.navigate(['My']),
            error=> console.error(error));
  }

  ngOnInit() {
    console.log('hello `Edit Page` component');
    $('ul.tabs').tabs();
    this.questionnaire = {
      title:'',
      starter:'',
      ending:'',
      state: QuestionnaireState.Create,
      questionList:[]
    };
  }
}
