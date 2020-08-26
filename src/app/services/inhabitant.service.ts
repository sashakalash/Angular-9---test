
import { map, shareReplay, catchError, takeUntil } from 'rxjs/operators';
import { Injectable, OnDestroy } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';

import { Inhabitant } from '../models';
import { URLS } from '../core/environment';
import { FilterService } from './filter.service';
import { Observable } from 'rxjs/internal/Observable';
import { EMPTY, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})

export class InhabitantsService implements OnDestroy {
  inhabitantList$: Observable<Inhabitant[]>;
  private destroyed$ = new Subject();
  private filteredInhabitantList$: Observable<Inhabitant[]>;

  constructor(
    private http: HttpClient,
    private filterService: FilterService,
    private toastr: ToastrService
  ) {
    this.inhabitantList$ = http.get<Inhabitant[]>(URLS.inhabitants).pipe(
      map(res => res['Brastlewark']),
      catchError(err => {
        toastr.error('Server doesn`t response', 'Something`s gone wrong!');
        return EMPTY;
      }),
      shareReplay(),
      takeUntil(this.destroyed$)
    );
    this.filteredInhabitantList$ = filterService.getFilteredData(this.inhabitantList$);
  }

  ngOnDestroy() {
    this.destroyed$.next();
    this.destroyed$.complete();
  }

  getInhabitantList(): Observable<Inhabitant[]> {
    return this.filteredInhabitantList$;
  }
}
