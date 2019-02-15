import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NotFoundPageComponent } from 'src/app/shared-components/not-found-page/not-found-page.component';

const routes: Routes = [{
  path: '',
  redirectTo: '/building-blocks',
  pathMatch: 'full'
}, {
  path: 'building-blocks',
  loadChildren: './building-blocks/building-blocks.module#BuildingBlocksModule'
}, {
  path: 'quering-the-ui',
  loadChildren: './quering-the-ui/quering-the-ui.module#QueringTheUiModule'
}, {
  path: 'manipulating-the-ui',
  loadChildren: './manipulating-the-ui/manipulating-the-ui.module#ManipulatingTheUiModule'
},{
  path: 'sandbox',
  loadChildren: './sandbox/sandbox.module#SandboxModule'
}, {
  path: '**',
  component: NotFoundPageComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
