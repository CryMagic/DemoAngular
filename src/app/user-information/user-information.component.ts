import { Component, ElementRef, AfterViewInit } from '@angular/core';
declare var $: any;

@Component({
    moduleId: module.id,
    selector: 'user-information',
    templateUrl: 'user-information.component.html'
})

export class UserInformationComponent implements AfterViewInit{
    constructor(private el: ElementRef) { }
    ngAfterViewInit() {
        $(this.el.nativeElement).ready(function () {
            $('input').iCheck({
                checkboxClass: 'icheckbox_square-green iCheck-margin',
                radioClass: 'iradio_square-green iChk iCheck-margin'
            });
        })
    }
}