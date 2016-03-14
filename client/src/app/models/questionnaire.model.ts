import { QuestionModel } from './question.model';

export const enum QuestionnaireState{
  Normal,
  Preview,
  Published
}

export interface QuestionnaireModel{
  id?:number;   //问卷ID
  title:string; //问卷标题
  starter:string; //开始问候语
  ending:string;  //结束问候语
  questionList: QuestionModel[]; //问题列表
}
