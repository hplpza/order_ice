import {NgModule} from '@angular/core';

import {Routes, RouterModule} from '@angular/router';
import { LoginComponent } from './Auth/login/login.component';
import { SignupComponent } from './Auth/signup/signup.component';

import {OrderCreateComponent} from './order-create/order-create.component';
import {OrderPlacedComponent} from './order-placed/order-placed.component';

const routes: Routes  =
[
    {path:'', component:OrderPlacedComponent},
    {path:'list', component:OrderPlacedComponent},
    {path:'create', component:OrderCreateComponent},
    {path:'edit/postId', component:OrderCreateComponent},
    {path:'login', component:LoginComponent},
    {path:'signup', component:SignupComponent}
];

@NgModule
(
    {
        imports: [RouterModule.forRoot(routes)],
        exports: [RouterModule]
    }
)
export class AppRoutingModule{}