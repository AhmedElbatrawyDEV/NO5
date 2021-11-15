import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DashBoardComponent } from './dash-board/dash-board.component';
import { DefualtImagePipe } from './defualt-image.pipe';
import { SumPipe } from './sum.pipe';

@NgModule({
  declarations: [
    AppComponent,
    DashBoardComponent,
    DefualtImagePipe,
    SumPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
