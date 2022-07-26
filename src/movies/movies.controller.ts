import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { Movie } from './entities/Movie.entity';
import { MoviesService } from './movies.service';

@Controller('movies')
export class MoviesController {
  constructor(private readonly MoviesService: MoviesService) {}
  @Get()
  getAll(): Movie[] {
    return this.MoviesService.getAll();
  }

  @Get('search')
  search(@Query('year') searchingYear: string) {
    return `we are searching for a movie made: ${searchingYear}`;
  }

  @Get('/:id')
  getOne(@Param('id') id: string): Movie {
    return this.MoviesService.getOne(id);
  }

  @Post()
  create(@Body() movieData) {
    return this.MoviesService.create(movieData);
  }

  @Delete('/:id')
  remove(@Param('id') id: string) {
    return this.MoviesService.deleteOne(id);
  }

  @Patch('/:id')
  patch(@Param('id') id: string, @Body() updateMovie) {
    return {
      updateMovie: id,
      ...updateMovie,
    };
  }
}
