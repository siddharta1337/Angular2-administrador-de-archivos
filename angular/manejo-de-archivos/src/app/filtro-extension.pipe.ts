import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtroExtension'
})
export class FiltroExtensionPipe implements PipeTransform {

  transform(value: any, args?: any): any {

    let iconoClase: string;

    switch (value) {
      case 'dir':
        iconoClase = 'fa-folder-open-o';
        break;
      case 'zip':
        iconoClase = 'fa-file-archive-o';
        break;
      case 'jpg':
        iconoClase = 'fa-file-image-o';
      case 'gif':
        iconoClase = 'fa-file-image-o';
      case 'png':
        iconoClase = 'fa-file-image-o';
        break;
      case "pptx":
        iconoClase = 'fa-file-powerpoint-o';
        break
      default:
        iconoClase = 'fa-file-text-o';
    }

    return iconoClase;
  }

}
