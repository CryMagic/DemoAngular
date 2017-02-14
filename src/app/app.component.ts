import { Component, OnInit} from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
    selector: 'my-app',
    template: `
    <app-header></app-header>
    <router-outlet></router-outlet>
    <app-footer></app-footer>
    `
})
export class AppComponent implements OnInit { 
    constructor(private router: Router) { }
    ngOnInit(){
        this.router.events.subscribe((evt) => {
            if (!(evt instanceof NavigationEnd)) {
                return;
            }
            document.body.scrollTop = 0;
        })
    }
}
