import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.css']
})
export class TransactionComponent implements OnInit {

  acno: any
  transactions:any
  date:any
  searchString=""
  s1=""
  constructor(private ds: DataService,private router:Router) {

  }
  ngOnInit(): void {
    if (localStorage.getItem("currentAcno")) {
      this.acno = localStorage.getItem("currentAcno")


      this.ds.getTransaction(this.acno).subscribe((result: any) => {
        this.transactions= result.message
        console.log(this.transactions)

      },

      )
    }

this.date=new Date()
console.log(this.date);



  }
  filterPipe(data:any)

  {
  this.searchString=data 
}
hpage(){

  this.router.navigateByUrl('home')
}

}
