import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  user : any;
  address :any;
  userId:any;

  constructor(private service: UserService,private router:Router ) {
    this.address={pincode:'',city:'',state:'',street:'',
  user:{ userName:'', password:'',role:'',fullName:'',mobileNumber:'',qualification:'',age:''}};

   }
 
  ngOnInit(): void {
  }
  showToasterSuccess() {
    this.service.showSuccess("Successfully registered", "AGRICITEASE")
  }

  showToasterError() {
    this.service.showError("Something is wrong", "ItSolutionStuff.com")
  }

  showToasterInfo() {
    this.service.showInfo("This is info", "ItSolutionStuff.com")
  }

  showToasterWarning() {
    this.service.showWarning("This is warning", "ItSolutionStuff.com")
  }
  register(registerForm : any): void{
    this.service.registerUser(this.address).subscribe((result:any) => {console.log(result);});
    console.log(this.address);
    this.showToasterSuccess();
    this.router.navigate(['home']);
    
  }

}
