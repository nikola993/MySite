import { Component, OnInit } from '@angular/core';
import { $ } from 'protractor';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor( ) {  }

  home = 'home';
  minigames = 'mini-games';
  contact = 'contact';
  change = false;

  onClick() {
    this.change = !this.change;
  }

  ngOnInit() { }
}
