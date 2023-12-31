import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./pages/home/home.component";
import { ResourcesPageComponent } from "./pages/resources/resources-page.component";
import { FullResourcePageComponent } from "./pages/full-resource-page/full-resource-page.component";
import { ContactUsComponent } from "./pages/contact-us/contact-us.component";

const routes: Routes = [
  {
    path: "home",
    component: HomeComponent,
  },
  {
    path: "resources",
    component: ResourcesPageComponent,
  },
  {
    path: "resources/:id",
    component: FullResourcePageComponent,
  },
  {
    path: "contact-us",
    component: ContactUsComponent,
  },
  { path: "", redirectTo: "home", pathMatch: "full" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
