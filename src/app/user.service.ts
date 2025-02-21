
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { ToastrService } from 'ngx-toastr';


@Injectable({
  providedIn: 'root'
})
export class UserService {
  
  private messageSource = new BehaviorSubject('null');
  currentMessage = this.messageSource.asObservable();
  isUserLogged: any;
 
  constructor(private httpClient: HttpClient,private toastr: ToastrService) { 
    this.isUserLogged = false ;
  }
  showSuccess(message:any, title:any) {
    this.toastr.success(message, title)
  }

  showError(message:any, title:any) {
    this.toastr.error(message, title)
  }

  showInfo(message:any, title:any) {
    this.toastr.info(message, title)
  }

  showWarning(message:any, title:any) {
    this.toastr.warning(message, title)
  }//
  changeMessage(message :any){
    this.messageSource.next(message);
  }
  setuserLoggedIn() : void{
    this.isUserLogged = true;
  }
  setuserLoggedOut() : void{
    this.isUserLogged = false;
  }
  getUserLogged() : any{
    return this.isUserLogged;
  }
  
  userlogin(userName:String,password:String,role:String){
    return this.httpClient.get('RESTAPI2018/webapi/myresource1/loginuser/'+ userName + '/' + password+ '/' + role ).toPromise();
  }
  registerUser(address:any) {
    return this.httpClient.post('RESTAPI2018/webapi/myresource1/registerfarmer/',address);
  }
  farmUpload(farm:any){
    return this.httpClient.post('RESTAPI2018/webapi/myresource1/farmUpload/',farm);
  }
  showfarmer(user:any){
    return this.httpClient.get('RESTAPI2018/webapi/myresource/showfarmer');
  }
  getUserById(userId:any){
    return this.httpClient.get('RESTAPI2018/webapi/myresource1/viewProfile/'+userId);
  }
  getFarmsById(userId:any){
    return this.httpClient.get('RESTAPI2018/webapi/myresource1/getFarmsbyId/'+userId);
  }
  deleteEmp(employee:any){
    return this.httpClient.delete('RESTAPI2018/webapi/myresource1/deleteEmp/'+employee.empId);
  }
  updateEmp(editObject :any){
    return this.httpClient.put('RESTAPI2018/webapi/myresource1/updateEmp',editObject);
  }
  updateUser(editObject :any){
    return this.httpClient.put('RESTAPI2018/webapi/myresource1/updateUser',editObject);
  }
  
  postFile(ImageForm:any,fileToUpload:File,fileToUpload1:File){
    const endpoint='RESTAPI2018/webapi/myresource1/uploadImage';
    
    const formData:FormData=new FormData();
    formData.append('Image',fileToUpload,fileToUpload.name);
    formData.append('Video',fileToUpload1,fileToUpload1.name);
    formData.append('productName',ImageForm.productName);
    return this.httpClient.post(endpoint,formData);

  }
  testId(farmId:any,consumerId:any){
    return this.httpClient.get('RESTAPI2018/webapi/myresource1/testId/' + farmId + '/' + consumerId);
  }
  
//reprsentative
  getUserById1(userId:any){
    return this.httpClient.get('RESTAPI2018/webapi/myresource/viewProfile/' + userId);   
   }
   getFarmersById(userId: any) {
    return this.httpClient.get('RESTAPI2018/webapi/myresource/getFarmers/' + userId);    
  }
  getFarmsById1(addressId: any) {
    return this.httpClient.get('RESTAPI2018/webapi/myresource/getFarms/' + addressId);

  }
  addfarm(farm : any){
    console.log('inside service: ');
    return this.httpClient.post('RESTAPI2018/webapi/myresource/addfarms', farm); 
  }
getAllAddress(): any {
    return this.httpClient.get('RESTAPI2018/webapi/myresource/getAllAddress');
   }
   //consumer
   getProducts() {
    return this.httpClient.get('RESTAPI2018/webapi/myresource1/getProducts');
  }
  getallfarms() {
    return this.httpClient.get('RESTAPI2018/webapi/myresource1/getallfarms');
 
  }
  getAddressOfFarms() {
    return this.httpClient.get('RESTAPI2018/webapi/myresource1/getAddressOfFarms');
 
  }
  getSingleFarm(farmId: any) {
    return this.httpClient.get('RESTAPI2018/webapi/myresource1/getSingleFarm/' + farmId);
  }
   getProductsbyId(productId: any) {
    return this.httpClient.get('RESTAPI2018/webapi/myresource1/getProductsbyId/' + productId);
  }
  getproductsOfFarmsbykind(kind: any) {
    return this.httpClient.get('RESTAPI2018/webapi/myresource1/getproductsOfFarmsbykind/' + kind);
  }
 
