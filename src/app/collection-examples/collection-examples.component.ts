import { CommonModule, DOCUMENT } from '@angular/common';
import { Component, ElementRef, Inject, QueryList, ViewChildren } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatListModule } from '@angular/material/list';
import { MatRow, MatTableModule } from '@angular/material/table';
import { DataElementComponent } from '../data-element/data-element.component';
import { DirectorComponent } from '../director/director.component';
import { ELEMENT_DATA } from '../data';
import { DataElementService } from '../data-element.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-collection-examples',
  standalone: true,
  imports: [MatTableModule, MatFormFieldModule, FormsModule, CommonModule, MatListModule, DirectorComponent, DataElementComponent],
  templateUrl: './collection-examples.component.html',
  styleUrl: './collection-examples.component.css'
})
export class CollectionExamplesComponent {

  clickEventSubscription1: Subscription;
  clickEventSubscription2: Subscription;
  clickEventSubscription3: Subscription;
  clickEventSubscription4: Subscription;
  clickEventSubscription5: Subscription;
  clickEventSubscription6: Subscription;
  clickEventSubscription7: Subscription;
  clickEventSubscription8: Subscription;

  constructor( @Inject(DOCUMENT) private document: any, private dataElementService:DataElementService) { 
    this.clickEventSubscription1 = this.dataElementService.getScrollToTableEntryClickEvent().subscribe(result=>this.scrollToTableEntryWithIndex(result)),
    this.clickEventSubscription2 = this.dataElementService.getScrollToMatListEntryClickEvent().subscribe(result=>this.scrollToMatListEntryWithIndex(result)),
    this.clickEventSubscription3 = this.dataElementService.getScrollToNextMatListEntry().subscribe(()=>this.scrollToMextMatListEntry()),
    this.clickEventSubscription4 = this.dataElementService.getMatListHighlightFirst().subscribe(()=>this.hightLightFirst()),
    this.clickEventSubscription5 = this.dataElementService.getMatListHighlightSecond().subscribe(()=>this.hightLightSecond()),
    this.clickEventSubscription6 = this.dataElementService.getMatListHightlightThird().subscribe(()=>this.hightLightThird()),
    this.clickEventSubscription7 = this.dataElementService.getScrollToFlexBoxEntryClickEvent().subscribe(result=>this.scrollToFlexBoxEntryWithIndex(result)),
    this.clickEventSubscription8 = this.dataElementService.getCycleFlexBoxEntriesClickEvent().subscribe(()=>this.cycleFlexBoxEntries())
  }

  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = ELEMENT_DATA;
  listSelectedRowId: number = 15;
  flexboxSelectedRowId: number = 15;
  matSelectedRowId: number = 15;

  @ViewChildren(MatRow, { read: ElementRef }) rows!: QueryList<
    ElementRef<HTMLTableRowElement>
  >;

  scrollToTableEntryWithIndex(index:number): void {
    this.listSelectedRowId = index;
    this.scrollToTableEntry();
  }

  scrollToTableEntry(): void {
    console.log("number of: " + this.rows.length);
    let elem = this.rows.find((row) => row.nativeElement.id === this.listSelectedRowId.toString());
    elem?.nativeElement.scrollIntoView({ block: 'center', behavior: 'smooth' });
  }

  scrollToMextMatListEntry() {
    this.hightLightClear();
    this.matSelectedRowId++;
    this.scrollToMatListEntry();
  }

  scrollToMatListEntryWithIndex(index: number): void {
    this.matSelectedRowId = index;
    this.scrollToMatListEntry();
  }

  scrollToMatListEntry(): void {
    const element = this.document.getElementById('XX1'+this.matSelectedRowId);
    element.scrollIntoView({ inline: 'start', behavior: 'smooth' });
   }

   scrollToFlexBoxEntryWithIndex(index: number): void {
    this.flexboxSelectedRowId = index;
    this.scrollToFlexBoxEntry();
   }

   scrollToFlexBoxEntry(): void {
      const element = this.document.getElementById('XX2'+this.flexboxSelectedRowId);
    element.scrollIntoView({ inline: 'start', behavior: 'smooth' });
  }

  hightLightFirst(): void {
    let itemElement = this.document.getElementById("info1x" + this.matSelectedRowId);
    itemElement.style.color='red';
    let itemElement2 = this.document.getElementById("info2x" + this.matSelectedRowId);
    itemElement2.style.color='black';
    let itemElement3 = this.document.getElementById("info3x" + this.matSelectedRowId);
    itemElement3.style.color='black';
}

  hightLightSecond(): void {
    let itemElement = this.document.getElementById("info1x" + this.matSelectedRowId);
    itemElement.style.color='black';
    let itemElement2 = this.document.getElementById("info2x" + this.matSelectedRowId);
    itemElement2.style.color='red';
    let itemElement3 = this.document.getElementById("info3x" + this.matSelectedRowId);
    itemElement3.style.color='black';
  }

  hightLightThird(): void {
    let itemElement = this.document.getElementById("info1x" + this.matSelectedRowId);
    itemElement.style.color='black';
    let itemElement2 = this.document.getElementById("info2x" + this.matSelectedRowId);
    itemElement2.style.color='black';
    let itemElement3 = this.document.getElementById("info3x" + this.matSelectedRowId);
    itemElement3.style.color='red';
  }

  hightLightClear(): void {
    let itemElement = this.document.getElementById("info1x" + this.matSelectedRowId);
    itemElement.style.color='black';
    let itemElement2 = this.document.getElementById("info2x" + this.matSelectedRowId);
    itemElement2.style.color='black';
    let itemElement3 = this.document.getElementById("info3x" + this.matSelectedRowId);
    itemElement3.style.color='black';
  }

  // This is the sleep timer for the cycle operation
  sleep = (milliseconds: number) => new Promise((resolve) => setTimeout(resolve, milliseconds));

  async cycleFlexBoxEntries(): Promise<void> {
    for (let i =1; i<=ELEMENT_DATA.length; i++) {
      this.flexboxSelectedRowId = i;
      const element = this.document.getElementById('XX2'+ this.flexboxSelectedRowId);
      element.scrollIntoView({ inline: 'start', behavior: 'smooth' });

      let itemElement = this.document.getElementById("info1"+ i);
      itemElement.style.color='red';
      await this.sleep(1000);
      itemElement.style.color='white';
      let itemElement2 = this.document.getElementById("info2"+ i);
      itemElement2.style.color='red';
      await this.sleep(1000);
      itemElement2.style.color='white';
      let itemElement3 = this.document.getElementById("info3"+ i);
      itemElement3.style.color='red';
      await this.sleep(1000);
      itemElement.style.color='black';
      itemElement2.style.color='black';
      itemElement3.style.color='black';
    }
  }
}
