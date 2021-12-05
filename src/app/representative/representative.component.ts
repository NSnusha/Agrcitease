	import { Component, OnInit,Input } from '@angular/core';
	import { getTestBed } from '@angular/core/testing';
	import { UserService } from '../user.service';
	import { Router } from '@angular/router';
	declare var jQuery : any ;

	@Component({
  selector: 'app-representative',
	  templateUrl: './representative.component.html',
	  styleUrls: ['./representative.component.css']
	})
	export class RepresentativeComponent implements OnInit {
	address:any;
	addressId:any;
address1:any;
userId:any;
message:String;
	users:any;
	userFarmsId:any;
	farms:any;
	userId1:any;
	dateOfDelivery: any;
	orders: any;
	ordfarms: any;
	ordcons: any;
	product: any;
	productId:any;
	quantityBook: any;
	editObject :any;
	editOrder :any;
	constructor(private service : UserService,private router:Router) {
	 
	 this.editObject = { doj:'',crop:'',cropQuantity:'',fieldArea:'',kindOfCrop:'',remainingQuantity:'',
	 address:{addressId:'',pincode:'',city:'',state:'',street:''}
	};
	 this.editOrder = {dateOfDelivery:'',consumerId:'',farmId:'',addressId:'',status:'',quantityBooked:''};
	 this.product={productId:''};
	  }
	  

  ngOnInit(){
	    this.service.currentMessage.subscribe(message => this.message=message);
      this.userId=this.message;
      this.service.getUserById1(this.userId).subscribe((data:any) => {console.log(data); this.address=data;});
	  }

  
	  ViewProfile(){
  this.service.currentMessage.subscribe(message => this.message=message);
   this.userId=this.message;
  console.log(this.userId);
  this.service.getUserById1(this.userId).subscribe((data:any) => {console.log(data); this.address1=data;});
   
  }
  farm(){
	jQuery('#empfModal').modal('show');
  }

  ShowFarmers(){
    jQuery('#empModal').modal('show');
   this.service.currentMessage.subscribe(message => this.message=message);
   this.userId=this.message;
   console.log(this.userId);
    this.service.getUserById1(this.userId).subscribe((data:any) => {console.log(data); this.address=data;});
    this.service.getFarmersById(this.userId).subscribe((data:any) => {console.log(data); this.users=data;});
    
	  }
	
	  showFarms(){
		jQuery('#empfModal').modal('show');
	    this.service.currentMessage.subscribe(message => this.message=message);
	    this.userId=this.message;
	    console.log(this.userId);
	
this.service.getFarmsById1(this.addressId).subscribe((data:any) => {console.log(data); this.farms=data;});
	  }
	  viewdeals(){
		jQuery('#empcModal').modal('show');
	  }
	  showFarmse(){
		jQuery('#empfModal').modal('show');
	
	}
	//deals
	showdeals():void{
		this.service.currentMessage.subscribe(message => this.message = message);
		jQuery('#empcModal').modal('show');
	  
		  this.userId = this.message;
		  console.log(this.userId);
		  this.service.getOrdersbyId(this.addressId).subscribe((data:any) => {console.log(data); this.orders= data ;});
		  this.service.getfarmsofOrders(this.addressId).subscribe((data:any) => {console.log(data); this.ordfarms= data ;});
		  this.service.getConsumersofOrders(this.addressId).subscribe((data:any) => {console.log(data); this.ordcons= data ;});
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
}

