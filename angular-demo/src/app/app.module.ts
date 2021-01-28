import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { TestComponentComponent } from './test-component/test-component.component';
import { ProductListComponent } from './product-list/product-list.component';
import { FormsModule } from '@angular/forms';
import { IfNullOrEmptyPipe } from './pipes/if-null-or-empty.pipe';
import { CustomDatePipe } from './pipes/custom-date.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HelloComponent,
    TestComponentComponent,
    ProductListComponent,
    IfNullOrEmptyPipe,
    CustomDatePipe,
  ],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [ProductListComponent],
})
export class AppModule {}
