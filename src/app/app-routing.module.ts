import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
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
import { VehicleDetailsComponent } from './vehicle-details/vehicle-details.component';
import { CreateUserComponent } from './create-user/create-user.component';
import { StudentDetailsComponent } from './student-details/student-details.component';
import { Sibiling1Component } from './sibiling1/sibiling1.component';
import { Sibiling2Component } from './sibiling2/sibiling2.component';
import { ParentComponent } from './parent/parent.component';
import { AboutCompanyModule } from './about-us/about-company/about-company.module';
import { AboutCeoModule } from './about-us/about-ceo/about-ceo.module';

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

      { path: 'vehicle-details/:id', component: VehicleDetailsComponent },
      { path: 'edit-vehicle/:id', component: CreateVehicleComponent },
      { path: 'student-details/:id', component: StudentDetailsComponent },
      { path: 'edit-student/:id', component: CreateStudentComponent },
      { path: 'sibling-2', component: Sibiling2Component },
      { path: 'sibling-1', component: Sibiling1Component },
      { path: 'parent', component: ParentComponent },
      { path: 'about-company', component: AboutCompanyModule },
      { path: 'about-ceo', component: AboutCeoModule },
      { path: 'home', component: HomeComponent },
      // Lazy-loaded payment section
      {
        path: 'payments',
        loadChildren: () =>
          import('./payments/payments.module').then((m) => m.PaymentsModule),
      },
    ],
  },
  { path: '**', component: ErrorComponent },
];

@NgModule({
  // * adding preLoadingStrategy  loads all lazy-loaded modules as soon as possible, after the application has been initialized
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
