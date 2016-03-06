import {
  Component,
  OnInit,
  Input,
  ChangeDetectionStrategy
} from 'angular2/core';

@Component({
  selector: 'question-score',
  template: `
  <p>分值题</p>
  <template [ngIf]="isEdit">
    <input placeholder="请输入问题" [(ngModel)]="description">
    <button type="button" (click)="toSave()" class="btn btn-default">保存</button>
    <button type="button" (click)="toCancel()" class="btn btn-default">取消</button>
  </template>
  <template [ngIf]="!isEdit">
    <p>{{description}}</p>
    <p class="range-field">
      <label>分值：{{score}}</label>
      <input type="range" [(ngModel)]="score" id="test5" min="0" max="100" />
    </p>
    <button type="button" (click)="isEdit=true" class="btn btn-default">编辑</button>
    <button type="button" (click)="toDelete()" class="btn btn-default">删除</button>
  </template>
  `
})
export class QuestionScore implements OnInit {
  @Input() question;
  // thread: Thread;
  isEdit: boolean = true;
  // controls: Array[any];
  description: string;

  score:number;

  constructor() {
  }

  toSave() {
    this.isEdit = false;
    this.question.question = this.description;
  }

  toCancel(){
    this.isEdit = false;
    this.description = this.question.question;
  }

  toDelete(){
  }

  ngOnInit(): void {
    this.description = this.question.question;
  }
}
