import { Component, OnInit } from '@angular/core';
// import { FormsModule } from '@angular/forms'
@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  // styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  model:any={}
  email: string;
  password: string;
  constructor() { }

  ngOnInit() {
  }
  onSubmit(){
    alert(JSON.stringify(this.model))
 }
 // loginUser(){
 //   if(this.email=="aravindkpn@gmail.com" && this.password=="aravind143"){
 //     console.log("welcome")
 //   }
}





