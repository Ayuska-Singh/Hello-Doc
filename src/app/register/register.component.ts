import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router, RouterModule, RouterOutlet } from '@angular/router';
import { RegistrationData } from '../../interfaces';
@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule, CommonModule, RouterOutlet, RouterModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {

  

  constructor(private router : Router) {

  }

  ngOnInit(): void { }

  // register(data: object): void {
  //   console.warn(data);
    
     
  
  //     // Continue with your registration logic (e.g., sending data to the server)
  
  
  // }

  // openLoginPage() {
  //   this.router.navigate(['/login']);
  // }

  register(data: RegistrationData): void { 
    console.warn(data);

    if (data.password !== data.confirmPass) {
      alert('Passwords do not match!');
      return;
    }

    this.sendRegistrationData(data)
      .then(response => {
        alert('Registration successful!');
        this.router.navigate(['/login']);
      })
      .catch(error => {
        alert('Registration failed! Please try again.');
      });
  }

  private async sendRegistrationData(data: RegistrationData): Promise<any> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve({ success: true });
      }, 1000);
    });
  }

  openLoginPage(): void {
    this.router.navigate(['/login']);
  }

}
