import { ComparativeComponent } from './comparative/comparative.component';
import { SharedModule } from './../../shared/shared.module';
import { NgModule } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { OriginalAttributesComponent } from './original-attributes/original-attributes.component';
import { ReducedAttributesComponent } from './reduced-attributes/reduced-attributes.component';

@NgModule({
  imports: [SharedModule],
  declarations: [
    HeaderComponent,
    OriginalAttributesComponent,
    ReducedAttributesComponent,
    ComparativeComponent
  ],
  exports: [
    HeaderComponent,
    OriginalAttributesComponent,
    ReducedAttributesComponent,
    ComparativeComponent
  ],
})
export class ComponentsModule {}
