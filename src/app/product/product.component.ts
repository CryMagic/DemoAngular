import { Component, AfterViewInit, ElementRef } from '@angular/core';
declare var $:any;

@Component({
    moduleId: module.id,
    selector: 'product-detail',
    templateUrl: 'product.component.html'
})

export class ProductComponent implements AfterViewInit{
    constructor(private el:ElementRef){}
    ngAfterViewInit() {
        
        $(this.el.nativeElement).ready(function(){
            function customPager() {
                $.each(this.owl.userItems, function(i:any) {
                    var pagination1 = $('.owl-controls .owl-pagination > div:first-child');
                    var pagination = $('.owl-controls .owl-pagination');
                    $(pagination[i]).append("<div class=' owl-has-nav owl-next'><i class='fa fa-angle-right'></i>  </div>");
                    $(pagination1[i]).before("<div class=' owl-has-nav owl-prev'><i class='fa fa-angle-left'></i> </div>");
                });
            }
            var SimilarProductSlider = $("#SimilarProductSlider");
            SimilarProductSlider.owlCarousel({
                navigation: false,
                autoPlay:5000,
                loop:true,
                afterInit: customPager,
                afterUpdate: customPager
            });
            $("#SimilarProductSlider .owl-next").click(function() {
                SimilarProductSlider.trigger('owl.next');
            })
            $("#SimilarProductSlider .owl-prev").click(function() {
                SimilarProductSlider.trigger('owl.prev');
            })
        })
    }
}