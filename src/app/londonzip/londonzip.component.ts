import { Component, OnInit,ViewChild } from '@angular/core';
import { LondonZips } from './londonzip';
import { MatSort, MatTableDataSource, MatSnackBar, MatPaginator, MatIconModule, MatDialog,MatRadioModule,MatTooltipModule } from '@angular/material';
import { LondonZipsService } from './londonzip.service';
import { RegularExpressionService } from '../_services/regular-expression.service';
import { Export2ExcelService } from '../_services/export2excel.service';
import { HttpErrorResponse } from '@angular/common/http';
import { FormControl } from '@angular/forms';
import { FilterService } from '../_services/filter.service';
import { Observable } from 'rxjs/Rx';
import { map } from 'rxjs/operators';




@Component({
  selector: 'app-londonzip',
  templateUrl: './londonzip.component.html',
  styleUrls: ['./londonzip.component.scss']
})
export class LondonzipComponent implements OnInit {

  // for Gridview
  londonzips: LondonZips[];

  // for select Update
  selectlondonzip: LondonZips;

  // for mat-sort
  sortlondonzips;  
  @ViewChild(MatSort) sortTable: MatSort;
  postcodeData;

  // test part
  errstr: string;
  aftersort;

  // for Page
  @ViewChild(MatPaginator) paginator: MatPaginator;

  // for radio
  radSearchMode: string;

  // for waitting bar
  isWaitting = false;

    // 定義前端畫面所綁定之ngModel
    public ngLocSearch: LondonZips = new LondonZips();
    public selectedRow;

  constructor(private plondonZipsService: LondonZipsService, public snackBar: MatSnackBar,
     private regularExpression: RegularExpressionService, private export2ExcelService: Export2ExcelService,
     private filterService: FilterService,) {
      

  }

  ngOnInit() {
    // for Gridview
    this.londonzips = new Array<LondonZips>();

    // for mat-sort
    this.sortlondonzips = new MatTableDataSource();
    this.postcodeData = new MatTableDataSource();

    // for radio
    this.radSearchMode = '1';
    this.CallHttpGet();

  } 

  // for SnackBar
  public openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 3000,
    });
  }


  public afetGetService(pbackfromService: LondonZips[]): void {
    this.londonzips = pbackfromService;
    this.aftersort = this.londonzips.sort(function (a, b) {
      return a.Postcode < b.Postcode ? 1 : -1;
    });
    console.log('afetGetService:locationzips:' + JSON.stringify(this.londonzips));
    console.log(JSON.stringify(this.aftersort));
    // for mat-sort start
    this.sortlondonzips.data = this.londonzips;
    this.postcodeData.data = this.londonzips;
    this.sortlondonzips.sort = this.sortTable;
    // for mat-sort end

    // for Page start
    this.sortlondonzips.paginator = this.paginator;
    // for Page end
    this.isWaitting = false;
  }

  // select event
  public onSelectLocationZip(pSelectLocZip: LondonZips) {
    // clone one to selectloczip
    var NewObject;
    NewObject = JSON.parse(JSON.stringify(pSelectLocZip));
    this.sortlondonzips = NewObject;
  }

  // after update refresh
  public refresh(): void {
    window.location.reload();
  }

  
  // http Get
  public CallHttpGet() {
    this.isWaitting = true;
    this.plondonZipsService.HttpGetLondonZips().subscribe(
      x => {
        // this.locationzips = x;
        this.afetGetService(x);
      },
      (err: HttpErrorResponse) => {
        if (err.error instanceof Error) {
          this.errstr = 'Get Function: Client-side error occured.';
        } else {
          this.errstr = 'Get Function: Server-side error occured.';
        }
      }
    );
  }

  

  public notSpace(event) {
    this.regularExpression.notSpace(event);
  }


    // Export Excel
    public save2Excel(component) {
      console.log(component);
      if (component.data.length > 0) {
        this.export2ExcelService.export2ExcelFile(component);
      } else {
        alert('請先查詢資料');
      }
    }

    public filterChangedDataTable(inputFilterValue: string) {
      if (inputFilterValue && this.postcodeData) {
        inputFilterValue = inputFilterValue.toUpperCase();
        const props = ['Postcode', 'LondonZone']; // 欲filter欄位
        this.sortlondonzips.data = this.filterService.filter<any>(
          this.postcodeData.data,
          inputFilterValue,
          props
        );
        console.log(this.sortlondonzips.data);
      } else {
        this.sortlondonzips.data = this.postcodeData.data;
      }
    }

}
