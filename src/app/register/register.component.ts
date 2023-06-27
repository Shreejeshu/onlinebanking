import { Component, ɵflushModuleScopingQueueAsMuchAsPossible } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { DataService } from '../data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

pswCheck:boolean=false
constructor(private fb:FormBuilder,private ds:DataService,private router:Router){}


registerForm=this.fb.group({
  acno:['',[Validators.required,Validators.pattern('[0-9]+')]],
  uname:['',[Validators.required,Validators.pattern('[a-zA-Z]+')]],
  psw:['',[Validators.required,Validators.pattern('[a-zA-z0-9]+')]],
  cpsw:['',[Validators.required,Validators.pattern('[a-zA-z0-9]+')]]
})

  signup()
  {
    var acno=this.registerForm.value.acno
    var uname=this.registerForm.value.uname
    var psw=this.registerForm.value.psw
    var cpsw=this.registerForm.value.cpsw
 if(this.registerForm.valid)
 {
    if(psw==cpsw){
      this.ds.register(acno,uname,psw)
      .subscribe((result:any)=>{
        alert(result.message)
        this.router.navigateByUrl("")
      },
      result=>{
        alert(result.error.message)
      }
      )
    }
else{
  this.pswCheck=true
  //alert("password dosent match")
}
 }else{
  alert("invalid form")
 }

  }
}




