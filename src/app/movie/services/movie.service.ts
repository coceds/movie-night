import { Injectable } from '@angular/core';
import { movies } from '../models/movie.model';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor() { }

  getMovies() {
    return of(movies);
  }

  movie(id: number) {
    return of(
      movies.find(movie =>  +movie.id === +id)
    )
  }
}
