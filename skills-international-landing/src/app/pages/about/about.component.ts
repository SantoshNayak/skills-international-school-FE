import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {
 ngOnInit(){
  console.log('test')
  // $.getScript('src/assets_v2/js/main.js');

 }
}
