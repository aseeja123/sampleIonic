import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.page.html',
  styleUrls: ['./users-list.page.scss'],
})
export class UsersListPage implements OnInit {
fname:string;
lname:string;
email:any;
users:any;
  constructor(private http:HttpClient) { }

  ngOnInit() {
    this.http.get('https://reqres.in/api/users?page=1').subscribe(
    (data)=>{
      console.log(data)
      const users=data;
      this.users=users;
      console.log(this.users)
    },
    (error)=>{
console.log(error)
    }
  )
  }
fetchUsers(){
  this.http.get('https://reqres.in/api/users?page=1').subscribe(
    (data:any)=>{
      console.log(data);
     
    //data.first_name=this.fname;
    //data.last_name=this.lname;
    //data.email=this.email
    },
    (error)=>{
console.log(error)
    }
  )
}
}
