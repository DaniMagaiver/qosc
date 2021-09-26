import { MaterialModule } from './../material/material.module';
import { ModalsModule } from './modals/modals.module';
import { NgModule } from '@angular/core';
import { DragAndDropComponent } from './drag-and-drop/drag-and-drop.component';
import { CommonModule } from '@angular/common';

@NgModule({
    declarations: [DragAndDropComponent],
    imports:[ModalsModule, MaterialModule, CommonModule],
    exports:[ModalsModule, DragAndDropComponent]
})
export class ComponentsModule{

}