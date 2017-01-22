import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { MovieInfoPage } from '../movie-info/movie-info';
import { Movies } from '../../providers/movies';

@Component({
  selector: 'page-watched',
  templateUrl: 'watched.html'
})
export class WatchedPage {
  public genreFilter: string = '';

  constructor(public navCtrl: NavController, public movies: Movies) {
    
  }

  getGenres(): string[] {
    let genres: string[] = [];
    for (let i = 0; i < this.movies.watched.length; i++) {
      if (!this.arrayContains(genres, this.movies.watched[i].Genre)) {
        genres.push(this.movies.watched[i].Genre);
      }
    }
    if (this.genreFilter && this.genreFilter.trim() != '') {
      genres = genres.filter((genre) => {
        return genre.toLowerCase().indexOf(this.genreFilter.toLowerCase()) > -1;
      });
    }
    return genres.sort();
  }

  arrayContains(array: any[], element: any): boolean {
    for (let i = 0; i < array.length; i++) {
      if (array[i] == element) {
        return true;
      }
    }
    return false;
  }

  getMovies(genre: string): any[] {
    let movies = this.movies.watched.filter((movie) => {
      return movie.Genre == genre;
    });
    return movies.sort();
  }

  movieInfo(movie: any): void {
    this.navCtrl.push(MovieInfoPage, {
      movie: movie
    });
  }

  removeMovie(movie: any): void {
    this.movies.removeWatched(movie);
  }
}