import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { UserService } from '../user.service';
import { RegisterCompComponent } from '../register-comp/register-comp.component';
import { INT_TYPE } from '@angular/compiler/src/output/output_ast';
import { Router } from '@angular/router';
@Component({
  selector: 'app-farm-upload',
  templateUrl: './farm-upload.component.html',
  styleUrls: ['./farm-upload.component.css']
})
export class FarmUploadComponent implements OnInit {
  farm:any;
  constructor(private service: UserService,private router:Router) {
    this.farm = { doj:'',crop:'',cropQuantity:'',fieldArea:'',kindOfCrop:'',price:'',
    address:{addressId:'',pincode:'',city:'',state:'',street:''}};
  }
   message:any;


  ngOnInit(){
  }
  showToasterSuccess() {
    this.service.showSuccess("These details have been stored.Please enter yor farm image to complete registration ", "AGRICITEASE")
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
  
  farmUpload(farmUploadForm : any): void{
    this.service.currentMessage.subscribe(message => this.message = message);
    console.log(this.message);
    this.farm.address.addressId = this.message;
   // this.service.farmUpload(this.farm).subscribe((result:any) => {console.log(result);});
   sessionStorage.setItem('farm',JSON.stringify(this.farm)); 
   console.log(this.farm.address);
    this.router.navigate(['image']);
    this.showToasterSuccess();
  }

}
