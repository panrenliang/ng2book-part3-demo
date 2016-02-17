import {
  Component,
  OnInit,
  ChangeDetectionStrategy
} from 'angular2/core';

@Component({
  inputs: ['question'],
  selector: 'question-radio',
  template: `
  <p>radio 问题控件 - 问题描述： </p>
  <template [ngIf]="isEdit">
    <textarea name="question-tx" id="" cols="30" rows="10" [(ngModel)]="description"></textarea>
    <button (click)="toSave()" class="btn btn-default">保存</button>
    <button (click)="toSave()" class="btn btn-default">添加选项</button>
  </template>
  <template [ngIf]="!isEdit">
    <p>{{question.question}}</p>
    <p>
      <input name="group1" type="radio" id="test2" />
      <label for="test2">选择1</label>
    </p>
    <p>
      <input class="with-gap" name="group1" type="radio" id="test3"  />
      <label for="test3">选择2</label>
    </p>
    <button type="button" (click)="isEdit=true" class="btn btn-default">编辑</button>
  </template>
  `
})
// <!-- <button (click)="isEdit=true" /> -->
export class QuestionRadio implements OnInit {
  // thread: Thread;
  isEdit: boolean = false;
  // controls: Array[any];
  description: string;

  constructor() {
  }

  toSave() {
    this.isEdit = false;
    this.question.question = this.description;
  }

  ngOnInit(): void {
    this.description = this.question.question;
  }
}