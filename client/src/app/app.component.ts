import { NgFor } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NgFor],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  http = inject(HttpClient);
  title = 'MyDatingApp';
  users: any
  ngOnInit(): void {
    this.http.get('http://localhost:5205/api/Users').subscribe({ next: response => {
      console.log(response);
      return this.users = response;
    }, error: error => {
      console.log(error);
    },
    complete: () => {
      console.log('completed');
    }});
  }
}
