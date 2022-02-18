import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: '/', pathMatch: 'full' },
  {
    path: 'blocks',
    loadChildren: () =>
      import('./blocks/blocks.module').then((m) => m.BlocksModule),
  },
  {
    path: 'table',
    loadChildren: () =>
      import('./table/table.module').then((m) => m.TableModule),
  },
  {
    path: ':page/details/:id',
    loadChildren: () =>
      import('./shared/details/details.module').then((m) => m.DetailsModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
