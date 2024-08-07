import { Component, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { InfoService } from '../services/info.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    RouterModule
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  logo = inject(InfoService)
}
