import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AjouterPfeComponent } from './ajouter-pfe/ajouter-pfe.component';
import { ListPfesComponent } from './list-pfes/list-pfes.component';
import { GestionService } from './gestion.service';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    AjouterPfeComponent,
    ListPfesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [GestionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
