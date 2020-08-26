import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { Inhabitant } from './models';
import { InhabitantsService } from './services/inhabitant.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
  inhabitantList$: Observable<Inhabitant[]>;

  constructor(private inhabitantsService: InhabitantsService) { }

  ngOnInit(): void {
    this.inhabitantList$ = this.inhabitantsService.getInhabitantList();
  }

}
