import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatCardModule} from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon'
import {MatToolbarModule} from '@angular/material/toolbar'; 
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatButtonModule} from '@angular/material/button';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './login/login.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AuthGuard } from './auth.guard';
import { UserdetaislComponent } from './userdetaisl/userdetaisl.component';
import { HttpClientModule } from '@angular/common/http';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import { LayoutComponent } from './layout/layout.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ToolbarComponent,
    SidenavComponent,
    DashboardComponent,
    UserdetaislComponent,
    LayoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    MatCardModule,
    MatIconModule,
    MatToolbarModule,
    MatSidenavModule,
    MatFormFieldModule, 
    MatSelectModule,
     MatButtonModule,
     HttpClientModule,
     MatTableModule, 
     MatPaginatorModule
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
