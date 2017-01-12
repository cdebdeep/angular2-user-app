import {Component} from 'angular2/core';
import  {UserList} from './app.component.userlist'

@Component({
    selector: 'my-app',
    template: '' +
    '<h1>Angular 2 Hello...</h1>' +
    '<user-list></user-list>',
    directives:[UserList]
})

export class AppComponent {}
