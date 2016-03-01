import { Question } from './question';

export interface Questionnaire{
  id:number;   //问卷ID
  title:string; //问卷标题
  starter?:string; //开始问候语
  ending?:string;  //结束问候语
  questionList?: Array<Question>; //问题列表
}
