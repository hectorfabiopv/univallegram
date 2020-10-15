import { Routes } from '@angular/router';
//import { SearchComponent } from './components/search/search.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { HomeComponent } from './pages/home/home.component';
import { YoutubehomeComponent } from './pages/youtubehome/youtubehome.component';
import { UploadComponent } from './shared/upload/upload.component';

export const ROUTES: Routes = [
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'home', component: HomeComponent },
    { path: 'youtubehome', component: YoutubehomeComponent },
    //{ path: 'upload', component: UploadComponent },
    //{ path: 'search', component: SearchComponent },  
    //{ path: '', pathMatch: 'full', redirectTo:'login' },
    //{ path: '**', pathMatch: 'full', redirectTo:'login' }
];