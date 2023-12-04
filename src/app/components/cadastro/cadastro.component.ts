import { Component } from '@angular/core';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent {

  user = {
    name: '',
    lastName: '',
    city: '',
    country: '',
    birthDate: '',
    // Add other properties as needed
  };

  onSubmit() {
    console.log('Submitted user:', this.user);
    // You can implement the logic to send the user data to the server here
  }

}
