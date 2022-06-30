import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServiceComponent } from './components/service/service.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { BannerComponent } from './components/banner/banner.component';
import { PoryectComponent } from './components/poryect/poryect.component';
import { MaterialModule } from './material/material.module';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { MarquesinaComponent } from './components/marquesina/marquesina.component';
import { SliderClientesComponent } from './components/slider-clientes/slider-clientes.component';
import { ClientesGridComponent } from './components/clientes-grid/clientes-grid.component';
import { ClientsComponent } from './components/clients/clients.component';
import { SingularClientComponent } from './components/singular-client/singular-client.component';
import { ClientMobileComponent } from './components/client-mobile/client-mobile.component';
import { UiKitsModule } from './ui-kits/ui-kits.module';



@NgModule({
  declarations: [
    ServiceComponent,
    AboutComponent,
    ContactComponent,
    BannerComponent,
    PoryectComponent,
    MarquesinaComponent,
    SliderClientesComponent,
    ClientesGridComponent,
    ClientsComponent,
    SingularClientComponent,
    ClientMobileComponent,
    


  ],
  imports: [
    CommonModule,
    MaterialModule,
    SlickCarouselModule,
    CarouselModule

    ],
  exports: [
    ServiceComponent,
    AboutComponent,
    ContactComponent,
    BannerComponent,
    PoryectComponent,
    MarquesinaComponent,
    UiKitsModule
  ],
  schemas: [
     CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class SharedModule {}
