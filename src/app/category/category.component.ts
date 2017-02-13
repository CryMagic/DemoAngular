import { Component, AfterViewInit, ElementRef } from '@angular/core';
declare var $:any;

@Component({
    moduleId: module.id,
    selector: 'category',
    templateUrl: 'category.component.html'
})

export class CategoryComponent implements AfterViewInit{
    constructor(private el:ElementRef){}
    ngAfterViewInit() {
        $(this.el.nativeElement).ready(function () {
            $(".change-view .list-view, .change-view-flat .list-view").click(function(e:any) {
                e.preventDefault();
                $('.categoryProduct  .item').addClass("list-view");
                $('.add-fav').attr("data-placement", $(this).attr("left"));
                $('.categoryProduct > .item').detectGridColumns();
            });
            $(".change-view .grid-view, .change-view-flat .grid-view").click(function(e:any) {
                e.preventDefault();
                $('.categoryProduct  .item').removeClass("list-view");
                $('.categoryProduct > .item').detectGridColumns();
                setTimeout(function() {
                    $('.categoryProduct > .item').responsiveEqualHeightGrid();
                }, 500);
            });
            $('input').iCheck({
                checkboxClass: 'icheckbox_square-green iCheck-margin',
                radioClass: 'iradio_square-green iChk iCheck-margin'
            });
            $(".dropdown-tree-a").click(function() {
                $(this).parent('.dropdown-tree').toggleClass("open-tree active");
            });
            $(function() {
                var navTree = $('.nav-tree li:has(ul)');
                var navTreeA = navTree.addClass('parent_li').find(' > a');
                navTreeA.each(function() {
                    if ($(this).hasClass("child-has-open")) {} else {
                        $(this).addClass("child-has-close");
                        var navTreeAchildren = $(this).parent('li.parent_li').find(' > ul > li');
                        navTreeAchildren.hide();
                    }
                });
                $('.nav-tree li.parent_li > a').on('click', function(e:any) {
                    var children = $(this).parent('li.parent_li').find(' > ul > li');
                    if (children.is(":visible")) {
                        children.hide('fast');
                        $(this).addClass('child-has-close').removeClass('child-has-open');
                    } else {
                        children.show('fast');
                        $(this).addClass('child-has-open').removeClass('child-has-close');
                    }
                    e.stopPropagation();
                });
            });
            $(".smoothscroll").mCustomScrollbar({
                advanced: {
                    updateOnContentResize: true
                },
                scrollButtons: {
                    enable: false
                },
                mouseWheelPixels: "100",
                theme: "dark-2"
            });
        })
    }
}