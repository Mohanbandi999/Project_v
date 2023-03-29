import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeadersInterceptor } from './headers.interceptor';
import { HttpComponent } from './http/http.component';
import { HttpService } from './shared/http.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule, MAT_FORM_FIELD_DEFAULT_OPTIONS} from '@angular/material/form-field';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import {MatCardModule} from '@angular/material/card';
import { SubjectComponent } from './subject/subject.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import { PipesComponent } from './pipes/pipes.component';
import {MatTableModule} from '@angular/material/table';
import { AgePipe } from './pipesall/age.pipe';



@NgModule({
  declarations: [
    AppComponent,
    HttpComponent,
    SubjectComponent,
    PipesComponent,
    AgePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatButtonModule,
    MatFormFieldModule,
    MatSlideToggleModule,
    MatCardModule,
    MatToolbarModule,
    MatTableModule 
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: HeadersInterceptor,multi: true}, HttpService,
    
  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
