import { Component, Input, OnInit } from '@angular/core';
import { lastValueFrom, take } from 'rxjs';
import { Character } from '../../models/character.model';
import { CharacterService } from '../../services/character/character.service';


@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.scss']
})
export class CharacterComponent implements OnInit {
  @Input() characterId!: number;
  @Input() characterName!: string;
  character: Character | undefined;
  constructor(private characterService: CharacterService) { }

 async ngOnInit(): Promise<void> {
    this.characterService.getCharacterById(this.characterId).subscribe({
      next: (res)=> {
        res?.data?.results && res.data.results.length > 0 
        ? this.character = res.data.results[0] 
        : null;
      },
      error: (err) => {
        // TODO Manage Error
      }
    })
  }

}
