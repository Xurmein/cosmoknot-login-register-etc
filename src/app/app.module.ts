import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button'
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterAdminComponent } from './register-admin/register-admin.component';
import { LoginDiagBoxComponent } from './login-diag-box/login-diag-box.component';
import { RegisterAdminDiagBoxComponent } from './register-admin-diag-box/register-admin-diag-box.component';
import { CreateNewUserComponent } from './create-new-user/create-new-user.component';
import { CreateNewUserDiagBoxComponent } from './create-new-user-diag-box/create-new-user-diag-box.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterAdminComponent,
    CreateNewUserComponent,
    LoginDiagBoxComponent,
    RegisterAdminDiagBoxComponent,
    CreateNewUserDiagBoxComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    MatInputModule,
    MatDialogModule,
    MatButtonModule,
    MatCheckboxModule,
    BrowserAnimationsModule ,
    MatSlideToggleModule
  ],
  providers: [],
  bootstrap: [
    AppComponent,
    LoginComponent,
    RegisterAdminComponent,
    CreateNewUserComponent
  ],
  entryComponents: [
    RegisterAdminDiagBoxComponent,
    CreateNewUserDiagBoxComponent,
    LoginDiagBoxComponent
  ]
})
export class AppModule { }
