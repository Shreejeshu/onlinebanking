import { Component } from '@angular/core';
import { DataService } from '../data.service';
import { Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
import { DatePipe } from '@angular/common';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  uname: any = ""
  acno: any
  userData: any = {}
  balance: any
  alertMessage: any = ""
  acno1: any
  alertColor: boolean = true

  constructor(private ds: DataService, private router: Router, private fb: FormBuilder, private datepipe: DatePipe) { }

  ngOnInit(): void {
    if (!localStorage.getItem('currentAcno')) {
      alert('please login')
      this.router.navigateByUrl("")
    }

    if (localStorage.getItem('currentUser')) {
      this.uname = localStorage.getItem('currentUser')
      console.log(this.uname);

    }
  }

  transaction = this.fb.group({
    acno: ['', [Validators.required, Validators.pattern('[0-9]+')]],
    amnt: ['', [Validators.required, Validators.pattern('[0-9]+')]],
    psw: ['', [Validators.required, Validators.pattern('[0-9A-Za-z]+')]]
  })

  acessUser() {
    if (localStorage.getItem('currentAcno')) {
      this.acno = localStorage.getItem('currentAcno')
      console.log(this.acno);

    }
    this.ds.getUser(this.acno).subscribe((result: any) => {
      this.userData = result.message
  

    })
  }

  checkBalance() {
    if (localStorage.getItem('currentAcno')) {
      this.acno = localStorage.getItem('currentAcno')
    }
    this.ds.getBalance(this.acno).subscribe((result: any) => {
      this.balance = result.message
      // console.log(this.balance)
    })
  }

  logout() {
    localStorage.removeItem('currentAcno')
    localStorage.removeItem('currentUser')
    localStorage.removeItem("token")
    this.router.navigateByUrl("")
  }

  moneyTransfer() {
    if (this.transaction.valid) {
      this.alertMessage = ""
      var date = new Date()
      let latest_date = this.datepipe.transform(date, 'short')
      console.log(latest_date)
      if (localStorage.getItem("currentAcno")) {
        this.acno = localStorage.getItem("currentAcno")
      }
      if (this.acno==this.transaction.value.acno) {
        this.alertMessage="failed due to sending to same account"
      } else {
        this.ds.moneyTransfer(this.transaction.value.acno,
          this.acno,
          this.transaction.value.amnt,
          this.transaction.value.psw,
          latest_date).subscribe((result:any) => {
            this.alertMessage = result.message
            console.log(this.alertMessage);
            this.alertColor=true
          },
            result => {
              this.alertMessage = result.error.message
              this.alertColor=false
            }
          )
      }
    } else {
      this.alertMessage = "invalid form"
      this.alertColor=false
    }
  }

  deleteAc() {
    if (localStorage.getItem("currentAcno")) {
      this.acno1 = localStorage.getItem("currentAcno")
      console.log(this.acno1);

    }

  }
  cancelChild() {
    this.acno1 = ""
  }
  deleteAccount(event:any) {
    this.ds.deleteAc(event).subscribe((result: any) => {
      this.logout()
      alert("account deleted")
    })
  }

}





