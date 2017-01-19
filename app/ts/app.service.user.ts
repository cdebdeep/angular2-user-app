/**
 * Created by debdeep.chaudhuri on 1/19/2017.
 */
import {Injectable} from 'angular2/core'

import {User} from './model.user'

@Injectable()
export class UserService{
    private userlist:Array<User>=[];
    constructor(){
        this.userlist.push(
            new User(1,'Jonathon','Robert',30),
            new User(2,'Mariya','Willium',20),
            new User(3,'Hariat','Winslet',50),
            new User(4,'Peter','Parkar',45)
        )
    }

    getAll(){
        var promise = new Promise(function (resolve,reject) {
            try{
               setTimeout(()=>{
                   resolve(this.userlist)
               },100)
            }catch(ex){
                reject(ex)
            }
        }.bind(this))
        return this.userlist;
    }
}
