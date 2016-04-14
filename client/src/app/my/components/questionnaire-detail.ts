import { Component } from 'angular2/core';
import { Router } from 'angular2/router';
import { QuestionnaireModel } from '../../models/questionnaire.model';

@Component({
    selector:'questionnaire-detail',
    template:`
    <div *ngIf="questionnaire">
    <h3>{{questionnaire.title}}</h3>
    <span>ID: {{questionnaire.id}}</span>
    <ul>
        <li><a class="waves-effect waves-teal btn-flat"><i class="large material-icons top">schedule</i>完整统计</a></li>
        <li><a class="waves-effect waves-teal btn-flat"><i class="large material-icons top">play_circle_filled</i>开始回收</a></li>
        <li><a (click)="gotoEditPage(questionnaire.id)" class="waves-effect waves-teal btn-flat"><i class="large material-icons top">library_books</i>编辑问卷</a></li>
    </ul>
</div>
    `,
    inputs:['questionnaire']
})

export class QuestionnaireDetailComponent{
  private questionnaire:QuestionnaireModel;

  constructor(private _router:Router){}

  gotoEditPage(id:string){
    this._router.navigate(['Edit',{id:id}]);
  }
}
