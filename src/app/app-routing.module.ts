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
import { CreateVehicleComponent } from './create-vehicle/create-vehicle.component';
import { StudentComponent } from './student/student.component';
import { CreateStudentComponent } from './create-student/create-student.component';
import { CreateUserComponent } from './create-user/create-user.component';
import { UserTaskComponent } from './user-task/user-task.component';
import { AuthenticationGuard } from './authentication.guard';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: '', component: LoginComponent },
  {
    path: 'dashboard',
    canActivate: [AuthenticationGuard],
    component: DashboardComponent,
    children: [
      { path: 'home', canActivate: [AuthenticationGuard], component: HomeComponent },
      { path: 'welcome', canActivate: [AuthenticationGuard], component: WelcomeComponent },
      { path: 'databinding', canActivate: [AuthenticationGuard], component: DatabindingComponent },
      { path: 'calculator', canActivate: [AuthenticationGuard], component: CalculatorComponent },
      { path: 'rectangle', canActivate: [AuthenticationGuard], component: RectangleComponent },
      { path: 'circle', canActivate: [AuthenticationGuard], component: CircleComponent },
      { path: 'bmi', canActivate: [AuthenticationGuard], component: BmiComponent },
      { path: 'directives', canActivate: [AuthenticationGuard], component: DirectivesComponent },
      { path: 'pipes', canActivate: [AuthenticationGuard], component: PipesComponent },
      { path: 'emp', canActivate: [AuthenticationGuard], component: EmployeeComponent },
      { path: 'mart', canActivate: [AuthenticationGuard], component: MyMartComponent },
      { path: 'vehicle', canActivate: [AuthenticationGuard], component: VehicleComponent },
      { path: 'create-vehicle', canActivate: [AuthenticationGuard], component: CreateVehicleComponent },
      { path: 'accounts',canActivate: [AuthenticationGuard], component: AccountsComponent },
      { path: 'store', canActivate: [AuthenticationGuard], component: FakestoreComponent },
      { path: 'mail', canActivate: [AuthenticationGuard], component: MailComponent },
      { path: 'pinterest', canActivate: [AuthenticationGuard], component: PinterestComponent },
      { path: 'weather', canActivate: [AuthenticationGuard], component: WeatherComponent },
      { path: 'blogs', canActivate: [AuthenticationGuard], component: BlogComponent },
      { path: 'movie', canActivate: [AuthenticationGuard], component: MovieComponent },
      { path: 'profile', canActivate: [AuthenticationGuard], component: ProfileComponent },
      { path: 'cards', canActivate: [AuthenticationGuard], component: PokemonCarouselComponent },
      { path: 'students', canActivate: [AuthenticationGuard], component: StudentComponent },
      { path: 'create-student', canActivate: [AuthenticationGuard], component: CreateStudentComponent },
      { path: 'create-user', canActivate: [AuthenticationGuard], component: CreateUserComponent },
      { path: 'user-task', canActivate: [AuthenticationGuard], component: UserTaskComponent },
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
      { path: 'create-vehicle', component: CreateVehicleComponent },
      { path: 'accounts', component: AccountsComponent },
      { path: 'store', component: FakestoreComponent },
      { path: 'mail', component: MailComponent },
      { path: 'pinterest', component: PinterestComponent },
      { path: 'weather', component: WeatherComponent },
      { path: 'blogs', component: BlogComponent },
      { path: 'movie', component: MovieComponent },
      { path: 'profile', component: ProfileComponent },
      { path: 'cards', component: PokemonCarouselComponent },
      { path: 'students', component: StudentComponent },
      { path: 'create-student', component: CreateStudentComponent },
      { path: 'create-user', component: CreateUserComponent },
      { path: 'user-task', component: UserTaskComponent },
    ],
  },
  { path: '**', component: ErrorComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
