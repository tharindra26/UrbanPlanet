import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {User} from "../../model/User";
import {HttpClientService} from "../../service/http-client.service";


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  users:Array<User>;
  selectedUser: User;
  action: string;


  constructor(private httpClientService: HttpClientService,
              private router: Router,
              private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.refreshData();
  }
  refreshData() {
    this.httpClientService.getUsers().subscribe(
      response => this.handleSuccessfulResponse(response),
    );

    this.activatedRoute.queryParams.subscribe(
      (params) => {
        this.action = params['action'];
        const selectedUserId = params['id'];
        if (selectedUserId) {
          this.selectedUser = this.users.find(user => user.id === +selectedUserId);
        }
      }
    );

  }



  handleSuccessfulResponse(response){
    this.users=response;
  }

  viewUser(id: number) {
    this.router.navigate(['admin-menubar','users'], {queryParams : {id, action: 'view'}});
  }

  addUser() {
    this.selectedUser = new User();
    this.router.navigate(['admin-menubar', 'users'], { queryParams: { action: 'add' } });
  }


}
