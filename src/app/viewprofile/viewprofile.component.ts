import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

declare var jQuery : any ;

@Component({
  selector: 'app-viewprofile',
  templateUrl: './viewprofile.component.html',
  styleUrls: ['./viewprofile.component.css']
})
export class ViewprofileComponent implements OnInit {
  userId: any;
  address:any;
  user:any;
  message:string;
  farms:any;
  employees:any;
  editObject:any;
  profileEditObject: any;
  constructor(private service:UserService) { 
    this.user={
userName:'',fullName:'',age:''
    };
    this.editObject = {userName:'',fullName:'',age:'',mobileNumber:''};
    this.profileEditObject = { addressId:'',street:'',city:'',state:'',pincode:'',
    user:{ userName:'', password:'',role:'',fullName:'',mobileNumber:'',qualification:'',age:''}};
    
  }

  ngOnInit(): void {
    jQuery('#empModal').modal('show');
    this.service.currentMessage.subscribe(message => this.message = message);
    this.userId = this.message;
    console.log(this.userId);
    this.service.getUserById(this.userId).subscribe((data:any) => {console.log(data); this.address= data ;});
 
    
  }
  showProfileEditPopup(employee: any){
    this.profileEditObject = this.address;
    console.log(this.profileEditObject);
    jQuery('#editProfileModal').modal('show');
  }
  updateProfile(){
    console.log(this.profileEditObject);
    this.service.updateProfile(this.profileEditObject).subscribe();
  }
  showEditPopup(employee:any){
    this.editObject=employee;
    jQuery('#empModel').modal('show');
  }
  updateUser(){
    this.service.getUserById(this.userId).subscribe((data:any) => {console.log(data); this.address= data ;});
 
    this.service.updateUser(this.editObject).subscribe();
    console.log(this.editObject);
  }
 
}
