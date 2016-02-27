import {Injectable, bind} from 'angular2/core';
// import {Subject, BehaviorSubject, Observable} from 'rxjs';

@Injectable()
export class DataService {
  starter: string;
  ending: string;

  // questions: Observable<[any]>; // Todo Question interface
  // questions: [any]

  constructor() {
    this.data = {
      starter: '这是开始启示的欢迎语',
      ending: '这是结束的告知语',
      questionList: [{
        type: 'text',
        question: '这个是文本问题的描述'
      }]
    };
  }

  addQuestion(question: any): void {
    this.data.questionList.push(question);
  }

  addQuestionTemp(control: any): void {
    this.data.questionList.push({
      type: control.type,
      //question: `这个是${control.label}的描述`
      question: ``
    });
  }
}
