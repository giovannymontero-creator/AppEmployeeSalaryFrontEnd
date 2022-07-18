import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { EmployeeListComponent } from './components/employee-list/employee-list.component';
import { HttpClientModule } from '@angular/common/http';
import { EmployeeService } from './services/employee.service';

import { Routes, RouterModule} from '@angular/router';
import { SearchComponent } from './components/search/search.component';
import { HeaderComponent } from './components/header/header.component';

const routes: Routes = [
  {path: 'search/:keyword', component: EmployeeListComponent},
  {path: 'employees', component: EmployeeListComponent},
  {path: '', redirectTo: '/employees', pathMatch: 'full'},
  {path: '**', redirectTo: '/employees', pathMatch: 'full'}
];

@NgModule({
  declarations: [
    AppComponent,
    EmployeeListComponent,
    SearchComponent,
    HeaderComponent
  ],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    HttpClientModule
  ],
  providers: [EmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
