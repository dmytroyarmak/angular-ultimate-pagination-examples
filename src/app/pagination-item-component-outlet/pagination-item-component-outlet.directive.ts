import { Directive, OnChanges, Input, ComponentRef, ViewContainerRef, SimpleChanges, ComponentFactoryResolver, Output, EventEmitter, ChangeDetectorRef } from '@angular/core';

@Directive({
  selector: '[ultimatePaginationItemComponentOutlet]'
})
export class PaginationItemComponentOutletDirective implements OnChanges {
  @Input() ultimatePaginationItemComponentOutlet;
  @Input() item;
  @Output() activate = new EventEmitter();

  private _componentRef: ComponentRef<any> = null;

  constructor(
    private _viewContainerRef: ViewContainerRef,
    private _componentFactoryResolver: ComponentFactoryResolver
  ) {}

  ngOnChanges(changes: SimpleChanges) {
    if ('ultimatePaginationItemComponentOutlet' in changes) {
      this._viewContainerRef.clear();
      this._componentRef = null;
      const componentFactory = this._componentFactoryResolver.resolveComponentFactory(this.ultimatePaginationItemComponentOutlet);
      this._componentRef = this._viewContainerRef.createComponent(componentFactory);
      this._componentRef.instance.activate = this.activate;
    }

    if ('item' in changes) {
      this._componentRef.instance.item = this.item;
      const changeDetectorRef = this._componentRef.injector.get(ChangeDetectorRef);
      changeDetectorRef.markForCheck();
    }
  }
}
