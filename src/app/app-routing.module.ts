import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// Componente importados
import { HomeComponent } from "./home/home.component";
import { UserRegisterComponent } from "./user-register/user-register.component";
import { FormReactiveGroupComponent } from './form-reactive-group/form-reactive-group.component';
import { CarritoCompraComponent } from './carrito-compra/carrito-compra.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'user-register',
    component: UserRegisterComponent
  },
  {
    path: 'frg',
    component: FormReactiveGroupComponent
  },
  {
    path: 'car',
    component: CarritoCompraComponent
  },
  {
    path: '',
    component: HomeComponent,
    // pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
