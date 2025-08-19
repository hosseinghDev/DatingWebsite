import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  http = inject(HttpClient);
  title = 'Dating App with Angular 17';
  ngOnInit(): void {
    this.http.get('https://api.example.com/data').subscribe({
      next: (data) => {
        console.log('Data fetched successfully:', data);
      },
      error: (error) => {
        console.error('Error fetching data:', error);
      }
    });
  }

}
