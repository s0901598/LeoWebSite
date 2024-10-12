import { NgModule } from '@angular/core';
import { NzSpinModule } from 'ng-zorro-antd/spin';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { zh_TW } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import zh from '@angular/common/locales/zh';
import { FormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { HomeComponent } from './main/home/home.component';
import { MenutestComponent } from './main/menutest/menutest.component';
import { NavBarComponent } from './main/nav-bar/nav-bar.component';
import { ProgramcardsComponent } from './main/programcards/programcards.component';
import { SkillcardsComponent } from './main/skillcards/skillcards.component';
import { TimelineComponent } from './main/timeline/timeline.component';



registerLocaleData(zh);
@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    HomeComponent,
    MenutestComponent,
    TimelineComponent,
    ProgramcardsComponent,
    SkillcardsComponent,
    MainComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    NzButtonModule,
    NzDropDownModule,
    NzSpinModule,
    RouterModule,

  ],
  providers: [
    { provide: NZ_I18N, useValue: zh_TW }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
