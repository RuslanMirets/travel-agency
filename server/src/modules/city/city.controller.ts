import { CreateCityDto } from './dto/create-city.dto';
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
import { CityService } from './city.service';
import { Country } from 'src/core/decorators/country.decorator';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { join } from 'path';
import { Observable, of } from 'rxjs';
import { v4 as uuidv4 } from 'uuid';

export const storage = {
  storage: diskStorage({
    destination: './uploads/images/city',
    filename: (req, file, callback) => {
      const filename = uuidv4();
      const extension = file.originalname.split('.').pop();
      callback(null, `${filename}.${extension}`);
    },
  }),
};

@Controller('city')
export class CityController {
  constructor(private cityService: CityService) {}

  @Post()
  @UseInterceptors(FileInterceptor('image', storage))
  create(
    @Body() dto: CreateCityDto,
    @Country() countryId: number,
    @UploadedFile() file: Express.Multer.File,
  ) {
    return this.cityService.create(dto, countryId, file.filename);
  }

  @Get()
  findAll() {
    return this.cityService.findAll();
  }

  @Get('russia')
  findAllRussia() {
    return this.cityService.findAllRussia();
  }

  @Get('image/:imagename')
  findProfileImage(@Param('imagename') imagename, @Res() res): Observable<Object> {
    return of(res.sendFile(join(process.cwd(), 'uploads/images/city/' + imagename)));
  }
}
