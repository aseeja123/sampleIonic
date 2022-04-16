import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { FormBuilder, FormGroup,Validators } from '@angular/forms';

import {HttpClient} from '@angular/common/http';
@Component({
  selector: 'app-login-modal',
  templateUrl: './login-modal.page.html',
  styleUrls: ['./login-modal.page.scss'],
})
export class LoginModalPage implements OnInit {
loginForm:FormGroup;
email:any;
password:any;
  constructor(private viewCtrl:ModalController, private fb:FormBuilder, private http:HttpClient) { }

  ngOnInit() {
    this.loginForm=this.fb.group({
      email:this.email([Validators.email]),
      password:this.password
    })
  }

onDismiss(){
this.viewCtrl.dismiss();
}
openUsers(){ 
this.http.post('https://reqres.in/api/login',this.email,this.password).subscribe(
(data)=>{
  console.log(data)
},
(error)=>{
console.log(error);
}
)
}
}
