import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(private translate: TranslateService) {
    this.setLanguage();
  }

  /**
   * set Language
   */
  setLanguage() {
    const language = localStorage.getItem('currentLanguage');
    if (language) {
      this.translate.setDefaultLang(language);
    } else {
      localStorage.setItem('currentLanguage', 'en');
      this.translate.setDefaultLang('en');
    }
  }
}
