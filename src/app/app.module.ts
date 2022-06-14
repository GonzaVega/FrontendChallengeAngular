import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ConferencesComponent } from './conferences/conferences.component';
import { AboutComponent } from './about/about.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FilterPipe } from './filter.pipe';

const appRoutes: Routes = [
  {
    path: 'Conferences',
    component: ConferencesComponent,
  },

  {
    path: 'About',
    component: AboutComponent,
  },
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ConferencesComponent,
    AboutComponent,
    FilterPipe,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    ReactiveFormsModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
