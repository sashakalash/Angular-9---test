import { Component, OnInit, Input } from '@angular/core';
import { ColorsValues } from 'src/app/core/constants/enums/colors-values.enum';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Inhabitant } from 'src/app/models';
import { FilterService } from 'src/app/services/filter.service';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.scss']
})
export class FiltersComponent implements OnInit {
  @Input() inhabitants: Inhabitant[];
  colorList: string[] = [];
  professionList: string[] = [];
  ColorsValues = ColorsValues;
  form: FormGroup;

  constructor(private formBuilder: FormBuilder, private filterService: FilterService) { }

  ngOnInit(): void {
    this.initFormControls();
    this.inhabitants.forEach(inhabitant => this.fillSelect(inhabitant));
    this.sortProfessionList();
  }

  initFormControls(): void {
    this.form = this.formBuilder.group({
      name: [''],
      ageFrom: [''],
      ageTo: [''],
      heightFrom: [''],
      heightTo: [''],
      weightFrom: [''],
      weightTo: [''],
      colors: [''],
      friends: [''],
      professions: ['']
    });
    this.form.valueChanges.subscribe(val => this.filterService.setFilter(val));
  }

  fillSelect(inhabitant: Inhabitant): void {
    if (this.colorList.length) {
      if (!this.colorList.includes(inhabitant.hair_color)) {
        this.colorList.push(inhabitant.hair_color);
      }
    } else {
      this.colorList.push(inhabitant.hair_color);
    }

    if (this.professionList.length) {
      inhabitant.professions.forEach(p => {
        if (!this.professionList.includes(p)) {
          this.professionList.push(p);
        }
      });
    } else {
      this.professionList = this.professionList.concat(inhabitant.professions);
    }
  }

  sortProfessionList(): void {
    this.professionList = this.professionList.sort();
  }

}
