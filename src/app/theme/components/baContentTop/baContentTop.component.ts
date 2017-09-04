import { Component } from '@angular/core';

import { GlobalState } from '../../../global.state';

@Component({
  selector: 'ba-content-top',
  styleUrls: ['./baContentTop.scss'],
  templateUrl: './baContentTop.html',
})
export class BaContentTop {

  public activePageTitle: string = '';
  public activePagePaths: string[];

  constructor(private _state: GlobalState) {
    this._state.subscribe('menu.activeLink', (activeLink) => {
      if (activeLink) {
        console.info(activeLink.title);
        this.activePageTitle = activeLink.title;
        this.activePagePaths = activeLink.route.paths.slice(2, activeLink.route.paths.length - 1);
        debugger;

      }
    });
  }
}
