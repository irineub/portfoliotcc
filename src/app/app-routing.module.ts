import { CurriculoComponent } from './components/curriculos/curriculoAxel/curriculo.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { CurriculoCidComponent } from './components/curriculos/curriculo-cid/curriculo-cid.component';
import { CurriculoIrineuComponent } from './components/curriculos/curriculo-irineu/curriculo-irineu.component';
import { CurriculoJeaneComponent } from './components/curriculos/curriculo-jeane/curriculo-jeane.component';
import { CurriculoMarcosComponent } from './components/curriculos/curriculo-marcos/curriculo-marcos.component';
import { CurriculoSamuelComponent } from './components/curriculos/curriculo-samuel/curriculo-samuel.component';

const routes: Routes = [
  {
    path: "",
    component: HomeComponent,
  },
  {
    path: "curriculo/axel",
    component: CurriculoComponent,
  },
  {
    path: "curriculo/cid",
    component: CurriculoCidComponent,
  },
  {
    path: "curriculo/irineu",
    component: CurriculoIrineuComponent,
  },
  {
    path: "curriculo/jeane",
    component: CurriculoJeaneComponent,
  },
  {
    path: "curriculo/marcos",
    component: CurriculoMarcosComponent,
  },
  {
    path: "curriculo/samuel",
    component: CurriculoSamuelComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
