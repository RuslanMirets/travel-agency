import { CreateCountryDto } from './dto/create-country.dto';
import { CountryService } from './country.service';
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
    destination: './uploads/images/country',
    filename: (req, file, callback) => {
      const filename = uuidv4();
      const extension = file.originalname.split('.').pop();
      callback(null, `${filename}.${extension}`);
    },
  }),
};

@Controller('country')
export class CountryController {
  constructor(private countryService: CountryService) {}

  @Post()
  @UseInterceptors(FileInterceptor('image', storage))
  create(@Body() dto: CreateCountryDto, @UploadedFile() file: Express.Multer.File) {
    return this.countryService.create(dto, file.filename);
  }

  @Get()
  findAll() {
    return this.countryService.findAll();
  }

  @Get('russia')
  findAllRussia() {
    return this.countryService.findAllRussia();
  }

  @Get('abroad')
  findAllAbroad() {
    return this.countryService.findAllAbroad();
  }

  @Get('image/:imagename')
  findProfileImage(@Param('imagename') imagename, @Res() res): Observable<Object> {
    return of(res.sendFile(join(process.cwd(), 'uploads/images/country' + imagename)));
  }
}
