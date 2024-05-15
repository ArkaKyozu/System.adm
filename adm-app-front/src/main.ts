import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { AngularFireModule } from '@angular/fire/compat';

import { FirebaseAppModule } from '@angular/fire/app';



bootstrapApplication(AppComponent, appConfig,)
  .catch((err) => console.error(err));
