/**
 * Created by zhangmiao on 16/3/1.
 */

import {Component, View, OnDestroy} from 'angular2/core';

@Component({
  selector: 'accordion',
  template: `
        <ul class="collapsible" data-collapsible="accordion">
          <ng-content></ng-content>
        </ul>
      `,
  properties: ['onlyOneOpen']
})

export class Accordion {
  private onlyOneOpen: boolean;
  private groups: Array<AccordionGroup> = [];

  addGroup(group: AccordionGroup): void { this.groups.push(group); }

  closeOthers(openGroup): void {
    if (!this.onlyOneOpen) {
      return;
    }

    this.groups.forEach((group: AccordionGroup) => {
      if (group !== openGroup) {
        group.isOpen = false;
      }
    });
  }

  removeGroup(group: AccordionGroup): void {
    const index = this.groups.indexOf(group);
    if (index !== -1) {
      this.groups.splice(index, 1);
    }
  }
}

@Component(
    {
      selector: 'accordion-group',
      properties: ['heading', 'isOpen', 'isDisabled'],
      template: `
               <li>
                  <div class="collapsible-header" [class.text-muted]="isDisabled" (click)="toggleOpen($event)">
                    {{heading}}
                  </div>
                     <div class="collapsible-body" [ngClass] ="collapClass" >
                      <ng-content></ng-content>
                    </div>
               </li>
               `,
      styles: [`
          .expand {
            display:block;
          }
      `]
    }
)

export class AccordionGroup implements OnDestroy{
  private collapClass;
  ngOnDestroy():any {
    this.accordion.removeGroup(this);
  }
  private isDisabled: boolean;
  private _isOpen: boolean = false;
  constructor(private accordion: Accordion) {
    this.accordion.addGroup(this);
    this.collapClass = {
      expand: !this._isOpen
    };
  }

  toggleOpen(event) {
    event.preventDefault();
    if (!this.isDisabled) {
      this.isOpen = !this.isOpen;
    }
  }

  public get isOpen(): boolean { return this._isOpen; }

  public set isOpen(value: boolean) {
    this._isOpen = value;
    this.collapClass = {
      expand: this._isOpen
    };
    if (value) {
      this.accordion.closeOthers(this);
    }
  }
}


