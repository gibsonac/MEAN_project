import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpService } from './http.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { PathComponent } from './path/path.component';
import { BSTComponent } from './bst/bst.component';
import { SortComponent } from './sort/sort.component';
import { SllComponent } from './sll/sll.component';
import { KeepHtmlPipe } from './pipes/keep-html.pipe';
import { GreedyComponent } from './greedy/greedy.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PathComponent,
    BSTComponent,
    SortComponent,
    SllComponent,
    KeepHtmlPipe,
    GreedyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
