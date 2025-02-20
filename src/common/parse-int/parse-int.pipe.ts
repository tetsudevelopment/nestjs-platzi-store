import {
  ArgumentMetadata,
  BadRequestException,
  Injectable,
  PipeTransform,
} from '@nestjs/common';

@Injectable()
export class ParseIntPipe implements PipeTransform {
  transform(value: string, metadata: ArgumentMetadata) {
    const valueString = Number(value);
    if (isNaN(valueString)) {
      throw new BadRequestException(`${value} is not number`);
    }
    return valueString;
  }
}
