import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {User} from "../../model/User";
import {HttpClientService} from "../../service/http-client.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  users:Array<User>;
  value:any;

  loginObj: any = {
    userName: '',
    password:'',
    type:''
  };
  constructor(private router: Router,private httpClientService: HttpClientService) { }

  ngOnInit(): void {
    this.httpClientService.getUsers().subscribe(
      response => this.handleSuccessfulResponse(response),
    );

  }
  handleSuccessfulResponse(response){
    this.users=response;
  }
  onLogin(){

    this.loginObj.userName = (document.querySelector('input[name=username]') as HTMLInputElement).value;
    this.loginObj.type = (document.querySelector('input[name=type]') as HTMLInputElement).value;
    this.loginObj.password = (document.querySelector('input[name=password]') as HTMLInputElement).value;

    console.log(this.loginObj.userName);




    for (let x = 0; x < this.users.length; x++) {
      if(this.loginObj.userName == this.users[x].name && this.loginObj.type =='user' && this.loginObj.password ==this.users[x].password) {
        this.router.navigateByUrl('user-menubar');
        this.value+=1;
        break;
      } else if (this.loginObj.userName == this.users[x].name && this.loginObj.type =='admin' && this.loginObj.password ==this.users[x].password) {
        this.router.navigateByUrl('admin-menubar');
        this.value+=1;
        break;
      }
    }

    if(this.value==undefined){
      alert("Invalid username or password");
    }


  }


}
