import { Injectable } from '@angular/core';

import { FateIcon } from './fate-icon.interface';

@Injectable()
export class FateIconService implements FateIcon {

  protected iconMapping = {
    'bold' : 'fas fa-bold',
    'italic' : 'fas fa-italic',
    'underline' : 'fas fa-underline',
    'strike' : 'fas fa-strikethrough',
    'subscript' :  'fas fa-subscript',
    'superscript' : 'fas fa-superscript',
    'heading1' : 'fas fa-heading',
    'heading2' : 'fas fa-heading',
    'heading3' : 'fas fa-heading',
    'heading4' : 'fas fa-heading',
    'heading5' : 'fas fa-heading',
    'heading6' : 'fas fa-heading',
    'normal' : 'fas fa-font',
    'indent' : 'fas fa-indent',
    'outdent' : 'fas fa-outdent',
    'ordered' : 'fas fa-list-ol',
    'unordered' : 'fas fa-list-ul',
    'center' : 'fas fa-align-center',
    'justify' : 'fas fa-align-justify',
    'left' : 'fas fa-align-left',
    'right' : 'fas fa-align-right',
    'undo' : 'fas fa-undo-alt',
    'redo' : 'fas fa-redo-alt',
    'clean' : 'fas fa-eraser'
  };

  public getIcon(actionName): string {
    return this.iconMapping[actionName];
  }
}