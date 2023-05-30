import { HttpClient } from '@angular/common/http';
import { Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';

@Component({
  selector: 'app-userdetails',
  templateUrl: './userdetaisl.component.html',
  styleUrls: ['./userdetaisl.component.css']
})
export class UserdetaislComponent {
  data: any[] = [];
  displayedColumns: string[] = ['position', 'name', 'action'];
  dataSource!: MatTableDataSource<any>;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  newName: string = '';
  showInput: boolean = false;



  constructor(private http: HttpClient,private router:Router) {}

  ngOnInit() {
    this.fetchData().subscribe(
      (data) => {
        this.data = data;
        this.dataSource = new MatTableDataSource(this.data);
        console.log(data);
      },
      (error) => {
        console.error(error);
      }
    );
  }

  fetchData() {
    return this.http.get<any[]>('./assets/data.json');
  }


  toggleInput() {
    this.showInput = !this.showInput;
  }
  

  addData() {
    const newItem = {
      id: this.data.length + 1,
      name: 'New User'
    };
    this.data.push(newItem);
    this.dataSource.data = this.data;
  }

  // addData() {
  //   const newItem = {
  //     id: this.data.length + 1,
  //     name: 'New User'
  //   };
  //   this.data.unshift(newItem); 
  //   this.dataSource.data = this.data;
  // }
  


  deleteItem(item: any) {
    const index = this.data.findIndex((el) => el.id === item.id);
    if (index !== -1) {
      this.data.splice(index, 1);
      this.dataSource.data = this.data;
    }
  }

  editItem(item: any) {
    item.editable = true;
  }

  updateItem(item: any) {
    item.editable = false;
  }
 
}
