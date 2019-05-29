import { Injectable } from '@angular/core';

import { environment } from '../../../environments/environment';

import { ApiServer } from './api-server';


@Injectable({
  providedIn: 'root'
})
export class ApiServerService {

  private apiServer: ApiServer;

  constructor() {
    this.apiServer = new ApiServer();
    this.apiServer.server = environment.server.trim();
    this.apiServer.server =
      (this.apiServer.server.substr(this.apiServer.server.length - 1) === '/' ?
        this.apiServer.server.substr(0, this.apiServer.server.length - 1) : this.apiServer.server);

    this.apiServer.port = environment.port.trim();

    this.apiServer.apiUrl = environment.apiUrl.trim();
    this.apiServer.apiUrl =
      (this.apiServer.apiUrl.substr(0, 1) === '/' ?
        this.apiServer.apiUrl.substr(1, this.apiServer.apiUrl.length - 1) : this.apiServer.apiUrl);
    this.apiServer.apiUrl =
      (this.apiServer.apiUrl.substr(this.apiServer.apiUrl.length - 1) === '/' ?
        this.apiServer.apiUrl.substr(0, this.apiServer.apiUrl.length - 1) : this.apiServer.apiUrl);
    this.apiServer.serverWithApiUrl =
      this.apiServer.server +
      (this.apiServer.port === '' ? '' : ':') + this.apiServer.port +
      (this.apiServer.apiUrl === '' ? '' : '/') +
      this.apiServer.apiUrl + '/';
  }

  public getApiServer(): ApiServer {
    return this.apiServer;
  }
}
