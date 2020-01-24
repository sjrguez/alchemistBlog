import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../services/auth.service';
@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {

  appName = `The Alchemist's Blog`;
  constructor(public authSrv: AuthService) { }

  ngOnInit() {
  }


  logOut() {
    this.authSrv.logout();
  }
}
