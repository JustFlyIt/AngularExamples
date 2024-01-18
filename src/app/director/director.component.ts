import { Component } from '@angular/core';
import { DataElementService } from '../data-element.service';

import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatListModule } from '@angular/material/list';
import { MatTableModule } from '@angular/material/table';

@Component({
  selector: 'app-director',
  standalone: true,
  imports: [MatTableModule, MatFormFieldModule, FormsModule, MatListModule],
  templateUrl: './director.component.html',
  styleUrl: './director.component.css'
})

  export class DirectorComponent {

  constructor(private dataElementService: DataElementService) {};

  ngOnInit(): void {
  }

  listSelectedRowId: number = 20;

  scrollToTableEntry() {
    this.dataElementService.sendScrollToTableEntryClickEvent(this.listSelectedRowId);
  }

  matSelectedRowId: number = 21;

  scrollToMatListEntry() {
    this.dataElementService.sendScrollToMatListEntryClickEvent(this.matSelectedRowId);
  }

  scrollToNextMatListEntry() {
    this.dataElementService.sendScrollToNextMatListEntry();
  }

  highlightMatListFirst() {
    this.dataElementService.sendHighlightMatListFirst();
  }

  highlightMatListSecond() {
    this.dataElementService.sendHighlightMatListSecond();

  }

  hightlightMatListThird() {
    this.dataElementService.sendHightlightMatListThird();
  }

  flexboxSelectedRowId: number = 22;

  scrollToFlexBoxEntry() {
    this.dataElementService.sendScrollToFlexBoxEntryClickEvent(this.flexboxSelectedRowId);
  }

  cycleFlexBoxEntries() {
    this.dataElementService.sendCycleFlexBoxEntriesClickEvent();
  }
}
