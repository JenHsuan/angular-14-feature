import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ROUTE_TYPE, TYPE_TITLE_MAP } from '../public/route/route.domain';

@Component({
  selector: 'app-notes',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.scss']
})
export class NotesComponent {
  title = TYPE_TITLE_MAP.get(ROUTE_TYPE.NOTES);

}
