import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ROUTE_TYPE, TYPE_TITLE_MAP } from '../public/route/route.domain';
import { escapeHtml } from '../public/utils/utils';

@Component({
  selector: 'app-documents',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './documents.component.html',
  styleUrls: ['./documents.component.scss']
})
export default class DocumentsComponent {
  title = TYPE_TITLE_MAP.get(ROUTE_TYPE.DOCUMENTS);
  escapeHtml = escapeHtml;
}
