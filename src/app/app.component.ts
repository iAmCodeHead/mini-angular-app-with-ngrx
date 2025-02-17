import {AsyncPipe} from '@angular/common';
import {Component} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {Observable, of} from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AsyncPipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'rxjs-course';
  moreNumbers$: Observable<Number[]>;

  constructor() {
    const numbers$ = of([1, 2, 3, 4, 5]);

    this.moreNumbers$ = of([1, 2, 3, 4, 5]);

    numbers$.subscribe();

    this.moreNumbers$.subscribe();
  }
}
