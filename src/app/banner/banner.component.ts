import { Component, AfterViewInit, ElementRef } from '@angular/core';
declare var $:any;

@Component({
    moduleId: module.id,
    selector: 'banner',
    templateUrl: 'banner.component.html'
})

export class BannerComponent implements AfterViewInit{
    constructor(private el:ElementRef){}
    ngAfterViewInit() {
        $(this.el.nativeElement).ready(function () {
            var pshowcase = $("#productShowCase");
            pshowcase.owlCarousel({
                autoPlay: 4000,
                stopOnHover: true,
                navigation: false,
                paginationSpeed: 1000,
                goToFirstSpeed: 2000,
                singleItem: true,
                autoHeight: true
            });
            $("#ps-next").click(function() {
                pshowcase.trigger('owl.next');
            })
            $("#ps-prev").click(function() {
                pshowcase.trigger('owl.prev');
            })
        })
    }
}