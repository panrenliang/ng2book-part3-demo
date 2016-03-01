import { Component } from 'angular2/core';
import { Questionnaire } from '../../models/questionnaire';

@Component({
    selector:'questionnaire-detail',
    templateUrl:'app/my/views/questionnaire-detail.html',
    inputs:['questionnaire']
})

export class QuestionnaireDetailComponent{
    questionnaire:Questionnaire
}