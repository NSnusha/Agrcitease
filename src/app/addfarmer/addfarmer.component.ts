import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-addfarmer',
  templateUrl: './addfarmer.component.html',
  styleUrls: ['./addfarmer.component.css']
})
export class AddfarmerComponent implements OnInit {
  	  user : any;
  	  address :any;
    userId:any;
   message:String;
   message1:any;
  
  	  constructor(private router: Router,private service: UserService) {
     this.address={pincode:'',city:'',state:'',street:'',
    user:{ userName:'', password:'',role:'farmer',fullName:'',mobileNumber:'',age:'',qualification:this.message}};
	
     }
	
 
    
    ngOnInit(): void {
      this.service.currentMessage.subscribe(message => this.message=message);
      console.log(this.message);
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
    console.log(this.address);
    this.service.currentMessage.subscribe(message => this.message=message);
      this.userId=this.message;
      this.address.user.qualification=this.userId;
     console.log(this.userId);
     console.log(this.service.registerUser(this.address).subscribe((result:any) => {console.log(result);}));
     console.log(this.address);
    
     
     this.showToasterSuccess();
  	    this.router.navigate(['representative']);
  	    
      
    
   
  
    }
  }
  

