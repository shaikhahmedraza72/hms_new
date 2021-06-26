import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule} from './../../shared/shared.module';
import { MenuItemComponent } from '../../views/menu-item/menu-item.component'


@NgModule({
  declarations: [MenuItemComponent],
  imports: [
    CommonModule,
    SharedModule,
  ]
})
export class MenuItemModule { }
