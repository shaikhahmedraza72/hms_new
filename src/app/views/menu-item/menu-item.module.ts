import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule} from './../../shared/shared.module';
import { MenuItemComponent } from '../../views/menu-item/menu-item.component'


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    SharedModule,
    MenuItemComponent
  ]
})
export class MenuItemModule { }
