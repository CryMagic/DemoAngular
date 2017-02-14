import { Component, AfterViewInit} from '@angular/core';
declare var $:any;
@Component({
    moduleId: module.id,
    selector: 'account',
    templateUrl: 'account.component.html'
})

export class AccountComponent implements AfterViewInit{
    
    ngAfterViewInit(){
        $(function() {
            $('.thumbnail.equalheight').responsiveEqualHeightGrid();
        });
    }
}