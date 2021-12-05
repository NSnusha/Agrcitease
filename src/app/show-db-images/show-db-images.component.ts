import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-show-db-images',
  templateUrl: './show-db-images.component.html',
  styleUrls: ['./show-db-images.component.css']
})
export class ShowDbImagesComponent implements OnInit {
  products:any
  farms:any;
  addresses:any;
  farmId : string;
  farm:any;
  consumerId:any;
  message:any;
  constructor(private service:UserService,private router:Router) {
    this.farm = {doj : '',crop:'',cropQuantity:'',fieldArea:'',kindOfCrop:'',price:'',consumerId:''};

  
   }

  ngOnInit(): void {
    this.service.getProducts().subscribe((result:any) => {console.log(result);this.products=result;});
    this.service.getallfarms().subscribe((results:any) => {console.log(results);this.farms=results;});
    this.service.getAddressOfFarms().subscribe((results:any) => {console.log(results);this.addresses=results;});
    this.service.currentMessage.subscribe(message => this.message = message);

    this.consumerId = sessionStorage.getItem('customer');
 
    console.log(this.message);
  }
  viewSingleFarm(farm : any){
    console.log(this.consumerId);

    this.farm = farm;

    console.log(this.farm);

    this.farm.consumerId = this.consumerId;

    
    this.service.changeMessage(farm);
    this.router.navigate(['singleFarm']);
  }
  filterss(kind:any){
    this.service.changeMessage(kind);
    this.router.navigate(['filters']);
  }
  orders(){
    this.service.changeMessage(this.consumerId);
    this.router.navigate(['orders']);
  }


}

