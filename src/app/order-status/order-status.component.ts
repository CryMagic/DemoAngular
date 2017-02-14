import { Component, AfterViewInit } from '@angular/core';
declare var $:any;

@Component({
    moduleId: module.id,
    selector: 'order-status',
    templateUrl: 'order-status.component.html'
})

export class OrderStatusComponent implements AfterViewInit{
    ngAfterViewInit(){
        $('.footable').footable();
    }
}