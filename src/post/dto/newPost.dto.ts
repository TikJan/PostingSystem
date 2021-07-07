import { ApiProperty } from '@nestjs/swagger';

export class NewPostDto {
  @ApiProperty({
    required: true,
  })
  readonly name: string;

  @ApiProperty({
    required: true,
  })
  readonly description: string;

  @ApiProperty({
    required: true,
  })
  readonly image: string;

  @ApiProperty({
    required: true,
  })
  readonly userName: string;
}
