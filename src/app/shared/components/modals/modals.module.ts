import { QuestionComponent } from './question/question.component';
import { MessageComponent } from './message/message.component';
import { NgModule } from '@angular/core';
import { MaterialModule } from '../../material/material.module';

@NgModule({
    imports: [MaterialModule],
    declarations: [MessageComponent, QuestionComponent],
    exports: [MessageComponent, QuestionComponent]
})
export class ModalsModule{}