import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';
import {Subject} from 'rxjs';

import {AuthData} from './auth-data.model';


@Injectable({providedIn: 'root'})
export class AuthService
{
    constructor(private http: HttpClient){}


login(email:string, password:string, username:string)
{
console.log("1")

    const authData: AuthData = {email:email, password:password, username:username}
this.http.post<{token:string}>('https://localhost:3232/api/user/login',authData)
.subscribe(response=>{


    const token = response.token;
    this.token = token;

    console.log(response);

})

}



    createUser(email:string, password:string, username:string)
    {
        const authData: AuthData = {email:email, password:password, username:username};

        this.http.post('https://localhost:3232/api/user/signup', authData)
        .subscribe(response=>{
            console.log(response);
        });


    }




private token : string;

getToken()
{
    return this.token;
}


}