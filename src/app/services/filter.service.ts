import { Observable, combineLatest, BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';
import { Injectable } from '@angular/core';

import { IFilterValues, Inhabitant } from '../models';

@Injectable({
  providedIn: 'root',
})

export class FilterService {
  filter$ = new BehaviorSubject<IFilterValues>(new IFilterValues());
  filteredData$: Observable<Inhabitant[]>;
  constructor() { }

  getFilteredData(data: Observable<Inhabitant[]>): Observable<Inhabitant[]> {
    return combineLatest(data, this.filter$)
      .pipe(
        map(
          ([res, filter]) => {
            let result = res;
            if (filter.name) {
              result = result.filter(item => item.name.toLowerCase().includes(filter.name.toLowerCase()));
            }
            if (filter.friends) {
              result = result.filter(item =>
                item.friends.find(friend => friend.toLowerCase().includes(filter.friends.toLowerCase()))
              );
            }
            if (filter.ageFrom || filter.ageTo) {
              if (filter.ageFrom && !filter.ageTo) {
                result = result.filter(item => item.age >= filter.ageFrom);
              }
              if (!filter.ageFrom && filter.ageTo) {
                result = result.filter(item => item.age <= filter.ageFrom);
              }
              if (filter.ageFrom && filter.ageTo) {
                result = result.filter(item => item.age > filter.ageFrom && item.age < filter.ageTo);
              }
            }
            if (filter.heightFrom || filter.heightTo) {
              if (filter.heightFrom && !filter.heightTo) {
                result = result.filter(item => item.height >= filter.heightFrom);
              }
              if (!filter.heightFrom && filter.heightTo) {
                result = result.filter(item => item.height <= filter.heightTo);
              }
              if (filter.heightFrom && filter.heightTo) {
                result = result.filter(item => item.height > filter.heightFrom && item.height < filter.heightTo);
              }
            }
            if (filter.weightFrom || filter.weightTo) {
              if (filter.weightFrom && !filter.weightTo) {
                result = result.filter(item => item.weight >= filter.weightFrom);
              }
              if (!filter.weightFrom && filter.weightTo) {
                result = result.filter(item => item.weight <= filter.weightTo);
              }
              if (filter.weightFrom && filter.weightTo) {
                result = result.filter(item => item.weight > filter.weightFrom && item.weight < filter.weightTo);
              }
            }
            if (filter.colors && filter.colors.length) {
              result = result.filter(item => filter.colors.includes(item.hair_color));
            }
            if (filter.professions && filter.professions.length) {
              result = result.filter(item => item.professions.find(p => filter.professions.includes(p)));
            }
            return result;
          }
        )
      );
  }

  setFilter(filter: IFilterValues): void {
    this.filter$.next(filter);
  }
}
