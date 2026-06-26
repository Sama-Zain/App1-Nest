import {
  PipeTransform,
  Injectable,
  ArgumentMetadata,
  BadRequestException,
} from '@nestjs/common';
@Injectable()
export class SanitizeUsernamePipe implements PipeTransform {
  transform(value: any, metadata: ArgumentMetadata) {
    console.log(metadata);
    if (!value || typeof value !== 'string')
      throw new BadRequestException(
        'UserName must be a valid non-empty string',
      );
    return value.toLowerCase();
  }
}
