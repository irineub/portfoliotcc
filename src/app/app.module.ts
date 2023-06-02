import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import { FooterComponent } from './components/template/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import {MatCardModule} from '@angular/material/card';
import { CurriculoComponent } from './components/curriculos/curriculoAxel/curriculo.component';
import { PdfViewerModule } from 'ng2-pdf-viewer';
import { CurriculoCidComponent } from './components/curriculos/curriculo-cid/curriculo-cid.component';
import { CurriculoJeaneComponent } from './components/curriculos/curriculo-jeane/curriculo-jeane.component';
import { CurriculoIrineuComponent } from './components/curriculos/curriculo-irineu/curriculo-irineu.component';
import { CurriculoMarcosComponent } from './components/curriculos/curriculo-marcos/curriculo-marcos.component';
import { CurriculoSamuelComponent } from './components/curriculos/curriculo-samuel/curriculo-samuel.component';



@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HomeComponent,
    CurriculoComponent,
    CurriculoCidComponent,
    CurriculoJeaneComponent,
    CurriculoIrineuComponent,
    CurriculoMarcosComponent,
    CurriculoSamuelComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatCardModule,
    PdfViewerModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
