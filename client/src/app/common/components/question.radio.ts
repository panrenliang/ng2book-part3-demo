import {Component} from 'angular2/core';
import {QuestionComponent} from './question.component';

@Component({
  inputs:['question','isPublished','isEdit'],
  outputs:['delQuestionRequest'],
  selector: 'question-radio',
  template: `
  <p>单选题</p>
  <template [ngIf] = "isPublished">
     <p>{{desc}}</p>
     <p *ngFor="#item of options">
        <input name="group1" type="radio" id="{{item.key}}"  />
        <label attr.for="{{item.key}}">{{item.value}}</label>
     </p>
  </template>
  <template [ngIf]="!isPublished && isEdit">
    <input placeholder="请输入问题" [(ngModel)]="desc" required>
     <div *ngFor="#item of options" class="ratio-item">
        <div class="row" style="margin-bottom: 0;">
          <div class="col s6">
              <input placeholder="请填写选项" class="" [(ngModel)] = "item.value"  type="text">
          </div>
          <div class="col s2">
               <span (click) ="toDeleteItem($index)" style="
                        height: 50px;
                        line-height: 50px;
                ">X</span>
          </div>
        </div>
     </div>
    <button type="button" (click)="toSave()" class="btn btn-default">保存</button>
    <button type="button" (click)="toAddItem()" class="btn btn-default">添加选项</button>
    <button type="button" (click)="toCancel()" class="btn btn-default">取消</button>
  </template>
  <template [ngIf]="!isPublished && !isEdit">
    <p>{{desc}}</p>
     <p *ngFor="#item of options">
        <input name="group1" disabled="disabled" type="radio" id="{{item.key}}"  />
        <label attr.for="{{item.key}}">{{item.value}}</label>
     </p>
    <button type="button" (click)="isEdit=true" class="btn btn-default">编辑</button>
    <button type="button" (click)="toDelete($event)" class="btn btn-default">删除</button>
  </template>
  `
})
export class QuestionRadioCmp extends QuestionComponent {
  options:any[];
  key:number;

  toDeleteItem(index:number){
    if(this.options.length <= 2 ){
      return;
    }
    this.options.splice(index, 1);
  }

  toAddItem(){
    this.options.push({key:this.key++, value:''});
  }

  ngOnInit(): void {
    super.ngOnInit();
    this.options = this.question.options;
    this.key = this.options.length - 1;
  }
}
