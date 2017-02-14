import { Component, AfterViewInit, ElementRef, OnInit} from '@angular/core';
declare var $:any;

@Component({
    moduleId: module.id,
    selector: 'app-home',
    templateUrl: 'home.component.html'
})

export class HomeComponent implements AfterViewInit, OnInit{
    public Array: string[] = ["Trần Quốc Thiện","Trần Khải Ny","Trần Quốc Biển"];   
    constructor(private el:ElementRef){}
    ngAfterViewInit() {
        $(this.el.nativeElement).ready(function () {
            function customPager() {
                $.each(this.owl.userItems, function(i:any) {
                    var pagination1 = $('.owl-controls .owl-pagination > div:first-child');
                    var pagination = $('.owl-controls .owl-pagination');
                    $(pagination[i]).append("<div class=' owl-has-nav owl-next'><i class='fa fa-angle-right'></i>  </div>");
                    $(pagination1[i]).before("<div class=' owl-has-nav owl-prev'><i class='fa fa-angle-left'></i> </div>");
                });
            }
            var latestProductSlider = $("#productslider");
            latestProductSlider.owlCarousel({
                navigation: false,
                items: 4,
                loop:true,
                autoPlay:3000,
                itemsTablet: [768, 2],
                afterInit: customPager,
                afterUpdate: customPager
            });
            $(".owl-next").click(function() {
                latestProductSlider.trigger('owl.next');
            })
            $(".owl-prev").click(function() {
                latestProductSlider.trigger('owl.prev');
            })
        })        
    }
    ngOnInit() {
        //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
        //Add 'implements OnInit' to the class.
        
    }
}