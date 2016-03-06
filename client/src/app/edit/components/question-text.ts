import {
  Component,
  OnInit,
  Input,
  ChangeDetectionStrategy
} from 'angular2/core';

@Component({
  selector: 'question-text',
  template: `
  <p>问答题</p>
  <template [ngIf]="isEdit">
    <input placeholder="请输入问题" [(ngModel)]="description">
    <button type="button" (click)="toSave()" class="btn btn-default">保存</button>
    <button type="button" (click)="toCancel()" class="btn btn-default">取消</button>
  </template>
  <template [ngIf]="!isEdit">
    <p>{{description}}</p>
    <input placeholder="请输入问题的答案" [(ngModel)]="answer">
    <button type="button" (click)="isEdit=true" class="btn btn-default">编辑</button>
    <button type="button" (click)="toDelete()" class="btn btn-default">删除</button>
  </template>
  `
})
export class QuestionText implements OnInit {
  @Input() question;
  // thread: Thread;
  isEdit: boolean = true;
  // controls: Array[any];
  description: string;

  answer:string;

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
    this.description = this.question.question //'';//;
    /*this.threadsService.currentThread
      .subscribe( (currentThread: Thread) => {
        this.selected = currentThread &&
          this.thread &&
          (currentThread.id === this.thread.id);
      });*/
  }
}
