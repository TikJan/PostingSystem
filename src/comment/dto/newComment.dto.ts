import { ApiProperty } from '@nestjs/swagger';

export class NewCommentDto {
  @ApiProperty({
    required: true,
  })
  readonly username: string;

  @ApiProperty({
    required: true,
  })
  readonly description: string;

  @ApiProperty({
    required: true,
  })
  readonly post: number;
}
