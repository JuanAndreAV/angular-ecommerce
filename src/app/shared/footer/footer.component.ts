import { Component, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { InfoService } from '../services/info.service';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [
    RouterModule
  ],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
infoComercio = inject(InfoService)
}
