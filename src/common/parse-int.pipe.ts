import {
  ArgumentMetadata,
  BadRequestException,
  Injectable,
  PipeTransform
} from '@nestjs/common';

@Injectable()
export class ParseIntPipe implements PipeTransform {
  transform(value: string, metadata: ArgumentMetadata) {
    const val = parseInt(value, 10)
    if (isNaN(val)) {
      throw new BadRequestException(`The value ${value} no is a integer`)
    }
    return val;
  }
}
