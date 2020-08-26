import { Component, OnInit, ViewChild, Input, OnChanges } from '@angular/core';
import { TABLE_HEADERS } from 'src/app/core/constants/constants';
import { Observable } from 'rxjs';
import { PageEvent, MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Inhabitant } from 'src/app/models';
import { TableHeadersProps } from '../../core/constants/enums/table-headers-props.enum';
import { ColorsValues } from '../../core/constants/enums/colors-values.enum';
import { MatDialog } from '@angular/material/dialog';
import { InhabitantModalComponent } from 'src/app/modals/inhabitant-modal/inhabitant-modal.component';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-inhabitants-table',
  templateUrl: './inhabitants-table.component.html',
  styleUrls: ['./inhabitants-table.component.scss']
})
export class InhabitantsTableComponent implements OnInit, OnChanges {
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  @Input() inhabitants: Inhabitant[];

  tableHeaders = TABLE_HEADERS;
  tableData$: Observable<string[]>;
  length = 100;
  pageSize = 10;
  pageSizeOptions: number[] = [5, 10, 25, 100];
  pageEvent: PageEvent;
  columnsToDisplay: string[];

  dataSource: MatTableDataSource<Inhabitant>;
  pageIndex = 1;
  TableHeadersProps = TableHeadersProps;
  ColorsValues = ColorsValues;

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
    this.columnsToDisplay = this.tableHeaders.map(h => h.prop);
  }

  ngOnChanges() {
    this.dataSource = new MatTableDataSource<Inhabitant>(this.inhabitants);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  viewInhabitant(inhabitant: Inhabitant): void {
    const dialogRef = this.dialog.open(InhabitantModalComponent, {
      width: '500px',
      data: inhabitant
    });
    dialogRef.afterClosed().subscribe(() => { });
  }

}
