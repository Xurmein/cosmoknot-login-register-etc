import { Component } from '@angular/core';
import { MatDialog } from '@angular/material';
import { CreateNewUserDiagBoxComponent } from '../create-new-user-diag-box/create-new-user-diag-box.component';

export interface AdminData{
  username : string;
  password : string;
  is_admin : boolean;
  adminID : string;
}

@Component({
  selector: 'app-create-new-user',
  templateUrl: './create-new-user.component.html',
  styleUrls: ['./create-new-user.component.css']
})
export class CreateNewUserComponent {
  public username : string;
  public password : string;
  public is_admin = false;
  public adminID : string;

  constructor(public newUserDiag : MatDialog) { }

  clickNewUser(): any {
      const createDiagRef = this.newUserDiag.open(CreateNewUserDiagBoxComponent, {
        width : '67vw',
        height : 'fit-content',
        data : {
            username : this.username,
            password : this.password,
            is_admin : this.is_admin,
            adminID : this.adminID
        }
      });
      return createDiagRef;
  }

}