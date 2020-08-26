import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Inhabitant } from 'src/app/models';
import { TableHeadersPropsToValue, TableHeadersProps } from 'src/app/core/constants/enums/table-headers-props.enum';
import { ColorsValues } from 'src/app/core/constants/enums/colors-values.enum';

@Component({
  selector: 'app-inhabitant-modal',
  templateUrl: './inhabitant-modal.component.html',
  styleUrls: ['./inhabitant-modal.component.scss']
})
export class InhabitantModalComponent implements OnInit {
  TableHeadersPropsToValue = TableHeadersPropsToValue;
  TableHeadersProps = TableHeadersProps;
  ColorsValues = ColorsValues;

  constructor(
    public dialogRef: MatDialogRef<InhabitantModalComponent>,
    @Inject(MAT_DIALOG_DATA) public inhabitant: Inhabitant) { }

  ngOnInit(): void { }

  onNoClick(): void {
    this.dialogRef.close({});
  }

}
