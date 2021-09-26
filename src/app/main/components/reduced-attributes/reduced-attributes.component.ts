import { DataSetService } from './../../../shared/services/dataset.service';
import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
    templateUrl: './reduced-attributes.component.html',
    styleUrls: ['./reduced-attributes.component.scss'],
    selector: 'qosc-reduced-attributes'
})
export class ReducedAttributesComponent{
    constructor(private dataSetService:DataSetService){}
    dataSource = [];
    file$ = this.dataSetService.file$;
    subscriptions = new Subscription();
}