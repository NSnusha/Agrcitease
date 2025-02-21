import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
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
   farmerlogin(registerForm : any):void{
     this.role = this.message;
    this.service.userlogin(registerForm.userName,registerForm.password,this.role).then((data:any) => {
      if(data != null){
        this.service.setuserLoggedIn();
        this.showToasterSuccess();
        this.user = data.userId;
        console.log(this.user);
        this.service.changeMessage(this.user);
        this.router.navigate(['profile']);
     
        
      }else{
        this.showToasterError()
      }
      
    });
    }
   
  



  

}
