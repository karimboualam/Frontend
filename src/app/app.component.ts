import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ApiService } from './api.service';

@Component({
  selector: 'app-root',
  template: `<h1>{{ message }}</h1>`,
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent  implements OnInit {
  //title = 'frontend-ecommerce';
  message: string = '';

  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.apiService.testApi().subscribe((response) => {
      this.message = response;
    });
  }
}
