import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  template: `
    <app-navbar></app-navbar>
    <div class="min-h-[74vh]">
      <router-outlet></router-outlet>
    </div>
    <app-footer />
  `,
  styles: [],
})
export class AppComponent {
  title = "Memberbase";
}
