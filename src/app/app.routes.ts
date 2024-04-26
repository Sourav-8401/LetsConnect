import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { SignPageComponent } from './components/sign-page/sign-page.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { AboutComponent } from './components/about/about.component';

export const routes: Routes = [
    {path:  '', component:LoginComponent},
    {path:  'home', component:HomepageComponent},
    {path : 'login', component: LoginComponent},
    {path : 'signPage' , component: SignPageComponent},
    {path: 'about', component: AboutComponent}
];
