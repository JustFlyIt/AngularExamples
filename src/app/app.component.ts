import { Component } from '@angular/core';
import { DataElementComponent } from "./data-element/data-element.component";
import { DirectorComponent } from "./director/director.component";
import { CollectionExamplesComponent } from "./collection-examples/collection-examples.component";
import { DataElementService } from './data-element.service';

@Component({
    selector: 'app-root',
    styleUrls: ['app.component.css'],
    standalone: true,
    templateUrl: 'app.component.html',
    imports: [DataElementComponent, DirectorComponent, CollectionExamplesComponent],
    providers: [DataElementService, CollectionExamplesComponent]
})

export class AppComponent {

}
