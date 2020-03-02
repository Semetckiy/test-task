import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CowListViewComponent } from './components/cow-list-view/cow-list-view.component';
import { ActionDialogComponent } from './components/action-dialog/action-dialog.component';
import * as fromFeature from './redux/reducers';
import { CowEffects } from './redux/effects/cow-effects';
import {metaReducers, reducers} from './redux/reducers/root.reducers';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import {
  MatTableModule,
  MatPaginatorModule,
  MatDialogModule,
  MatFormFieldModule,
  MatInputModule,
  MatButtonModule
} from '@angular/material';
import {HttpMockRequestInterceptor} from './redux/services/interceptor.mock';
import {HttpRequestInterceptor} from './redux/services/interceptor';
import { environment } from '../environments/environment';
export const isMock = environment.mock;


@NgModule({
  declarations: [
    AppComponent,
    CowListViewComponent,
    ActionDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot(reducers, { metaReducers }),
    StoreModule.forFeature('cows', fromFeature.reducers),
    EffectsModule.forRoot([ CowEffects ]),
    HttpClientModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatPaginatorModule,
    FormsModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: isMock ? HttpMockRequestInterceptor : HttpRequestInterceptor,
      multi: true
    }
  ],
  entryComponents: [
    ActionDialogComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
