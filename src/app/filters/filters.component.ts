import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.css']
})
export class FiltersComponent implements OnInit {
  message:any;
  products:any
  farms:any;
  addresses:any;
  farmId : string;
  consumerId:any;
  farm:any;
  constructor(private service:UserService,private router:Router) { }

  ngOnInit(): void {
    this.service.currentMessage.subscribe(message => this.message = message);
    console.log(this.message);
    this.service.getproductsOfFarmsbykind(this.message).subscribe((result:any) => {console.log(result);this.products=result;});
    this.service.getfarmsbykind(this.message).subscribe((results:any) => {console.log(results);this.farms=results;});
    this.service.getAddressOfFarmsbykind(this.message).subscribe((results:any) => {console.log(results);this.addresses=results;});
    this.consumerId = sessionStorage.getItem('customer');
  }
  viewSingleFarm(farm : any){
    this.farm=farm;
    console.log(this.farm);
    this.farm.consumerId=this.consumerId;
    this.service.changeMessage(farm);
    this.router.navigate(['singleFarm']);
  }
  orders(){
    this.router.navigate(['orders']);
  }
}
