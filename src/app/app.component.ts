import { Component, OnInit } from '@angular/core';
import { SwUpdate } from '@angular/service-worker';
import { NavigationStart, Router } from '@angular/router';

@Component({
  selector:    'app-root',
  templateUrl: './app.component.html',
  styleUrls:   ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'tahooki-angular';

  constructor(
      private _router: Router,
      private _swUpdate: SwUpdate) {
  }

  ngOnInit() {
    this._router.events.subscribe((event) => {
      if (event instanceof NavigationStart) {
        console.log('router event', event);
      }
    });

    this._checkUpdate();
  }

  private _checkUpdate() {
    if (this._swUpdate.isEnabled) {
      this._router.events.subscribe((event) => {
        if (event instanceof NavigationStart) {
          console.log('router event', event);
          this._swUpdate.checkForUpdate();
        }
      });

      this._swUpdate.available.subscribe(() => {
        if (confirm('사이트의 버전이 업데이트 되었습니다. 새로고침 하시겠습니까?')) {
          window.location.reload();
        }
      });
    }
  }
}
