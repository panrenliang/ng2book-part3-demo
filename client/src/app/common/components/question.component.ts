import {OnInit, ChangeDetectionStrategy, EventEmitter} from 'angular2/core';
import { QuestionModel } from '../../models/question.model';

export class QuestionComponent implements OnInit {
  question:QuestionModel;
  desc: string;
  answer:string;
  isEdit: boolean = true;
  isPublished:boolean = false;
  delQuestionRequest:EventEmitter<any> = new EventEmitter();

  constructor() {
  }

  toSave() {
    this.isEdit = false;
    this.question.desc = this.desc;
  }

  toCancel(){
    this.isEdit = false;
    this.desc = this.question.desc;
  }

  toDelete(event:any){
    this.delQuestionRequest.emit(this.question);
  }

  ngOnInit(): void {
    this.desc = this.question.desc;
  }
}
