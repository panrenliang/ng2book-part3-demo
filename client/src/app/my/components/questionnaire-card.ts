import { Component } from 'angular2/core';
import { Questionnaire } from '../../models/questionnaire';

@Component({
  selector:'questionnaire-card',
  templateUrl:'app/my/views/questionnaire-card.html',
  inputs:['questionnaire']
})

export class QuestionnaireCardComponent{
  questionnaire:Questionnaire
}
