import { Component, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { InfoService } from '../../shared/services/info.service';

@Component({
  selector: 'app-nosotros',
  standalone: true,
  imports: [
    RouterModule
  ],
  templateUrl: './nosotros.component.html',
  styleUrl: './nosotros.component.css'
})
export class NosotrosComponent {
 infoComercio = inject(InfoService)
}
