import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule} from '@angular/router';
import { FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello/hello.component';
import { HelloDirective } from './hello.directive';
import { HelloPipe } from './hello.pipe';
import { NavbarComponent } from './navbar/navbar.component';
import { FootbarComponent } from './footbar/footbar.component';
import { MainlayoutComponent } from './mainlayout/mainlayout.component';
import { MovielistComponent } from './movielist/movielist.component';
import { MoviedetailsComponent } from './moviedetails/moviedetails.component';
import { HttpClientModule } from '@angular/common/http';
import { LoginpageComponent } from './loginpage/loginpage.component';
import { LogoutpageComponent } from './logoutpage/logoutpage.component';
import { HomepageComponent } from './homepage/homepage.component';
import { MoviespageComponent } from './moviespage/moviespage.component';
import { TvpageComponent } from './tvpage/tvpage.component';
import { EventspageComponent } from './eventspage/eventspage.component';
import { AboutuspageComponent } from './aboutuspage/aboutuspage.component';
import { OopspageComponent } from './oopspage/oopspage.component';
import { AuthGuard } from './auth.guard';
import { StarttvComponent } from './starttv/starttv.component';
import { SuntvComponent } from './suntv/suntv.component';
import { BbcComponent } from './bbc/bbc.component';
import { CnnComponent } from './cnn/cnn.component';
import { News7Component } from './news7/news7.component';
import { ChannellistComponent } from './channellist/channellist.component';
import { JayatvComponent } from './jayatv/jayatv.component';
import { RatingPipe } from './rating.pipe';
import { PopupDirective } from './popup.directive';
import { EventlistComponent } from './eventlist/eventlist.component';


const routes=[
  {
  path:'home',component:HomepageComponent
  },
  {
    path:'login',component:LoginpageComponent
  },
  {
    path:'logout',component:LogoutpageComponent
  },
  {
    path:'movies',component:MoviespageComponent,canActivate:[AuthGuard]
  },
  {
    path:'events',component:EventspageComponent,canActivate:[AuthGuard]
  },
  {
    path:'tv',component:TvpageComponent,canActivate:[AuthGuard],
    children:[
      {
        path:'suntv',component:SuntvComponent
      },
      {
        path:'jayatv',component:JayatvComponent
      },
      {
        path:'bbc',component:BbcComponent
      },
      {
        path:'cnn',component:CnnComponent
      },
      {
        path:'news7',component:News7Component
      }
    ]
  },
  {
    path:'**',component:OopspageComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    HelloComponent,
    HelloDirective,
    HelloPipe,
    NavbarComponent,
    FootbarComponent,
    MainlayoutComponent,
    MovielistComponent,
    MoviedetailsComponent,
    LoginpageComponent,
    LogoutpageComponent,
    HomepageComponent,
    MoviespageComponent,
    TvpageComponent,
    EventspageComponent,
    AboutuspageComponent,
    OopspageComponent,
    StarttvComponent,
    SuntvComponent,
    BbcComponent,
    CnnComponent,
    News7Component,
    ChannellistComponent,
    JayatvComponent,
    RatingPipe,
    PopupDirective,
    EventlistComponent
    ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
