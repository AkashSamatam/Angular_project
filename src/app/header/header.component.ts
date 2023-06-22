import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  constructor(private rote:Router) { }

  ngOnInit(): void {
  }
  onclick(){
  this.rote.navigateByUrl('')
  }

}
