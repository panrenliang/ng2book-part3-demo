import { Component } from 'angular2/core';
import { QuestionnaireModel } from '../../models/questionnaire.model';

@Component({
  selector:'questionnaire-card',
  template:`
    <div class="card">
      <div class="card-image">
        <img src="{{'http://localhost:8100/thumbnails/' + questionnaire.id + '.png'}}">
      </div>
      <div class="card-action">
        <span class="grey-text text-darken-4">{{questionnaire.title}}<i class="material-icons right">more_vert</i></span>
      </div>
    </div>
  `,
  inputs:['questionnaire']
})

export class QuestionnaireCardComponent{
  questionnaire:QuestionnaireModel
}
