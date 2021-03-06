import { ViewEncapsulation } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private route: Router) { }

  ngOnInit(): void {
  }

  goToLogin() {
    this.route.navigateByUrl('login');
  }

  goToSignup() {
    this.route.navigateByUrl('signup');
  }
}