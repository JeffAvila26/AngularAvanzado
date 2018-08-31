import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { routing, appRoutingProviders } from './app.routing';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

// Componentes
import { TiendaComponent } from './components/tienda/tienda.component';
import { ParquesComponent } from './components/parques/parques.component';
import { AnimalsComponent } from './components/animals/animals.component';
import { ContactComponent } from './components/contact/contact.component';
import { HomeComponent } from './components/home/home.component';
import { KeepersComponent } from './components/keepers/keepers.component';
import { GuardarEmailComponent } from './moduloemail/components/guardar-email/guardar-email.component';
import { MostrarEmailComponent } from './moduloemail/components/mostrar-email/mostrar-email.component';
import { MainEmailComponent } from './moduloemail/components/main-email/main-email.component';
import { MainComponent } from './admin/components/main/main.component';
import { ListComponent } from './admin/components/list/list.component';
import { AddComponent } from './admin/components/add/add.component';
import { EditComponent } from './admin/components/edit/edit.component';

// Importar el nuevo modulo
//import { AdminModule } from './admin/admin.module';
import {AdminRoutingModule} from './admin/admin-routing.module';
//import { ModuloemailModule } from './moduloemail/moduloemail.module';

@NgModule({
  declarations: [
    AppComponent,
    TiendaComponent,
    ParquesComponent,
    AnimalsComponent,
    ContactComponent,
    HomeComponent,
    KeepersComponent,
    GuardarEmailComponent,
    MostrarEmailComponent,
    MainEmailComponent,
    MainComponent,
    ListComponent,
    AddComponent,
    EditComponent
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    CommonModule,
    AdminRoutingModule
   // ModuloemailModule
  ],
  providers: [
    appRoutingProviders
  ],
  bootstrap: [AppComponent],
  exports: [MainEmailComponent]
})
export class AppModule { }
