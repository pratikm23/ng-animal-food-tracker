import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  public navbarOpen: boolean = false;
  
  constructor() { }

  ngOnInit() { 
  }

  public toggleNavbar(): void {
    this.navbarOpen = !this.navbarOpen;
  }
}
