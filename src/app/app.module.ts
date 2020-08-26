import { BrowserModule } from '@angular/platform-browser';
import { LOCALE_ID, NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatInputModule } from '@angular/material/input';
import { MatChipsModule } from '@angular/material/chips';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTooltipModule } from '@angular/material/tooltip';
import { CommonModule } from '@angular/common';
import localeRu from '@angular/common/locales/ru';
import { registerLocaleData } from '@angular/common';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSortModule } from '@angular/material/sort';
import { MatSelectModule } from '@angular/material/select';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { ToastrModule } from 'ngx-toastr';
import { MatToolbarModule } from '@angular/material/toolbar';

import { ToUpperCasePipe } from './pipes/to-upper-case.pipe';
import { InhabitantsTableComponent } from './components/inhabitants-table/inhabitants-table.component';
import { InhabitantModalComponent } from './modals/inhabitant-modal/inhabitant-modal.component';
import { FiltersComponent } from './components/filters/filters.component';

registerLocaleData(localeRu);

@NgModule({
  declarations: [
    AppComponent,
    ToUpperCasePipe,
    InhabitantsTableComponent,
    InhabitantModalComponent,
    FiltersComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatButtonModule,
    MatCardModule,
    HttpClientModule,
    MatGridListModule,
    MatCheckboxModule,
    MatInputModule,
    ReactiveFormsModule,
    MatChipsModule,
    MatPaginatorModule,
    MatTooltipModule,
    CommonModule,
    MatDialogModule,
    MatSortModule,
    MatSelectModule,
    MatProgressBarModule,
    MatToolbarModule,
    ToastrModule.forRoot()
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'ru' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
