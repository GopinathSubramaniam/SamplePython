import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { URLS } from '../urls'
import { Employee } from '../models'

@Injectable()
export class PersonService {

  constructor(private httpClient: HttpClient) { }

  createPerson(formData: any) {
    return this.httpClient.post(URLS.CREATE_EMP, formData);
  }

  getPersonList(): Observable<Employee[]> {
    return this.httpClient.get<Employee[]>(URLS.GET_EMP_LIST);
  }

  mathcFace(formData: any) {
    return this.httpClient.post(URLS.MATCH_FACE, formData);
  }

}
