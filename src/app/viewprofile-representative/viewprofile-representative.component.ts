import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';
declare var jQuery: any;
@Component({
  selector: 'app-viewprofile-representative',
  templateUrl: './viewprofile-representative.component.html',
  styleUrls: ['./viewprofile-representative.component.css']
})
export class ViewprofileRepresentativeComponent implements OnInit {
  address:any;
  address1:any;
  userId:any;
  message:String;
  users:any;
  userFarmsId:any;
  farms:any;
  user:any;
  profileEditObject: any;
  
    constructor(private service:UserService, private router :Router) {
    this.profileEditObject = { addressId:'',street:'',city:'',state:'',pincode:'',
    user:{ userName:'', password:'',role:'',fullName:'',mobileNumber:'',qualification:'',age:''}};
    
   }
    ngOnInit(): void {
      this.service.currentMessage.subscribe(message => this.message=message);
      this.userId=this.message;
   
    console.log(this.userId);
    this.service.getUserById1(this.userId).subscribe((data:any) => {console.log
(data); this.address1=data;});
    jQuery('#profileModel').modal('show');
}
showProfileEditPopup(employee: any){
  this.profileEditObject = this.address1;
  console.log(this.profileEditObject);
  jQuery('#editProfileModal').modal('show');
}
updateProfile(){
  console.log(this.profileEditObject);
  this.service.updateProfile(this.profileEditObject).subscribe();
}
}

 