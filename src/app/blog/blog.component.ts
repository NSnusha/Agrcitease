import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {
  blog : any;

  constructor(private service: UserService,private router:Router) {
   this.blog = {name : '',role:'',rating:'',review : '' };

   }

  ngOnInit(): void {
  }
  showToasterSuccess() {
    this.service.showSuccess("review added succesfullly ", "AGRICITEASE")
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
  addBlog(blogForm : any): void{
    this.service.addReview(this.blog).subscribe((result:any) => {console.log(result);});
    console.log(this.blog);
   this.showToasterSuccess();
    //this.showToasterSuccess();
    this.router.navigate(['home']);
    
  }

}