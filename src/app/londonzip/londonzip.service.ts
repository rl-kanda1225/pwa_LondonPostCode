import { Injectable } from '@angular/core';
import { LondonZips } from './londonzip';
import { HttpClient  } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';


@Injectable()
export class LondonZipsService {

  ServiceLocZips: Array<LondonZips>;

  constructor(private ServiceHttp: HttpClient) {

  }

  public HandleError(e: any): void {
    console.log(e.error.Message);
  }

  public HttpGetLondonZips(): Observable<LondonZips[]> {
      const getURL = '../assets/londonpostcodes.json';
      return this.ServiceHttp.get<LondonZips[]>(getURL);
    }
}
