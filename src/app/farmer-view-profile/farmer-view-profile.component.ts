import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
declare var jQuery : any ;
@Component({
  selector: 'app-farmer-view-profile',
  templateUrl: './farmer-view-profile.component.html',
  styleUrls: ['./farmer-view-profile.component.css']
})
export class FarmerViewProfileComponent implements OnInit {
  userId: any;
  address:any;
  addressId:any;
  message:string;
  farms:any;
  employees:any;
  editObject:any;
  editOrder:any;
  dateOfDelivery: any;
  orders: any;
  ordfarms: any;
  ordcons: any;
  product: any;
  productId:any;
  quantityBook: any;
  constructor(private service : UserService,private router:Router) {
   
   this.editObject = { doj:'',crop:'',cropQuantity:'',fieldArea:'',kindOfCrop:'',remainingQuantity:'',
   address:{addressId:'',pincode:'',city:'',state:'',street:''}
  };
   this.editOrder = {dateOfDelivery:'',consumerId:'',farmId:'',addressId:'',status:'',quantityBooked:''};
   this.product={productId:''};
  }

  ngOnInit(): void {  
    this.service.currentMessage.subscribe(message => this.message = message);
    this.service.getFarmsById(this.message).subscribe((data:any) => {console.log(data); this.employees= data ;});
    console.log(this.message);
    
  }
  
  showUserbyId() : void{
    jQuery('#empModal').modal('show');
    this.service.currentMessage.subscribe(message => this.message = message);
    this.userId = this.message;
    console.log(this.userId);
    this.service.getUserById(this.userId).subscribe((data:any) => {console.log(data); this.address= data ;});
  }
  showFarmsbyId():void{
    jQuery('#empvModal').modal('show');

  
    this.service.currentMessage.subscribe(message => this.message = message);
    this.addressId = this.message;
   
    console.log(this.addressId);
    
    this.service.getFarmsById(this.addressId).subscribe((data:any) => {console.log(data); this.farms= data ;this.address=data;this.product=data});
    this.editObject.address.addressId = this.message;
    this.product.productId=this.productId;
    console.log(this.productId);
  }
  deleteEmp(employee: any){
    this.service.deleteEmp(employee).subscribe((result: any)=>{
      const i = this.employees.findIndex((element) => {return element.farmId === employee.farmId;
      });
      this.employees.splice(i,1);
    });
  }
  showEditPopup(farm: any){
    this.editObject = farm;
   
    jQuery('#empsModal').modal('show');
  }
  updateEmp(){
   
    
    this.editObject.address.addressId = this.message;
    this.service.updateEmp(this.editObject).subscribe();
    console.log(this.editObject);
  }

  farmUpload(){
    this.router.navigate(['farmUpload']);
  }
viewprofile(){
  
  this.router.navigate(['viewprofile']);
}


//orders

showdeals():void{
  this.service.currentMessage.subscribe(message => this.message = message);
  jQuery('#empcModal').modal('show');

    this.userId = this.message;
    console.log(this.userId);
    this.service.getOrdersbyId(this.userId).subscribe((data:any) => {console.log(data); this.orders= data ;});
    this.service.getfarmsofOrders(this.userId).subscribe((data:any) => {console.log(data); this.ordfarms= data ;});
    this.service.getConsumersofOrders(this.userId).subscribe((data:any) => {console.log(data); this.ordcons= data ;});
}
updateOrd(ord:any){
  this.editOrder = ord;
  this.editOrder.status = 'Accepted';
  this.quantityBook=this.editOrder.quantityBooked;
  console.log(this.editOrder);
  console.log(this.quantityBook);
  this.service.getSingleFarmbyId(this.editOrder).subscribe((data:any) => {console.log(data);this.editObject=data;});
  console.log(this.editObject);
  this.service.updateOrd(this.editOrder).subscribe((result:any) => {console.log(result);});
  this.dateof();
}
dateof(){
  jQuery('#acceptModal').modal('show');
  console.log(this.editOrder);
  console.log(this.dateOfDelivery);
  this.editOrder.dateOfDelivery = this.dateOfDelivery;
  console.log(this.editOrder);
  this.service.updateOrd(this.editOrder).subscribe((result:any) => {console.log(result);});
  this.service.getSingleFarmbyId(this.editOrder).subscribe((data:any) => {console.log(data);this.editObject=data;});
 
}
rejectOrder(ord:any){
  this.editOrder = ord;
  this.editOrder.status = 'Rejected';
  console.log(this.editOrder);
  this.service.updateOrd(this.editOrder).subscribe((result:any) => {console.log(result);});

}
//
deletefarm(farm: any) {
  this.service.deletefarm(farm).subscribe((result: any) => {
const i = this.farms.findIndex((element) => {return element.empId === farm.empId;
  
    });
    
  });
  
}
}
