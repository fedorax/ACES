import 'rxjs/add/operator/toPromise';

import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IFeature } from '../models/feature.interface';
import ApiService from 'app/configs/api.service';

@Injectable()
export class FeaturelService implements OnInit {

  private deleteUrl: string = ApiService.serverUrl + '/api/v1/feature/';
  private postUrl: string = ApiService.serverUrl + '/api/v1/feature/';
  private putUrl: string = ApiService.serverUrl + '/api/v1/feature/';
  private getUrl: string = ApiService.serverUrl + '/api/v1/feature/';


  constructor(private http: HttpClient) { }

  ngOnInit() {

  }

  // Checked
  get(id: String = '') {
    console.log('Get all model');
    return this.http
      .get(this.getUrl + id)
      .toPromise()
      .catch(this.handleError);
  }
  // Checked
  add(model: IFeature) {
    console.log('Add new model');
    return this.http
      .post(this.postUrl, JSON.stringify(model))
      .toPromise()
      .catch(this.handleError);
  }
  // Checked
  edit(id: String, model: IFeature) {
    console.log('Edit model by id:', id);
    return this.http
      .put(this.putUrl + id, JSON.stringify(model))
      .toPromise()
      .catch(this.handleError);
  }

  // Checked
  delete(id: String, model: IFeature) {
    console.log('delete model by id: ', id);
    return this.http.delete(this.deleteUrl + id)
      .toPromise()
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.log('HandleError', error);
    return Promise.reject(error.message || error);
  }
}
