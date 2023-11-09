import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  userData = {
    user: '',
  };

  submit() {
    const formData = this.userData;
    const message = `Name: ${formData.user}`;
    alert(message);
  }
}
