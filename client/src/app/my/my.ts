import {Component,OnInit} from 'angular2/core';
import {QuestionnaireService} from '../services/questionnaire.service';
import { QuestionnaireModel } from '../models/questionnaire.model';
import { QuestionnaireCardComponent } from './components/questionnaire-card';
import { QuestionnaireDetailComponent } from './components/questionnaire-detail';

console.log('`My Page` component loaded asynchronously');

@Component({
  inputs:['questionnaire'],
  providers:[QuestionnaireService],
  selector: 'my-page',
  templateUrl: 'app/my/my.html',
  directives:[QuestionnaireCardComponent, QuestionnaireDetailComponent]
})
export class MyPage implements OnInit{
  questionnaires: QuestionnaireModel[];
  selectedQuestionnaire:QuestionnaireModel;
  constructor(private _questionnaireService: QuestionnaireService) {
  }

  ngOnInit() {
    this._questionnaireService.getQuestionnaires()
            .subscribe(
                    questionnaires => this.questionnaires = questionnaires,
                    error => console.error(error)
            );
  }

  onSelect(questionnaire:QuestionnaireModel){
    this.selectedQuestionnaire = questionnaire;
  }
}
