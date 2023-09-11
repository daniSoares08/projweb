import { Component } from '@angular/core';
import { Animal } from 'src/app/Animal';
import { ListService } from 'src/app/services/list.service';
@Component({
  selector: 'app-list-render',
  templateUrl: './list-render.component.html',
  styleUrls: ['./list-render.component.css']
})
export class ListRenderComponent {
  animais: Animal[] = []

  animalDetails = ''

  constructor(private listService: ListService) {
    this.getAnimals()
  }

  showAge(animal: Animal): void {
    this.animalDetails = `O pet ${animal.name} tem ${animal.age} anos`
  }

  removeAnimal(animal: Animal) {
    console.log("Removendo animal");
    this.animais = this.listService.remove(this.animais, animal);
  }

  getAnimals(): void {
    this.listService.getAll().subscribe((animals) => (this.animais = animals));
  }

}
