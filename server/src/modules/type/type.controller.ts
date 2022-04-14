import { CreateTypeDto } from './dto/create-type.dto';
import { TypeService } from './type.service';
import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Res,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { join } from 'path';
import { Observable, of } from 'rxjs';
import { v4 as uuidv4 } from 'uuid';

export const storage = {
  storage: diskStorage({
    destination: './uploads/images/type',
    filename: (req, file, callback) => {
      const filename = uuidv4();
      const extension = file.originalname.split('.').pop();
      callback(null, `${filename}.${extension}`);
    },
  }),
};

@Controller('type')
export class TypeController {
  constructor(private typeService: TypeService) {}

  @Post()
  @UseInterceptors(FileInterceptor('image', storage))
  create(@Body() dto: CreateTypeDto, @UploadedFile() file: Express.Multer.File) {
    return this.typeService.create(dto, file.filename);
  }

  @Get()
  findAll() {
    return this.typeService.findAll();
  }

  @Get('image/:imagename')
  findProfileImage(@Param('imagename') imagename, @Res() res): Observable<Object> {
    return of(res.sendFile(join(process.cwd(), 'uploads/images/type' + imagename)));
  }

  @Get(':slug')
  findOneBySlug(@Param('slug') slug: string) {
    return this.typeService.findOneBySlug(slug);
  }
}
