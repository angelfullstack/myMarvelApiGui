import { Component, Input, OnInit } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { CharacterService } from '../../services/character/character.service';


@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.scss']
})
export class CharacterComponent implements OnInit {
  @Input() characterId!: number;
  @Input() characterName!: string;

  constructor(private characterService: CharacterService) { }

 async ngOnInit(): Promise<void> {

    // this.characterService.getCharacterById(123).subscribe({
    //   next: (val) => console.log(val),
    //   error: (err) => console.log(err)
    // }
    // );

    // this.characterService.getCharacters().subscribe({
    //   next: (val) => console.log(val),
    //   error: (err) => console.log(err)
    // }
    // );

    const character = await lastValueFrom(this.characterService.getCharacterById(this.characterId));
    console.log(character)

    this.characterService.getCharactersByName(this.characterName).subscribe({
      next: (val) => console.log(val),
      error: (err) => console.log(err)
    }
    );


    // this.characterService.getCharacters().subscribe({
    // next: () => null,
    // error: () => null}
    // )
  }

}
