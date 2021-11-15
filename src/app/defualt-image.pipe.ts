import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'defualtImage',
})
export class DefualtImagePipe implements PipeTransform {
  transform(image: string, placeholder: string): string {
    return image ? image : placeholder;
  }
}
