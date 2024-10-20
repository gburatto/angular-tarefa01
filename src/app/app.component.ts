import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { EscolhaCartaComponent } from './components/escolha-carta/escolha-carta.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    EscolhaCartaComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
}
