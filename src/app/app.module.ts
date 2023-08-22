import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HomeComponent } from "./pages/home/home.component";
import { NavbarComponent } from "./components/navbar/navbar.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { ResourcesPageComponent } from "./pages/resources/resources-page.component";
import { HeroComponent } from "./pages/home/components/hero/hero.component";
import { ResourcesComponent } from "./components/resources/resources.component";
import { GetResource } from "./components/get-resource/get-resource.component";
import { FooterComponent } from "./components/footer/footer.component";
import { FullResourcePageComponent } from './pages/full-resource-page/full-resource-page.component';
import { GetResourcesLightComponent } from './pages/full-resource-page/components/get-resources-light/get-resources-light.component';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    ResourcesPageComponent,
    HeroComponent,
    ResourcesComponent,
    GetResource,
    FooterComponent,
    FullResourcePageComponent,
    GetResourcesLightComponent,
    ContactUsComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, BrowserAnimationsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
