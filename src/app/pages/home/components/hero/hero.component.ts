import { Component } from "@angular/core";

@Component({
  selector: "app-hero",
  template: `
    <div class="light-gradient">
      <div class="max-w-[1200px] px-5 w-full mx-auto py-20">
        <div class="flex flex-col-reverse md:flex-row md:items-center">
          <div class="md:w-[50%] flex flex-col gap-[18px]">
            <p class="text-[46px] font-semibold leading-tight max-w-[510px]">
              Access a library of free design resources
            </p>
            <p class="text-[20px] text-[#1d1d1d] leading-tight max-w-[600px] ">
              The best resources and books from around the web, collected and
              curated for your reading.
            </p>
            <button class="black-button w-fit">Get Access Now</button>
          </div>
          <div class="md:w-[50%] flex md:justify-center">
            <img
              src="assets/images/heroImage.svg"
              class="h-[320px] mix-blend-multiply"
            />
          </div>
        </div>
      </div>
    </div>
  `,
})
export class HeroComponent {}
