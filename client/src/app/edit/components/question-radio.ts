import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  EventEmitter
} from 'angular2/core';

class QuestionRadioItemModel {
  key: number;
  desc: string;
  constructor(key:number,desc:string) {
    this.key = key;
    this.desc = desc;
  }
}

@Component({
  selector: 'question-radio-item',
  properties:["item"],
  events:['delete','change'],
  template: `
               <div class="radio-item">
                  <div class="row" style="margin-bottom: 0;">
                    <div class="col s6">
                        <input placeholder="请填写选项" class="" [(ngModel)] = "item.desc" (change) ="onChange(item.desc)" type="text">
                    </div>
                    <div class="col s2">
                         <span (click) ="onDelete(item.desc)" style="
                                  height: 50px;
                                  line-height: 50px;
                          ">X</span>
                    </div>
                  </div>
              </div>
            `
})
export class QuestionRadioItem implements OnInit{

  constructor(){
    this.delete = new EventEmitter();
    this.change = new EventEmitter();
  }

  ngOnInit():any {
    return undefined;
  }

  onDelete(value){
    this.delete.next({key:this.item.key,desc:value});
  }

  onChange(value){
    this.change.next({key:this.item.key,desc:value});
  }


}

@Component({
  inputs: ['question'],
  selector: 'question-radio',
  directives:[QuestionRadioItem],
  template: `
  <p>radio 问题控件 - 问题描述： </p>
  <template [ngIf]="isEdit">
    <input placeholder="请填写问卷题目" [(ngModel)]="description" type="text">
     <div *ngFor="#item of questionRadioItems">
        <question-radio-item [item]="item" (delete)="toDelete($event)"></question-radio-item>
     </div>
    <button (click)="toSave()" class="btn btn-default">保存</button>
    <button (click)="toAdd()" class="btn btn-default">添加选项</button>
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

  //questionRadioItems: Array[];
  index:number = 0;

  generateIdentity(){
    return this.index++;
  }

  constructor() {
    this.questionRadioItems = [
      new QuestionRadioItemModel(this.generateIdentity(),''),
      new QuestionRadioItemModel(this.generateIdentity(),''),
      new QuestionRadioItemModel(this.generateIdentity(),''),
      new QuestionRadioItemModel(this.generateIdentity(),'')
    ];
  }

  toSave() {
    this.isEdit = false;
    this.question.question = this.description;
  }

  toAdd() {
    this.questionRadioItems.push('');
  }

  toDelete(e) {
    let d = e;
  }

  ngOnInit(): void {
    this.description = this.question.question;
  }
}
