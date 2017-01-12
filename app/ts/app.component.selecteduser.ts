/**
 * Created by debdeep.chaudhuri on 1/12/2017.
 */
import {Component} from 'angular2/core'
import {User} from './model.user'
import {Input, Output} from "angular2/src/core/metadata";
import {EventEmitter} from "angular2/src/facade/async";

@Component({
    selector:'selected-user',
    templateUrl:'./app/ts/app.component.selecteduser.html'

})
export  class SelectedUser{
    @Input() selectedUser:User;
    @Output() notify :EventEmitter<User>=new EventEmitter<User>();

    onClick(user){
        this.notify.emit(user);
    };
}

