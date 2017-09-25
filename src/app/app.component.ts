import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = '水至清则无鱼，人至贱则无敌';

  constructor(private router:Router){
  }
  toStockDetail(){
        this.router.navigate(['/stock',2]);
  }
}
