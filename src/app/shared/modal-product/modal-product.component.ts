import { Component, AfterViewInit } from '@angular/core';
declare var $:any;
@Component({
    moduleId: module.id,
    selector: 'product-modal',
    templateUrl: 'modal-product.component.html'
})

export class ProductModalComponent implements AfterViewInit{
    ngAfterViewInit(){
        $(".modal-product-thumb a").click(function() {
        var largeImage = $(this).find("img").attr('data-large');
        $(".product-largeimg").attr('src', largeImage);
        $(".zoomImg").attr('src', largeImage);
    });
    }
}