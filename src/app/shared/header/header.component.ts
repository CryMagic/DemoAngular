import { Component, AfterViewInit, ElementRef } from '@angular/core';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
declare var $:any;

@Component({
    moduleId: module.id,
    selector: 'app-header',
    templateUrl: 'header.component.html'
})

export class HeaderComponent implements AfterViewInit{
    constructor(private el:ElementRef){}
     ngAfterViewInit() {
        $(".scroll-pane").mCustomScrollbar({
            advanced: {
                updateOnContentResize: true
            },
            scrollButtons: {
                enable: false
            },
            mouseWheelPixels: "200",
            theme: "dark-2"
        });
        
        $('input').iCheck({
            checkboxClass: 'icheckbox_square-green iCheck-margin',
            radioClass: 'iradio_square-green iChk iCheck-margin'
        });
     }
}