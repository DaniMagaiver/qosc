
import { SharedModule } from 'src/app/shared/shared.module';
import { MainComponent } from './main.component';
import { NgModule } from '@angular/core';
import { ComponentsModule } from './components/components.module';

@NgModule({
    imports: [SharedModule, ComponentsModule],
    declarations: [MainComponent],
    exports: [MainComponent]
})
export class MainModule{

}