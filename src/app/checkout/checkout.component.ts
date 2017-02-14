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
            $('input#newAddress').on('ifChanged', function(event:any) {
                //alert(event:any.type + ' callback');
                $('#newBillingAddressBox').collapse("show");
                $('#exisitingAddressBox').collapse("hide");

            });

            $('input#exisitingAddress').on('ifChanged', function(event:any) {
                //alert(event:any.type + ' callback');
                $('#newBillingAddressBox').collapse("hide");
                $('#exisitingAddressBox').collapse("show");
            });


            $('input#newShippingAddress').on('ifChanged', function(event:any) {
                //alert(event:any.type + ' callback');
                $('#newShippingAddressBox').collapse("show");

            });

            $('input#existingShippingAddress').on('ifChanged', function(event:any) {
                //alert(event:any.type + ' callback');
                $('#newShippingAddressBox').collapse("hide");

            });


            $('input#creditCard').on('ifChanged', function(event:any) {
                //alert(event:any.type + ' callback');
                $('#creditCardCollapse').collapse("toggle");

            });


            $('input#CashOnDelivery').on('ifChanged', function(event:any) {
                //alert(event:any.type + ' callback');
                $('#CashOnDeliveryCollapse').collapse("toggle");

            });
        })
    }
}