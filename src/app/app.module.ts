import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { ErrorComponent } from './error/error.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { DatabindingComponent } from './databinding/databinding.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { RectangleComponent } from './rectangle/rectangle.component';
import { CircleComponent } from './circle/circle.component';
import { BmiComponent } from './bmi/bmi.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DirectivesComponent } from './directives/directives.component';
import { PipesComponent } from './pipes/pipes.component';
import { EmployeeComponent } from './employee/employee.component';
import { MyMartComponent } from './my-mart/my-mart.component';
import { VehicleComponent } from './vehicle/vehicle.component';
import { HttpClientModule } from "@angular/common/http";
import { AccountsComponent } from './accounts/accounts.component';
import { FakestoreComponent } from './fakestore/fakestore.component';
import { MailComponent } from './mail/mail.component';
import { PinterestComponent } from './pinterest/pinterest.component';
import { WeatherComponent } from './weather/weather.component';
import { BlogComponent } from './blog/blog.component';
import { MovieComponent } from './movie/movie.component';
import { ProfileComponent } from './profile/profile.component';
import { PokemonCarouselComponent } from './pokemon-carousel/pokemon-carousel.component';
import { CreateVehicleComponent } from './create-vehicle/create-vehicle.component';
import { StudentComponent } from './student/student.component';
import { CreateStudentComponent } from './create-student/create-student.component';
import { VehicleDetailsComponent } from './vehicle-details/vehicle-details.component';
import { CreateUserComponent } from './create-user/create-user.component';
import { StudentDetailsComponent } from './student-details/student-details.component';
import { Sibiling1Component } from './sibiling1/sibiling1.component';
import { Sibiling2Component } from './sibiling2/sibiling2.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { RatingComponent } from './rating/rating.component';
import { CapitalDirective } from './capital.directive';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    HomeComponent,
    ErrorComponent,
    WelcomeComponent,
    DatabindingComponent,
    CalculatorComponent,
    RectangleComponent,
    CircleComponent,
    BmiComponent,
    DirectivesComponent,
    PipesComponent,
    EmployeeComponent,
    MyMartComponent,
    VehicleComponent,
    AccountsComponent,
    FakestoreComponent,
    MailComponent,
    PinterestComponent,
    WeatherComponent,
    BlogComponent,
    MovieComponent,
    ProfileComponent,
    PokemonCarouselComponent,
    CreateVehicleComponent,
    StudentComponent,
    CreateStudentComponent,
    VehicleDetailsComponent,
    CreateUserComponent,
    StudentDetailsComponent,
    Sibiling1Component,
    Sibiling2Component,
    ParentComponent,
    ChildComponent,
    RatingComponent,
    CapitalDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
