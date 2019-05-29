import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { LondonzipComponent } from './londonzip/londonzip.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatButtonModule, MatSortModule, MatTabsModule, MatInputModule, MatTableModule, MatCheckboxModule, MatSnackBarModule, MatToolbarModule, MatPaginatorModule, MatAutocompleteModule, MatCardModule, MatRadioModule, MatProgressSpinnerModule, MatProgressBarModule, MatIconModule, MatDialogModule, MatTooltipModule } from '@angular/material';
import { LondonZipsService } from './londonzip/londonzip.service';
import { RegularExpressionService } from './_services/regular-expression.service';
import { Export2ExcelService } from './_services/export2excel.service';
import { GridModule, ExcelModule } from '@progress/kendo-angular-grid';
import { HttpClientModule } from '@angular/common/http';
import { FilterService } from './_services/filter.service';

@NgModule({
  declarations: [
    AppComponent,
    LondonzipComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatButtonModule,
    MatSortModule,
    MatTabsModule,
    MatInputModule,
    MatTableModule,
    MatCheckboxModule,
    MatSnackBarModule,
    MatToolbarModule,
    MatPaginatorModule,
    MatAutocompleteModule,
    MatCardModule,
    MatRadioModule,
    MatProgressSpinnerModule,
    MatProgressBarModule,
    MatIconModule,
    MatDialogModule,    
    MatTooltipModule,
    GridModule,
    ExcelModule,
    HttpClientModule
  ],
  providers: [
    LondonZipsService,
    RegularExpressionService,
    Export2ExcelService,
    FilterService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
