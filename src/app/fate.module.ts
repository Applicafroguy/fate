import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { FateUiComponent } from './fate-ui/fate-ui.component';
import { FateInputComponent } from './fate-input/fate-input.component';
import { FateBootstrapComponent } from './fate-bootstrap/fate-bootstrap.component';

import { FateControllerService } from './fate-controller.service';
import { FateHtmlParserService } from './fate-html-parser.service';
import { FateIconService } from './fate-icon.service';
import { FateParserService } from './fate-parser.service';

export { FateParser } from './fate-parser.interface';
export { FateIcon } from './fate-icon.interface';
export { FateUiComponent } from './fate-ui/fate-ui.component';
export { FateInputComponent } from './fate-input/fate-input.component';
export { FateIconService } from './fate-icon.service';
export { FateParserService } from './fate-parser.service';
export { FateTree } from './fate-tree';
export { FateType } from './fate-type.enum';
export { FateStyle } from './fate-style.enum';

@NgModule({
  declarations: [
    FateInputComponent,
    FateUiComponent,
    FateBootstrapComponent,
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    FateUiComponent,
    FateInputComponent,
    FateBootstrapComponent,
  ],
  providers: [
    FateControllerService,
    FateHtmlParserService,
    FateIconService,
    FateParserService
  ]
})
export class FateModule { }