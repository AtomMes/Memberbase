import { Component } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Resource } from "src/app/models/resource.model";

@Component({
  selector: "app-full-resource-page",
  templateUrl: "./full-resource-page.component.html",
})
export class FullResourcePageComponent {
  resources: Resource[] = [
    {
      id: 1,
      image: "assets/images/ebook1.svg",
      author: "Nikolai Brian",
      title: "Grids $ Alignment",
      description: `Expedita laborum suscipit sequi et nobis voluptas fuga placeat.
      Omnis est ratione.
      Repellendus recusandae a.
      Nulla quia cum aliquam dolores beatae tempore harum pariatur.
      Velit amet officiis.`,
    },
    {
      id: 2,
      image: "assets/images/ebook2.svg",
      author: "Maxwell Milton",
      title: "Remote Work for Design Teams",
      description: `Repudiandae asperiores excepturi repellat minus id et.
      Saepe molestiae accusantium fugit et aut.
      Reicie`,
    },
    {
      id: 3,
      image: "assets/images/ebook3.svg",
      author: "Franko Realguy",
      title: "Design Systems in Product Teams",
      description: `Ut libero molestias excepturi veniam et dicta assumenda tenetur voluptatem.
      Qui dolor officiis eum.
      Doloribus odit qui quia blanditiis omnis asperiores perspiciatis qui deleniti.`,
    },
    {
      id: 4,
      image: "assets/images/ebook4.svg",
      author: "Nikolai Brian",
      title: "All in One Color Handbook",
      description: `Vel esse et temporibus inventore alias assumenda.
      Repellat sit accusamus id sed est animi vel.
      Odit non ut reprehenderit consequatur sit aliquam.
      Aut aliquid consequatur`,
    },
    {
      id: 5,
      image: "assets/images/ebook5.svg",
      author: "Tim Tommons",
      title: "Digital Wellbeing and Support",
      description: `Dignissimos dolores enim ipsum quia occaecati voluptas aut delectus.
      Reiciendis recusandae minima quod qui.
      Eum dicta et nihil ad et nam.
      Vitae et itaque porro.
      Ipsa distinctio laboriosam veritatis.
      Minus quia eos ut.`,
    },
  ];
  constructor(private route: ActivatedRoute) {}
  selectedResource: Resource | undefined;

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      const resourceId = +params["id"]; 
      this.selectedResource = this.resources.find(
        (resource) => resource.id === resourceId
      );
    });
  }
}
