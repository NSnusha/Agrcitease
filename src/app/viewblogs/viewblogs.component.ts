import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-viewblogs',
  templateUrl: './viewblogs.component.html',
  styleUrls: ['./viewblogs.component.css']
})
export class ViewblogsComponent implements OnInit {
  blogs : any;

  constructor(private service:UserService,private router:Router) { }

  ngOnInit(): void {
    this.service.getallreviews().subscribe((results:any) => {console.log(results);this.blogs=results;});
  }

} 
