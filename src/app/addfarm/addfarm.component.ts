import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addfarm',
  templateUrl: './addfarm.component.html',
  styleUrls: ['./addfarm.component.css']
})
export class AddfarmComponent implements OnInit {

  farm:any;
  
  addresses:any;

  constructor(private service:UserService,private router :Router) {
    this.farm={crop:'',kindOfCrop:'',fieldArea:'',cropQuantity:'',doj:'',
  address:{addressId:'',city:'',state:'',pincode:''}};
   }

  ngOnInit(): void {
    this.service.getAllAddress().subscribe((data: any) => {console.log(data); this.addresses = data; });
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


addfarm(farmForm : any): void{
  this.service.addfarm(this.farm).subscribe((result:any) => {console.log(result);});
  console.log(this.farm);
  this.router.navigate(['image']);
   this.showToasterSuccess();
}

}

