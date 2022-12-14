import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { RegistroComponent } from './pages/registro/registro.component';
import { AuthModule } from './auth.module';

const routes: Routes = [
  {
    path:'auth',
    loadChildren:() => import('./auth.module').then(m => m.AuthModule)
  },
  {
    path: '',
    children:[
      {
        path:'login',
        component: LoginComponent
      },
      {
        path:'registro',
        component:RegistroComponent
      },
      {
        path:'**',
        redirectTo:'login'
      }
    ]
  }
]

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports:[
    RouterModule
  ]
})
export class AuthRoutingModule { }
