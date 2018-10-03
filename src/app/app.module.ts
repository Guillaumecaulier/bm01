import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatDividerModule} from '@angular/material/divider';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatChipsModule} from '@angular/material/chips';
import {MatTableModule} from '@angular/material/table';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MotorcycleComponent } from './motorcycle/motorcycle/motorcycle.component';
import { MenuComponent } from './common/menu/menu.component';
import { MotorcycleDetailComponent } from './motorcycle/motorcycle-detail/motorcycle-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    MotorcycleComponent,
    MenuComponent,
    MotorcycleDetailComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,    
    MatDividerModule,
    MatIconModule,
    MatButtonModule,
    MatChipsModule,
    MatTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
