import {Injectable} from 'angular2/core';
import {Http, Response, Headers, RequestOptions} from 'angular2/http';
import {QuestionnaireModel} from '../models/questionnaire.model';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class QuestionnaireService{

  constructor(private http:Http){
  }

  private _apiHost = 'http://localhost:8100';

  getQuestionnaires(){
    return this.http.get(this._apiHost + '/questionnaires')
                    .map(res=><QuestionnaireModel[]> res.json().data)
                    .catch(this.handleError);
  }

  getQuestionnaireById(id){
    return this.http.get(this._apiHost + '/questionnaire/' + id)
                    .map(res=><QuestionnaireModel>res.json().data)
                    .catch(this.handleError)
  }

  addQuestionnaire(questionnaire:QuestionnaireModel):Observable<QuestionnaireModel> {
    let body = JSON.stringify(questionnaire);
    let headers = new Headers({'Content-Type':'application/json'});
    let options = new RequestOptions({headers:headers});

    return this.http.post(this._apiHost + '/questionnaire/add', body, options)
                  .map(res => <QuestionnaireModel>res.json().data)
                  .catch(this.handleError);
  }

  private handleError(error: Response){
    console.error(error);
    return Observable.throw(error.json().error || 'server error');
  }
}
