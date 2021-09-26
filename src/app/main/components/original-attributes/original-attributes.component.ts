import { DataSetService } from './../../../shared/services/dataset.service';
import { Component } from '@angular/core';

@Component({
    templateUrl: './original-attributes.component.html',
    styleUrls: ['./original-attributes.component.scss'],
    selector: 'qosc-original-attributes'
})
export class OriginalAttributesComponent{
    constructor(private dataSetService:DataSetService){}
    dataSource = [];
    file$ = this.dataSetService.file$;

    reset(){
        this.dataSetService.publishDataSet(new File([], ""));
    }
}