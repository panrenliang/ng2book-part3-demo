import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  EventEmitter
} from 'angular2/core';

import { List } from 'immutable';

class QuestionCheckboxItemModel {
  key: number;
  desc: string;
  constructor(key:number,desc:string) {
    this.key = key;
    this.desc = desc;
  }
}

@Component({
  selector: 'question-checkbox-item',
  properties:["item"],
  events:['delete'],
  template: `
               <div class="radio-item">
                  <div class="row" style="margin-bottom: 0;">
                    <div class="col s6">
                        <input placeholder="请填写选项" class="" [(ngModel)] = "item.desc"  type="text">
                    </div>
                    <div class="col s2">
                         <span (click) ="onDelete(item)" style="
                                  height: 50px;
                                  line-height: 50px;
                          ">X</span>
                    </div>
                  </div>
              </div>
            `
})
export class QuestionCheckboxItem implements OnInit{

  constructor(){
    this.delete = new EventEmitter();
  }

  ngOnInit():any {
    return undefined;
  }

  onDelete(value){
    this.delete.next(value);
  }
}

@Component({
  inputs: ['question'],
  selector: 'question-checkbox',
  directives:[QuestionCheckboxItem],
  template: `
  <template [ngIf]="isEdit">
     <p>多选题</p>
     <input placeholder="请填写多选题目" [(ngModel)]="description" type="text">
     <div *ngFor="#item of QuestionCheckboxItems">
        <question-checkbox-item [item]="item" (delete)="toDelete($event)"></question-checkbox-item>
     </div>
    <button (click)="toSave()" class="btn btn-default">保存</button>
    <button (click)="toAdd()" class="btn btn-default">添加选项</button>
  </template>
  <template [ngIf]="!isEdit">
    <p>{{description}}</p>
     <p *ngFor="#item of QuestionCheckboxItems">
        <input name="checkboxGroup" type="checkbox" id="test{{item.key}}"  />
        <label attr.for="test{{item.key}}">{{item.desc}}</label>
     </p>
    <button type="button" (click)="isEdit=true" class="btn btn-default">编辑</button>
  </template>
  `
})
// <!-- <button (click)="isEdit=true" /> -->
export class QuestionCheckbox implements OnInit {
  // thread: Thread;
  isEdit: boolean = true;
  // controls: Array[any];
  description: string;

  index:number = 0;
  QuestionCheckboxItems:List<QuestionCheckboxItemModel>;
  private question;

  generateIdentity(){
    return this.index++;
  }

  constructor() {
    this.QuestionCheckboxItems =  List<QuestionCheckboxItemModel>();
    this.QuestionCheckboxItems = this.QuestionCheckboxItems.push(new QuestionCheckboxItemModel(this.generateIdentity(),""));
    this.QuestionCheckboxItems = this.QuestionCheckboxItems.push(new QuestionCheckboxItemModel(this.generateIdentity(),""));
  }

  toSave() {
    this.isEdit = false;
    //this.question.question = this.description;
  }

  toAdd() {
    this.QuestionCheckboxItems = this.QuestionCheckboxItems.push(new QuestionCheckboxItemModel(this.generateIdentity(),""));
  }

  toDelete(item: QuestionCheckboxItemModel) {
    // at least two items
    if(this.QuestionCheckboxItems.size <= 2){
      return;
    }
    this.QuestionCheckboxItems = List<QuestionCheckboxItemModel>
    (this.QuestionCheckboxItems.filter((i: QuestionCheckboxItemModel) => i.key != item.key));
  }

  ngOnInit(): void {
    this.description = this.question.question;
  }
}
