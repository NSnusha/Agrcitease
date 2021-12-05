import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
declare var jQuery : any ;
@Component({
  selector: 'app-single-farm',
  templateUrl: './single-farm.component.html',
  styleUrls: ['./single-farm.component.css']
})
export class SingleFarmComponent implements OnInit {
  message:any;
  farm:any;
  products:any;
  product:any;
  farmId:any;
  address:any;
  userId:any;
  consumerId:any;
  order:any;
  trId : any;
  quanReq: any;
  constructor(private service:UserService,private router:Router) { 
    this.order = {dateOfDelivery:'',consumerId:'',farmId:'',addressId:'',status:''};
    
  }
  showToasterSuccess() {
    this.service.showSuccess("Your order is confirmed", "AGRICITEASE")
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
  ngOnInit(): void {
    this.service.currentMessage.subscribe(message => this.message = message);
    this.service.getProducts().subscribe((result:any) => {console.log(result);this.products=result;});
    console.log(this.message)
    this.farm = this.message;
    this.farmId = this.farm.farmId;
    this.consumerId = this.farm.consumerId;
    console.log(this.consumerId);
    console.log(this.farmId);
    this.service.getProductsbyId(this.farmId).subscribe((result:any) => {console.log(result);this.product=result;});
    this.service.getSingleFarm(this.farmId).subscribe((result:any) => {console.log(result);this.address=result;});
    console.log(this.product);
    console.log(this.address);
    

  }
  displayingFarm(){
    this.service.currentMessage.subscribe(message => this.message = message);
    console.log(this.message)
    this.farm = this.message;

  }
  showEditPopup(){
    jQuery('#myModal').modal('show');
  }
  allfarms(){
    this.router.navigate(['consumerPage']);
  }
  testId1(farmId : any,consumerId : any){
    this.service.currentMessage.subscribe(message => this.message = message);
    this.farm = this.message;
    console.log(this.farm);
    this.consumerId = this.farm.consumerId;
    console.log(this.consumerId)
    this.farmId = this.farm.farmId;
    console.log(this.farmId);
    this.service.testId1(this.farmId,this.consumerId).subscribe((data:any) => {console.log(data); this.address= data ;});


    
  }
  placeOrder(){
    this.order.consumerId = this.consumerId;
    this.order.farmId = this.farmId;
    this.order.status = 'Pending';
    this.order.addressId = this.address.addressId;
    this.order.quantityBooked=this.quanReq;
    console.log(this.order);
    this.service.orderUpload(this.order).subscribe((result:any) => {console.log(result); this.trId = result});
    console.log(this.trId);
    this.showToasterSuccess();
  }
  orders(){
    this.service.changeMessage(this.consumerId);
    this.router.navigate(['orders']);
    this.showToasterSuccess();
  }
 
  repQuantity(){
jQuery('#myModal1').modal('show');
  }
}
