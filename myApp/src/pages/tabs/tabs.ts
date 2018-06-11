import { Component } from '@angular/core';

import { GalleryPage } from '../gallery/gallery';
import { ShotPage } from '../shot/shot';
import { TrendingPage } from '../trending/trending';
import { QuickLinkPage } from '../quicklink/quicklink';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = TrendingPage;
  tab2Root = GalleryPage;
  tab3Root = ShotPage;
  tab4Root = QuickLinkPage;

  constructor() {

  }
}
