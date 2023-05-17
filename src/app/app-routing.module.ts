import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// Componente importados
import { HomeComponent } from "./home/home.component";
import { UserRegisterComponent } from "./user-register/user-register.component";
import { FormReactiveGroupComponent } from './form-reactive-group/form-reactive-group.component';
import { CarritoCompraComponent } from './carrito-compra/carrito-compra.component';
import { HoraPremiumComponent } from "./hora-premium/hora-premium.component";
import { HoraValidaGuard } from './guardians/hora-valida.guard';
import { MetodosHttpComponent } from './metodos-http/metodos-http.component';
import { PeliculasComponent } from './peliculas/peliculas.component';
import { FakeLoginComponent } from './fake-login/fake-login.component';

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
    path: 'premium',
    component: HoraPremiumComponent,
    canActivate: [HoraValidaGuard]
  },
  {
    path: 'http',
    component: MetodosHttpComponent
  },
  {
    path: 'peliculas',
    component: PeliculasComponent
  },
  {
    path: 'fakeLogin',
    component: FakeLoginComponent
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
