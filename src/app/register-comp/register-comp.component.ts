import { Component, OnInit } from '@angular/core';
declare var jQuery : any ;
import { UserService } from '../user.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-register-comp',
  templateUrl: './register-comp.component.html',
  styleUrls: ['./register-comp.component.css']
})
export class RegisterCompComponent implements OnInit {
  user:any;
  users:any;
  farmer: any;
  closeResult: string;
  count: any;
  countf: any;
  countc: any;
  county: any;
  counta: any;
  constructor(private service : UserService,private router:Router ) {
      this.user = {userId:'', userName:'',password:'',fullName:'',age:'',qualification:'',mobileNumber:'',role:''};
   }
   message : string;

  ngOnInit(){
    //this.service.currentMessage.subscribe(message => this.message = message);
    this.service.getCount().subscribe((data:any) => {console.log(data); this.count=data;});
    console.log(this.count);
    this.service.getCountF().subscribe((data:any) => {console.log(data); this.countf=data;});
    console.log(this.countf);
    this.service.getCountC().subscribe((data:any) => {console.log(data); this.countc=data;});
    console.log(this.countc);
    this.service.getCountY().subscribe((data:any) => {console.log(data); this.county=data;});
    console.log(this.county);
    this.service.getCountYA().subscribe((data:any) => {console.log(data); this.counta=data;});
    console.log(this.counta);

  }
  
  newpage(){
    this.router.navigate(['farmUpload']);

  }
  farmerlogin(registerForm : any):void{
    this.service.userlogin(registerForm.userName,registerForm.password,'Farmer').then((data:any) => {
      if(data != null){
        this.service.setuserLoggedIn();
        alert("SUCCESSFUL LOGIN");
        this.user = data.userId;
        this.service.changeMessage(this.user);
        
      }else{
        alert("INVALID CREDENTIALS");
      }
      
    });
    }
    farmers():void{
      this.service.changeMessage('Farmer');
      this.router.navigate(['login']);
    }
    representatives():void{
      this.service.changeMessage('Representative');
      this.router.navigate(['loginre']);
    }
    consumers():void{
      this.service.changeMessage('Consumer');
      this.router.navigate(['logincon']);
    }
    newMessage(){
      this.service.changeMessage(this.user);
    }
    
  replogin(registerForm1 : any):void{ 
    this.service.userlogin(registerForm1.userName,registerForm1.password,'Representative').then((data:any) => {
      if(data != null){
        console.log(data);
        alert("SUCCESSFUL LOGIN");
        this.user = data.userId;
        this.service.changeMessage(this.user);
      }else{
        alert("INVALID CREDENTIALS");
      }
    });
    }
    conslogin(registerForm1 : any):void{ 
      this.service.userlogin(registerForm1.userName,registerForm1.password,'Consumer').then((data:any) => {
        if(data != null){
          console.log(data);
          alert("SUCCESSFUL LOGIN");
          this.user = data.userId;
        this.service.changeMessage(this.user);
        }else{
          alert("INVALID CREDENTIALS");
        }
      });
      }
  /*showfarmer(user:any){
    this.service.showfarmer(this.user).subscribe();
    console.log(user);
  }*/
  showEditPopup(){
    jQuery('#empModal').modal('show');
  }
  showEditPopup1(){
    jQuery('#repModal').modal('show');
  }
  showEditPopup2(){
    jQuery('#consModal').modal('show');
  }
}
