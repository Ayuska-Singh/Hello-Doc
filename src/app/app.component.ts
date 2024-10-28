import { CommonModule } from '@angular/common';
import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import {FormsModule} from '@angular/forms'
import { AppHeaderComponent } from "./app-header/app-header.component";
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule, FormsModule, AppHeaderComponent,RouterModule],
  templateUrl: './app.component.html',
  standalone: true, 
  // imports:  [
  //   AppAdmindashComponent
  // ],
  schemas:  [CUSTOM_ELEMENTS_SCHEMA],
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'e-doctor';
}
