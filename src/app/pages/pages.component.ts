import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, NavigationEnd, PRIMARY_OUTLET, Router} from '@angular/router';
import {BreadcrumbComponent} from '../shared/breadcrumb/breadcrumb.component';
import {IBreadcrumb} from '../shared/breadcrumb/ibreadcrumb';

@Component({
  selector:'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.css']
})
export class PagesComponent implements OnInit {
  private pageFileName;
  htmlStr  = '<strong>The Tortoise</strong> &amp; the Hare';


  constructor(private router: Router,
              private route: ActivatedRoute
  ) {
  }

  ngOnInit() {
    this.pageFileName = './' + this.route.snapshot.data.page + '.html';
  }


}
