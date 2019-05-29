import { AppTitleService } from './app-title/app-title.service';
import { Injectable } from '@angular/core';

import { ApiServerService } from './api-server/api-server.service';
import { ApiServer } from './api-server/api-server';


@Injectable({
  providedIn: 'root'
})
export class ConfigurationService {

  public apiServer: ApiServer;
  public appTitle: string;

  constructor(
    private apiServerService: ApiServerService,
    private appTitleService: AppTitleService) {
    this.apiServer = this.apiServerService.getApiServer();
    this.appTitle = this.appTitleService.getAppTitle();
  }
}
