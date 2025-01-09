import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
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
import { DirectivesComponent } from './directives/directives.component';
import { PipesComponent } from './pipes/pipes.component';
import { EmployeeComponent } from './employee/employee.component';
import { MyMartComponent } from './my-mart/my-mart.component';
import { VehicleComponent } from './vehicle/vehicle.component';
import { AccountsComponent } from './accounts/accounts.component';
import { FakestoreComponent } from './fakestore/fakestore.component';
import { MailComponent } from './mail/mail.component';
import { PinterestComponent } from './pinterest/pinterest.component';
import { WeatherComponent } from './weather/weather.component';
import { BlogComponent } from './blog/blog.component';
import { MovieComponent } from './movie/movie.component';
import { ProfileComponent } from './profile/profile.component';
import { PokemonCarouselComponent } from './pokemon-carousel/pokemon-carousel.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: '', component: LoginComponent },
  {
    path: 'dashboard',
    component: DashboardComponent,
    children: [
      { path: 'home', component: HomeComponent },
      { path: 'welcome', component: WelcomeComponent },
      { path: 'databinding', component: DatabindingComponent },
      { path: 'calculator', component: CalculatorComponent },
      { path: 'rectangle', component: RectangleComponent },
      { path: 'circle', component: CircleComponent },
      { path: 'bmi', component: BmiComponent },
      { path: 'directives', component: DirectivesComponent },
      { path: 'pipes', component: PipesComponent },
      { path: 'emp', component: EmployeeComponent },
      { path: 'mart', component: MyMartComponent },
      { path: 'vehicle', component: VehicleComponent },
      { path: 'accounts', component: AccountsComponent },
      { path: 'store', component: FakestoreComponent },
      { path: 'mail', component: MailComponent },
      { path: 'pinterest', component: PinterestComponent },
      { path: 'weather', component: WeatherComponent },
      { path: 'blogs', component: BlogComponent },
      { path: 'movie', component: MovieComponent },
      { path: 'profile', component: ProfileComponent },
      { path: 'cards', component: PokemonCarouselComponent },
    ],
  },
  { path: '**', component: ErrorComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
