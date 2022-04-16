import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { FormBuilder, FormGroup} from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
@Component({
  selector: 'app-register-modal',
  templateUrl: './register-modal.page.html',
  styleUrls: ['./register-modal.page.scss'],
})
export class RegisterModalPage implements OnInit {
registerForm:FormGroup;
  constructor(private viewCtrl:ModalController, private fb:FormBuilder,private http:HttpClient, private router:Router) { }

obj={
  email:'',
  password:''
}
  ngOnInit() {
  this.registerForm=this.fb.group({
    email:this.obj.email,
    password:this.obj.password
  })
  
  }
onDismiss(){
this.viewCtrl.dismiss();
}
onRegister(){
 console.log(this.obj)
this.http.post('https://reqres.in/api/register',this.obj).subscribe(
  (res)=>{
    console.log(res);
this.router.navigate(['/login-modal'])
  },
  (error)=>{
console.log(error)
  }
)
}
}
