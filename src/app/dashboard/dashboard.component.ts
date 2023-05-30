import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserdetaislComponent } from '../userdetaisl/userdetaisl.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  constructor(private  router :Router)
  {
  }

  userdetail(){
    this.router.navigate(['./userdetails']);
  }
}
