import { Component, OnInit } from 'angular2/core';
import { QuestionnaireModel } from '../../models/questionnaire.model';

@Component({
  inputs:['questionnaire'],
  selector:'questionnaire-outline',
  template:`
  <ul *ngIf="questionnaire">
    <li *ngFor="#q of questionnaire.questionList">
      <span>{{q.desc}}</span>
    </li>
  </ul>
  `
})

export class QuestionnaireOutline implements OnInit{

  private questionnaire:QuestionnaireModel;

  ngOnInit():void{
  }
}
