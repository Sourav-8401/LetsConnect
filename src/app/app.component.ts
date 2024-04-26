import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from './components/footer/footer.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SignPageComponent } from './components/sign-page/sign-page.component';
import { LoginComponent } from './components/login/login.component';
import { HomepageComponent } from './components/homepage/homepage.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet  , FooterComponent, NavbarComponent, SignPageComponent, LoginComponent, HomepageComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'letsConnect';
}
