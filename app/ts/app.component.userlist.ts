/**
 * Created by debdeep.chaudhuri on 1/12/2017.
 */
import {Component} from 'angular2/core'
import {User} from './model.user'
import {SelectedUser} from './app.component.selecteduser'
import {UserService} from './app.service.user'

@Component({
    selector:'user-list',
    templateUrl:'./app/ts/app.component.userlist.html',
    directives:[SelectedUser],
    providers:[UserService]
})

export  class  UserList{
    private userlist:Array<User>=[];
    public selectedUser:User=null;
    constructor(userService:UserService){
        /*this.userlist.push(
            new User(1,'Jonathon','Robert',30),
            new User(2,'Mariya','Willium',20),
            new User(3,'Hariat','Winslet',50),
            new User(4,'Peter','Parkar',45)
        )*/
        this.userlist=userService.getAll();
    }

    getUser(){
        return this.userlist;
    }

    onSelect(user:User){
        this.selectedUser=user;
        console.log(JSON.stringify(this.selectedUser));
    }

    onNotify(user:User){
        console.log(JSON.stringify(user))
    }
}
