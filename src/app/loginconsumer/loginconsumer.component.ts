import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-loginconsumer',
  templateUrl: './loginconsumer.component.html',
  styleUrls: ['./loginconsumer.component.css']
})
export class LoginconsumerComponent implements OnInit {

  user:any;
  users:any;
  farmer: any;
  closeResult: string;
  role:string;

  constructor(private service : UserService,private router:Router ) {
    this.user = {userId:'', userName:'',password:'',fullName:'',age:'',qualification:'',mobileNumber:'',role:''};
    
   }
   message : string;
   ngOnInit(): void {
    this.service.currentMessage.subscribe(message => this.message = message);
    console.log(this.message);
  }
  showToasterSuccess() {
    this.service.showSuccess("Successfull login", "AGRICITEASE")
  }

  showToasterError() {
    this.service.showError("Invalid credentials", "Agricitease")
  }

  showToasterInfo() {
    this.service.showInfo("This is info", "ItSolutionStuff.com")
  }

  showToasterWarning() {
    this.service.showWarning("This is warning", "ItSolutionStuff.com")
  }
  conslogin(registerForm : any):void{
    this.role = this.message;
   this.service.userlogin(registerForm.userName,registerForm.password,this.role).then((data:any) => {
     if(data != null){
       this.service.setuserLoggedIn();
       this.showToasterSuccess();
       this.user = data.userId;
       
       console.log(this.user);
       sessionStorage.setItem('customer',this.user);
       this.service.changeMessage(this.user);
       this.router.navigate(['consumerPage']);
       
     }else{
       this.showToasterError()
     }
     
   });
   }
}