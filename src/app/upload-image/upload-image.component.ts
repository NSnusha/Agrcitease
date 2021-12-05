import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
declare var jQuery: any;
//import { Address } from 'cluster';

@Component({
  selector: 'app-upload-image',
  templateUrl: './upload-image.component.html',
  styleUrls: ['./upload-image.component.css']
})
export class UploadImageComponent implements OnInit {
imageUrl:String;
fileToUpload:File=null;
reader:FileReader;
mobileNumber : any;
userId : any;
message:any;
address:any;
user:any;
im:any;
otp:any;
farm : any;
videoUrl:String;
fileToUpload1:File=null;
reader1:FileReader;
generatedOTP: any;

  constructor(private service:UserService,private router:Router) { 
    this.im = {productName:''};
    this.imageUrl='/assets/img/default-image.png';
  this.videoUrl='/assets/video/default-video.mp4';
  }

  ngOnInit(): void {
    this.service.currentMessage.subscribe(message => this.message = message)
    this.userId = this.message
    console.log(this.userId)
    this.service.sendOTP1(this.userId).subscribe((data:any) => {console.log(data); this.generatedOTP= data ;});
   
   console.log(this.generatedOTP)
  }
  handleFileInput(file:FileList){
    this.fileToUpload=file.item(0);
    this.reader=new FileReader();
    this.reader.readAsDataURL(this.fileToUpload);
    this.reader.onload=(event:any)=>{
      this.imageUrl=event.target.result;
    };
  }
 handleFileInput1(file:FileList){
    this.fileToUpload1=file.item(0);
    this.reader1=new FileReader();
    this.reader1.readAsDataURL(this.fileToUpload1);
    this.reader1.onload=(event:any)=>{
      this.videoUrl=event.target.result;
    };
}
  showMessage():void{
    alert('Farm is successsfully updated');
  }
  OnSubmit(imageForm:any){
    this.service.currentMessage.subscribe(message => this.message = message);
    console.log(this.message);
    this.im.productName = imageForm.productName;
   
    console.log(this.im);
    console.log(imageForm);
    console.log(this.fileToUpload);
    console.log(this.fileToUpload1);
    sessionStorage.setItem('imagedet',JSON.stringify(this.im))

    //this.service.postFile(imageForm,this.fileToUpload).subscribe(
      //data => {
        //console.log('done');
        //this.imageUrl='/assets/image/default.png';
        //this.router.navigate(['crop'])
      //}
    //);
  
   
    this.otps();
  }
  

  
  otps(){
    jQuery('#myModal1').modal('show');
  }
  verifyOTP(){
   
  
    if(this.otp == this.generatedOTP){
      this.service.postFile(this.im,this.fileToUpload,this.fileToUpload1).subscribe(
        data => {
          console.log('done');
        this.imageUrl='/assets/image/default.png';
       this.videoUrl='/assets/video/default.mp4';
      }
      );
      this.farm=JSON.parse(sessionStorage.getItem('farm'));
      console.log(this.farm);
      this.service.farmUpload(this.farm).subscribe((result:any) => {console.log(result)});
      this.showToasterSuccess1();
      this.sendsms(this.userId);
      this.router.navigate(['barchart']);

    }
    else{
      this.showToasterSuccess2();
    }
  
  }
    showToasterSuccess() {
      this.service.showSuccess("Farm is successfully uploaded ", "AGRICITEASE")
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
     showToasterSuccess1() {
      this.service.showSuccess("Correct OTP ", "AGRICITEASE")
    }
  
    showToasterError1() {
      this.service.showError("Something is wrong", "ItSolutionStuff.com")
    }
  
    showToasterInfo1() {
      this.service.showInfo("This is info", "ItSolutionStuff.com")
    }
  
    showToasterWarning1() {
      this.service.showWarning("This is warning", "ItSolutionStuff.com")
    }
    showToasterSuccess2() {
      this.service.showSuccess("Wrong OTP ", "AGRICITEASE")
    }
  
    showToasterError2() {
      this.service.showError("Something is wrong", "ItSolutionStuff.com")
    }
  
    showToasterInfo2() {
      this.service.showInfo("This is info", "ItSolutionStuff.com")
    }
  
    showToasterWarning2() {
      this.service.showWarning("This is warning", "ItSolutionStuff.com")
    }
    sendsms(userId:any):any{
     
     this.showToasterSuccess();
      this.service.currentMessage.subscribe(message => this.message = message);
      this.userId = this.message;
      console.log(this.userId);
      this.service.sendsms(this.userId).subscribe((data:any) => {console.log(data); this.address= data ;});
  
    }
  }