import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./pages/home/home.component";
import { ResourcesPageComponent } from "./pages/resources/resources-page.component";

const routes: Routes = [
  {
    path: "home",
    component: HomeComponent,
  },
  {
    path:'resources',
    component:ResourcesPageComponent
  },
  { path: "", redirectTo: "home", pathMatch: "full" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