  getAddressOfFarmsbykind(kind: any) {
    return this.httpClient.get('RESTAPI2018/webapi/myresource1/getAddressOfFarmsbykind/' + kind);
  }
  getfarmsbykind(kind: any) {
    return this.httpClient.get('RESTAPI2018/webapi/myresource1/getfarmsbykind/' + kind);
  }
  sendsms(userId:any):any{
    return this.httpClient.get('RESTAPI2018/webapi/myresource/sendsms/'+ userId);
  }
 
  testId1(farmId : any,consumerId:any){
    return this.httpClient.get('RESTAPI2018/webapi/myresource/testId/' + farmId+ '/' + consumerId );
  }

 //orders

 orderUpload(order:any){
  return this.httpClient.post('RESTAPI2018/webapi/myresource1/orderUpload/',order);
}
getOrdersbyId(id:any):any{
  return this.httpClient.get('RESTAPI2018/webapi/myresource1/getordersbyId/'+id);
}
getfarmsofOrders(id:any):any{
  return this.httpClient.get('RESTAPI2018/webapi/myresource1/getfarmsofOrders/'+id);
}
getConsumersofOrders(id:any){
  return this.httpClient.get('RESTAPI2018/webapi/myresource1/getConsumersofOrders/'+id);
}
getOrdersbyConsumerId(id:any){
  return this.httpClient.get('RESTAPI2018/webapi/myresource1/getOrdersbyConsumerId/'+id);
}
getfarmsofConsumerOrders(id:any){
  return this.httpClient.get('RESTAPI2018/webapi/myresource1/getfarmsofConsumerOrders/'+id);
}
getFarmersofConsumerOrders(id:any){
  return this.httpClient.get('RESTAPI2018/webapi/myresource1/getFarmersofConsumerOrders/'+id);
}
getProductsofConsumerOrders(id:any){
  return this.httpClient.get('RESTAPI2018/webapi/myresource1/getProductsofConsumerOrders/'+id);
}
updateOrd(editObject :any){
  return this.httpClient.put('RESTAPI2018/webapi/myresource1/updateOrd/',editObject);
}
 
  
  //reviews
  addReview(blog:any) {
    return this.httpClient.post('RESTAPI2018/webapi/myresource1/addReview/',blog);
  }
  getallreviews():any{
    return this.httpClient.get('RESTAPI2018/webapi/myresource1/getallreviews');

  }
  //
  deletefarm(farm: any) {
    return this.httpClient.delete('RESTAPI2018/webapi/myresource1/deletefarm/',farm);
  }
//update
getSingleFarmbyId(farm: any) {
  return this.httpClient.put('RESTAPI2018/webapi/myresource1/getSingleFarmbyId/',farm);
}
sendOTP1(userId: any) :any{
  return this.httpClient.get('RESTAPI2018/webapi/myresource/send/' +  userId);
}
updateProfile(editObject:any){
  return this.httpClient.put('RESTAPI2018/webapi/myresource1/updateProfile/',editObject);
}
getCount(){
  return this.httpClient.get('RESTAPI2018/webapi/myresource/getCount' );   
 }

 getCountF(){
  return this.httpClient.get('RESTAPI2018/webapi/myresource/getCountF' );   
 }

 getCountC(){
  return this.httpClient.get('RESTAPI2018/webapi/myresource/getCountC' );   
 }

 getCountY(){
  return this.httpClient.get('RESTAPI2018/webapi/myresource/getCountY' );   
 }

 getCountYA(){
  return this.httpClient.get('RESTAPI2018/webapi/myresource/getCountYA' );   
 }
 statistics(){
  return this.httpClient.get('RESTAPI2018/webapi/myresource1/statistics');
}
}
 