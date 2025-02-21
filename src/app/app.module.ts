import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import{FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import {RouterModule,Routes} from '@angular/router';
import {AuthGuard} from './auth.guard';
import { AppComponent } from './app.component';
import { FarmUploadComponent } from './farm-upload/farm-upload.component';
import { FarmComponent } from './farm/farm.component';
import { FarmerViewProfileComponent } from './farmer-view-profile/farmer-view-profile.component';


import { RegisterComponent } from './register/register.component';
import { HttpClientModule } from '@angular/common/http';

import { RegisterCompComponent } from './register-comp/register-comp.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

import { ShowDbImagesComponent } from './show-db-images/show-db-images.component';
import { UploadImageComponent } from './upload-image/upload-image.component';
import { LoginComponent } from './login/login.component';
import { ShowfarmsComponent } from './showfarms/showfarms.component';
import { ViewprofileComponent } from './viewprofile/viewprofile.component';
import { RepresentativeComponent } from './representative/representative.component';

import { LoginrepresentativeComponent } from './loginrepresentative/loginrepresentative.component';
import { AddfarmerComponent } from './addfarmer/addfarmer.component';
import { AddfarmComponent } from './addfarm/addfarm.component';
import { ViewprofileRepresentativeComponent } from './viewprofile-representative/viewprofile-representative.component';
import { LoginconsumerComponent } from './loginconsumer/loginconsumer.component';
import { LogoutComponent } from './logout/logout.component';
import { AboutComponent } from './about/about.component';
import { AllformsComponent } from './allforms/allforms.component';
import { CropstataticsComponent } from './cropstatatics/cropstatatics.component';
import { ConsumerComponent } from './consumer/consumer.component';
import { FiltersComponent } from './filters/filters.component';
import { SingleFarmComponent } from './single-farm/single-farm.component';
import { About1Component } from './about1/about1.component';
import { OrdersComponent } from './orders/orders.component';
import { BlogComponent } from './blog/blog.component';
import { ViewblogsComponent } from './viewblogs/viewblogs.component';
import { BarchartComponent } from './barchart/barchart.component';

const appRoot: Routes = [
  { path: '' , component:RegisterCompComponent},
  {path: 'home' , component:RegisterCompComponent},
  { path: 'register' , component:RegisterComponent},
  { path:'farm' , component:FarmComponent},
  
  {path:'farmUpload', component:FarmUploadComponent},
  {path:'login',component:LoginComponent},
  {path:'loginre',component:LoginrepresentativeComponent},
  {path:'logincon',component:LoginconsumerComponent},
  {path:'profile',canActivate:[AuthGuard],component:FarmerViewProfileComponent},
  {path:'image',component:UploadImageComponent},
  {path:'viewprofile',component:ViewprofileComponent},
  {path:'representative',canActivate:[AuthGuard],component:RepresentativeComponent},
  {path:'addfarm',component: AddfarmComponent},
  {path:'addfarmer',component:AddfarmerComponent},
  {path:'viewprofilerepresentative',component:ViewprofileRepresentativeComponent},
  { path: 'about' , component: About1Component},
  { path: 'consumer' , component: AllformsComponent},
  { path: 'crop' , component: CropstataticsComponent},
  {path:'logout',component:LogoutComponent},
  { path: 'consumerPage' , component: ShowDbImagesComponent},
  { path: 'singleFarm' ,  component: SingleFarmComponent},
  { path: 'filters' , component:FiltersComponent},
  { path: 'orders' ,  component:OrdersComponent},
  
{path: 'addreview',component :BlogComponent },
{path : 'viewreviews',component : ViewblogsComponent},
{path : 'barchart',component : BarchartComponent},

]

@NgModule({
  declarations: [
    AppComponent,
    
    RegisterComponent,
   
    RegisterCompComponent,
    FarmUploadComponent,
    FarmComponent,
    
    FarmerViewProfileComponent,
   
    ShowDbImagesComponent,
    UploadImageComponent,
    LoginComponent,
    ShowfarmsComponent,
    ViewprofileComponent,
    RepresentativeComponent,
   
    LoginrepresentativeComponent,
   
    AddfarmerComponent,
   
    AddfarmComponent,
   
    ViewprofileRepresentativeComponent,
   
    LoginconsumerComponent,
   
    LogoutComponent,
   
    AboutComponent,
   
    AllformsComponent,
   
    CropstataticsComponent,
   
    ConsumerComponent,
    FiltersComponent,
    SingleFarmComponent,
    About1Component,
    OrdersComponent,
    BlogComponent,
    ViewblogsComponent,
    BarchartComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoot),
   
    BrowserAnimationsModule,
    ToastrModule.forRoot()


  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }

