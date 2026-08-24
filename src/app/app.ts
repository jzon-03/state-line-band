import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  standalone: false,
  styleUrls: ['./app.css']
})
export class App {
  protected readonly title = signal('state-line-band');
  protected readonly menuOpen = signal(false);

  protected toggleMenu() {
    this.menuOpen.update(v => !v);
  }
}
