import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductCardComponent } from './product-card/product-card.component';
import { ProductFormComponent } from './product-form/product-form.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDashboardComponent } from './product-dashboard/product-dashboard.component';
import { LibSharedModule } from 'lib-shared';
import { LibCoreModule } from 'lib-core';
import { HighlightDirective } from './directives/highlight.directive';
import { NgxUnlessDirective } from './directives/ngx-unless.directive';
import { ProductRoutingModule } from './product-routing.module';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductService } from './product.service';

@NgModule({
  declarations: [
    ProductCardComponent,
    ProductFormComponent,
    ProductListComponent,
    ProductDashboardComponent,
    HighlightDirective,
    NgxUnlessDirective,
    ProductDetailComponent
  ],
  imports: [
    CommonModule,
    LibSharedModule,
    LibCoreModule,
    ProductRoutingModule
  ],
  exports: [
    ProductDashboardComponent
  ],
  providers: [ProductService]
})
export class ProductModule { }
