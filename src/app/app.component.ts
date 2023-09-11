import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'projweb';
  
  username = 'nome de usuario';

  userData = {
    email: 'email@gmail.com',
    role: 'admin'
  }
}
