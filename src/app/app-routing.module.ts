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
import { ToDoListComponent } from './to-do-list/to-do-list.component';
import { AuthenticationGuard } from './authentication.guard';
import { OperatorsComponent } from './operators/operators.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: '', component: LoginComponent },
  {
    path: 'dashboard',
    canActivate: [AuthenticationGuard],
    component: DashboardComponent,
    children: [
      { path: 'home', canActivate: [AuthenticationGuard], component: HomeComponent,},
      { path: 'welcome', canActivate: [AuthenticationGuard], component: WelcomeComponent },
      { path: '', canActivate: [AuthenticationGuard], component: WelcomeComponent },
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
      { path: 'accounts', canActivate: [AuthenticationGuard], component: AccountsComponent },
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

      { path: 'vehicle-details/:id', canActivate: [AuthenticationGuard], component: VehicleDetailsComponent },
      { path: 'edit-vehicle/:id', canActivate: [AuthenticationGuard], component: CreateVehicleComponent },
      { path: 'student-details/:id', canActivate: [AuthenticationGuard], component: StudentDetailsComponent },
      { path: 'edit-student/:id', canActivate: [AuthenticationGuard], component: CreateStudentComponent },
      { path: 'sibling-2', canActivate: [AuthenticationGuard], component: Sibiling2Component },
      { path: 'sibling-1', canActivate: [AuthenticationGuard], component: Sibiling1Component },
      { path: 'parent', canActivate: [AuthenticationGuard], component: ParentComponent },
      { path: 'about-company', canActivate: [AuthenticationGuard], component: AboutCompanyModule },
      { path: 'about-ceo', canActivate: [AuthenticationGuard], component: AboutCeoModule },
      { path: 'to-do-list', canActivate: [AuthenticationGuard], component: ToDoListComponent },
      { path: 'operators', canActivate: [AuthenticationGuard], component: OperatorsComponent },
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
