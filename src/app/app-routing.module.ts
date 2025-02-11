import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductMenuComponent } from './product-menu/product-menu.component';
import { ProductSearchComponent } from './product-search/product-search.component';

const routes: Routes = [{path:"", component:ProductMenuComponent},
  {path:"home",component:ProductMenuComponent},
  {path:"search",component:ProductSearchComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
