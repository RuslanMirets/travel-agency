import { UpdateHotelDto } from './dto/update-hotel.dto';
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Res,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { Complex } from 'src/core/decorators/complex.decorator';
import { CreateHotelDto } from './dto/create-hotel.dto';
import { HotelService } from './hotel.service';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { join } from 'path';
import { Observable, of } from 'rxjs';
import { v4 as uuidv4 } from 'uuid';

export const storage = {
  storage: diskStorage({
    destination: './uploads/images/hotel',
    filename: (req, file, callback) => {
      const filename = uuidv4();
      const extension = file.originalname.split('.').pop();
      callback(null, `${filename}.${extension}`);
    },
  }),
};

@Controller('hotel')
export class HotelController {
  constructor(private hotelService: HotelService) {}

  @Post()
  @UseInterceptors(FileInterceptor('image', storage))
  create(
    @Body() dto: CreateHotelDto,
    @Complex() complexId: number,
    @UploadedFile() file: Express.Multer.File,
  ) {
    return this.hotelService.create(dto, complexId, file.filename);
  }

  @Get()
  findAll() {
    return this.hotelService.findAll();
  }

  @Get('image/:imagename')
  findProfileImage(@Param('imagename') imagename, @Res() res): Observable<Object> {
    return of(res.sendFile(join(process.cwd(), 'uploads/images/hotel/' + imagename)));
  }

  @Get(':id')
  findOneById(@Param('id') hotelId: number) {
    return this.hotelService.findOneById(hotelId);
  }

  // Update all
  // @Patch(':id')
  // @UseInterceptors(FileInterceptor('image', storage))
  // update(
  //   @Body() dto: UpdateHotelDto,
  //   @Param('id') hotelId: number,
  //   @Complex() complexId: number,
  //   @UploadedFile() file: Express.Multer.File,
  // ) {
  //   return this.hotelService.update(dto, hotelId, complexId, file.filename);
  // }

  @Patch('name/:id')
  updateName(@Body() dto: UpdateHotelDto, @Param('id') hotelId: number) {
    return this.hotelService.updateName(dto, hotelId);
  }

  @Patch('location/:id')
  updateLocation(@Body() dto: UpdateHotelDto, @Param('id') hotelId: number) {
    return this.hotelService.updateLocation(dto, hotelId);
  }

  @Patch('complex/:id')
  updateComplex(@Complex() complexId: number, @Param('id') hotelId: number) {
    return this.hotelService.updateComplex(complexId, hotelId);
  }

  @Patch('image/:id')
  @UseInterceptors(FileInterceptor('image', storage))
  updateImage(@UploadedFile() file: Express.Multer.File, @Param('id') hotelId: number) {
    return this.hotelService.updateImage(file.filename, hotelId);
  }

  @Delete(':id')
  delete(@Param('id') complexId: number) {
    return this.hotelService.delete(complexId);
  }

  @Delete()
  deleteAll() {
    return this.hotelService.deleteAll();
  }
}
