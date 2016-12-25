import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { AddMoviePage } from '../pages/add-movie/add-movie';
import { CreateMoviePage } from '../pages/create-movie/create-movie';
import { MovieInfoPage } from '../pages/movie-info/movie-info';

@NgModule({
    declarations: [
        MyApp,
        HomePage,
        AddMoviePage,
        CreateMoviePage,
        MovieInfoPage
    ],
    imports: [
        IonicModule.forRoot(MyApp)
    ],
    bootstrap: [IonicApp],
    entryComponents: [
        MyApp,
        HomePage,
        AddMoviePage,
        CreateMoviePage,
        MovieInfoPage
    ],
    providers: [{ provide: ErrorHandler, useClass: IonicErrorHandler }]
})
export class AppModule { }
