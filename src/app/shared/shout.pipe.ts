import { forEach } from '@angular/router/src/utils/collection';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'shout'
})
export class ShoutPipe implements PipeTransform {

  transform(value: any, args?: any): any {

    const list: string[] = ['America is the best!!!', 'It is Mexicos fault!', 'Lets built a wall!'];

    value += ' ';

    value += list[Math.floor(Math.random() * list.length)];

    return value;
  }

}
