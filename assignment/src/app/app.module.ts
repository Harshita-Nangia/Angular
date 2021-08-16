import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { PostsComponent } from './components/posts/posts.component';
import { EmployeesComponent } from './components/employees/employees.component';
import { DateInputConverterDirective } from './directives/dateinputconverter.directive';

@NgModule({
  declarations: [
    AppComponent,
    PostsComponent,
    HeaderComponent,
    EmployeesComponent,
    DateInputConverterDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NgxPaginationModule,
    HttpClientModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
