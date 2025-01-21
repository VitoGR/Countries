import { AboutPagesComponent } from './pages/aboutPages/aboutPages.component';
import { CommonModule } from '@angular/common';
import { ContactPageComponent } from './pages/contactPage/contactPage.component';
import { HomePageComponent } from './pages/homePage/homePage.component';
import { LoadingSpinnerComponent } from './components/loading-spinner/loading-spinner.component';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SearchBoxComponent } from './components/search-box/search-box.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';



@NgModule({
  declarations:
  [
    AboutPagesComponent,
    ContactPageComponent,
    HomePageComponent,
    LoadingSpinnerComponent,
    SearchBoxComponent,
    SidebarComponent,
  ],
  imports: [CommonModule, RouterModule],
  exports: [HomePageComponent, AboutPagesComponent, SidebarComponent, ContactPageComponent, SearchBoxComponent,LoadingSpinnerComponent]
})
export class SharedModule { }
