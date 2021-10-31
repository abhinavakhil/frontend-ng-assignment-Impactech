import { Component, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '@impactech/common/src/public-api';
import { TranslateService } from '@ngx-translate/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  currentUser: any;
  screenWidth: number;
  currentLanguage: string;

  @HostListener('window:resize', ['$event'])
  onResize(event?) {
    this.screenWidth = window.innerWidth;
  }

  constructor(
    private authService: AuthenticationService,
    private router: Router,
    private toastr: ToastrService,
    private translate: TranslateService
  ) {
    this.onResize();
  }

  ngOnInit(): void {
    this.currentLanguage = this.translate.getDefaultLang();
    this.getCurrentUser();
  }

  /**
   * get currently active user
   */
  getCurrentUser() {
    this.currentUser = this.authService.getCurrentUser();
  }

  /**
   * logout
   */
  logOut() {
    this.router.navigate(['/login']);
    this.authService.removeCurrentUser();
    this.toastr.success('You have been Logged Out!');
  }

  /**
   * set current language
   * @param language
   */
  setLanguage(language: string) {
    this.translate.use(language);
    this.currentLanguage = language;
    localStorage.setItem('currentLanguage', language);
  }
}
