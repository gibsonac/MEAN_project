import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PathComponent } from './path/path.component';
import { BSTComponent } from './bst/bst.component';
import { SortComponent } from './sort/sort.component';
import { SllComponent } from './sll/sll.component';
import { GreedyComponent } from './greedy/greedy.component';


const routes: Routes = [
  { path: 'index', component: HomeComponent},
  { path: 'path', component: PathComponent},
  {path: 'bst', component: BSTComponent},
  {path: 'sort', component: SortComponent},
  {path: 'sll', component: SllComponent},
  {path: 'greedy', component: GreedyComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
