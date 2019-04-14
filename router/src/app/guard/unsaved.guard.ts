import {CanDeactivate} from '@angular/router';
import {ProductComponent} from '../product/product.component';


export class UnsavedGuard implements CanDeactivate<ProductComponent> {
  canDeactivate(component: ProductComponent) {
    return window.confirm("not saved, leave?");
  }
}
