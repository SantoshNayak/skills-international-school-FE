import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet,RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'skills-international-landing';
    routeMe(route:string){
      window.location.href =route
    }
    redirectToWP(){
      // Replace '1234567890' with your actual WhatsApp number
      var phoneNumber = '+919901622966';
      // Create the WhatsApp URL with the phone number and a predefined message
      var whatsappURL = 'https://wa.me/' + phoneNumber;
     //  var whatsappURL = 'https://api.whatsapp.com/send?phone=' + phoneNumber + '';
      // Open WhatsApp chat in a new tab
      window.open(whatsappURL, '_blank');
   }
}
