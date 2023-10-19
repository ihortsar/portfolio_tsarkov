import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { HomeComponent } from './home/home.component';
import { MenuMobileComponent } from './menu-mobile/menu-mobile.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
import { ImprintComponent } from './imprint/imprint.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'privacy_policy', component: PrivacyPolicyComponent },
  { path: 'imprint', component: ImprintComponent },


];


@NgModule({
  imports: [
    RouterModule.forRoot(routes, { anchorScrolling: 'enabled', scrollOffset: [0, 150] }),
    ScrollingModule,],
  exports: [RouterModule]

})
export class AppRoutingModule { }
