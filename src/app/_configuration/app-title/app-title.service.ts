import { Injectable } from '@angular/core';

import { environment } from '../../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class AppTitleService {

  private apiTitle: string;

  constructor() {
    this.apiTitle = environment.appTitle.trim();
  }

  public getAppTitle(): string {
    return this.apiTitle;
  }
}
