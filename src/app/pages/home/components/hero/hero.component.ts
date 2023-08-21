import { Component } from "@angular/core";

@Component({
  selector: "app-hero",
  template: `
    <div class="light-gradient">
      <div class="max-w-[1200px] w-full mx-auto py-20">
        <div class="flex items-center">
          <div class="w-[50%] flex flex-col gap-[18px]">
            <p class="text-[46px] font-semibold leading-tight">
              Access a library of free design resources
            </p>
            <p class="text-[20px] text-[#1d1d1d] leading-tight">
              The best resources and books from around the web, collected and
              curated for your reading.
            </p>
            <button class="black-button">Get Access Now</button>
          </div>
          <div class="w-[50%] flex justify-center">
            <img src="assets/images/heroImage.svg" class="h-[320px]" />
          </div>
        </div>
      </div>
    </div>
  `,
})
export class HeroComponent {}
