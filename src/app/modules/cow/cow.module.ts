import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { CowRoutingModule } from './cow-routing.module';
import { CowListViewComponent } from './components/cow-list-view/cow-list-view.component';
import { ActionDialogComponent } from './components/action-dialog/action-dialog.component';
import * as fromFeature from './redux/reducers';
import { CowEffects } from './redux/effects/cow-effects';
import { TimestampToDatePipe } from './pipes/timestamp-to-date.pipe';
import {
  MatTableModule,
  MatPaginatorModule,
  MatDialogModule,
  MatFormFieldModule,
  MatInputModule,
  MatButtonModule,
  MatCheckboxModule
} from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    CowRoutingModule,
    StoreModule.forFeature('cows', fromFeature.reducers),
    EffectsModule.forFeature([ CowEffects ]),
    ReactiveFormsModule,
    FormsModule,
    MatTableModule,
    MatPaginatorModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatCheckboxModule
  ],
  declarations: [
    CowListViewComponent,
    ActionDialogComponent,
    TimestampToDatePipe
  ],
  providers: [],
  entryComponents: [
    ActionDialogComponent
  ]
})

export class CowModule { }
