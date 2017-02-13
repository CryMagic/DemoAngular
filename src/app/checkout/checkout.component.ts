import { Component, ElementRef, AfterViewInit } from '@angular/core';
declare var $: any;

@Component({
    moduleId: module.id,
    selector: 'checkout',
    templateUrl: 'checkout.component.html'
})

export class CheckoutComponent implements AfterViewInit{
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