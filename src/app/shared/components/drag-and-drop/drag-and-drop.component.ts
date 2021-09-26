import { DataSetService } from './../../services/dataset.service';
import { Component } from '@angular/core';

@Component({
  templateUrl: './drag-and-drop.component.html',
  styleUrls: ['./drag-and-drop.component.scss'],
  selector: 'qosc-drag-and-drop',
})
export class DragAndDropComponent {
  constructor(private dataSetService: DataSetService) {}
  hasFile = this.dataSetService.hasFile();
  file$ = this.dataSetService.file$;

  changeFile([file]) {
    this.dataSetService.publishDataSet(file);
  }
}
