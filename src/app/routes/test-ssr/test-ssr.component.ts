import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { postMockList } from 'src/app/routes/test-ssr/test-ssr.component.mock';

@Component({
  selector: 'app-test-ssr',
  templateUrl: './test-ssr.component.html',
  styleUrls: ['./test-ssr.component.scss']
})
export class TestSsrComponent implements OnInit {

  postItem = postMockList[0];

  constructor(
      private _route: ActivatedRoute,
      private _title: Title,
      private _meta: Meta) {
  }

  ngOnInit() {
    const id = this._route.snapshot.params['id'];
    if (id >= 0 && id <= 2) {
      this.postItem = postMockList[id];
    }
    this._title.setTitle(`[tahooki] - ${this.postItem.title}`);
    this._meta.removeTag(`name='description'`);
    this._meta.addTag({
      name:    'description',
      content: this.postItem.content
    });
  }
}
