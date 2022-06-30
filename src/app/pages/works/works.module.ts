import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { CoreModule } from 'src/app/core/core.module';
import { UiKitsModule } from 'src/app/shared/ui-kits/ui-kits.module';



@NgModule({
  declarations: [],
  imports: [ CoreModule, SharedModule, UiKitsModule],
  providers: [],
})
export class worksmodule { }
