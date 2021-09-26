

import { MaterialModule } from './material/material.module';
import { NgModule } from '@angular/core';
import { ComponentsModule } from './components/components.module';
import { CommonModule } from '@angular/common';

@NgModule({
    imports:[MaterialModule, ComponentsModule, CommonModule],
    exports:[MaterialModule, ComponentsModule, CommonModule]
})
export class SharedModule{}