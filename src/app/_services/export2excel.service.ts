import { Injectable } from '@angular/core';

@Injectable()
export class Export2ExcelService {
  constructor() { }
  public export2ExcelFile(component) {
    const options = component.workbookOptions();
    const rows = options.sheets[0].rows;
    let altIdx = 0;
    rows.forEach(row => {
      if (row.type === 'data') {
        if (altIdx % 2 !== 0) {
          row.cells.forEach(cell => {
            cell.background = '#99CCFF';
          });
        }
        altIdx++;
      }
    });
    component.save(options);
  }
  public exportMultipleSheetExcelFile(components) {
    const options = components[0].workbookOptions();
    if (components.length > 1) {
      for (let x = 1; x < components.length; x++) {
        options.sheets[x] = components[x].workbookOptions().sheets[0];
      }
    }
    components[0].save(options);
  }
}
