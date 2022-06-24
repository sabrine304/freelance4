import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
   userConnectedRole : any;
   fullNameConnected: any;
   public navbarCollapsed = true;
  constructor() { }

  ngOnInit(): void {
    this.userConnectedRole = localStorage.getItem('userConnected');
    this.fullNameConnected = localStorage.getItem('FullName');
  }

}
