import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})



export class DataService {

  constructor(private http: HttpClient) { }


  

  //api to register
  register(acno: any, uname: any, psw: any) {
    const bodyData = {
      acno,
      uname,
      psw
    }
    return this.http.post('http://localhost:3000/register',bodyData)
  }
  //api to login
  login(acno: any, psw: any) {
    const body = {
      acno,
      psw
    }
    return this.http.post('http://localhost:3000/login',body)
  }
  //api to get single user data
  getUser(acno: any) {
    return this.http.get('http://localhost:3000/getuser/'+ acno)
  }


  getBalance(acno: any) {
    return this.http.get('http://localhost:3000/balance/' + acno)
  }

  moneyTransfer(toAcno: any, fromAcno: any, amount: any, psw: any, date: any) {
    const body = {
      toAcno,
      fromAcno,
      amount,
      psw,
      date
    }
    return this.http.post('http://localhost:3000/transfer', body)
  }
  getTransaction(acno: any) {
    return this.http.get('http://localhost:3000/history/' + acno)
  }

  deleteAc(acno: any) {
    return this.http.delete('http://localhost:3000/deleteac/' + acno)
  }
}
