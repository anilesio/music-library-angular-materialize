import { SingleDataComponent } from './single-data/single-data.component';
import { PlayHomeComponent } from './home/play-home/play-home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: '', component: PlayHomeComponent, pathMatch: 'full'},
  {path: 'item/:id', component: SingleDataComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
