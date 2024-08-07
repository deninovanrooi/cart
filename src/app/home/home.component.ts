import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { interval } from 'rxjs';
declare var jQuery:any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})


export class HomeComponent implements OnInit{

  constructor(private router:Router) { }
 
  ngOnInit(){
    jQuery('.carousel').carousel({
      interval: 2000
    });
  }
  viewProducts(){
    this.router.navigate(['/products']);
  }
}
