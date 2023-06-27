import { Component } from '@angular/core';
import { DataService } from '../data.service';
import { Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-new-comp',
  templateUrl: './new-comp.component.html',
  styleUrls: ['./new-comp.component.css']
})
export class NewCompComponent {



constructor(private fb:FormBuilder,private router:Router,private ds:DataService,){ }

registerForm=this.fb.group({
  acno:['',[Validators.required,Validators.pattern('[0-9]+')]],
  psw:['',[Validators.required,Validators.pattern('[0-9A-Za-z]+')]]
})

login()
{
  var acno=this.registerForm.value.acno
  var psw=this.registerForm.value.psw
  this.ds.login(acno,psw).subscribe((result:any)=>{
    localStorage.setItem('currentUser',result.currentUser)
    localStorage.setItem('currentAcno',result.currentAcno)
    localStorage.setItem('token',JSON.stringify(result.token))
    alert(result.message)

    this.router.navigateByUrl('home')
  },
  result=>{
    alert(result.error.message)
  }
  )
 
  }
}
