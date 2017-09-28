import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { InfoComponent } from './info/info.component';
import { VaccinesComponent } from './vaccines/vaccines.component';
import { HistoryComponent } from './history/history.component';
import { DewormingComponent } from './deworming/deworming.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { JsonpModule } from '@angular/http';

import { DBService } from './services/db.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    InfoComponent,
    VaccinesComponent,
    HistoryComponent,
    DewormingComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'home'
      },
      {
        path: 'home',
        component: HomeComponent
      },
      {
        path: 'info',
        component: InfoComponent
      },
      {
        path: 'vaccines',
        component: VaccinesComponent
      },
      {
        path: 'history',
        component: HistoryComponent
      },
      {
        path: 'deworming',
        component: DewormingComponent
      }
    ]),
    NgbModule.forRoot()
  ],
  providers: [DBService],
  bootstrap: [AppComponent]
})
export class AppModule { }
