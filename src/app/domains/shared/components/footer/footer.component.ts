import { Component } from '@angular/core';
import { PipePipe } from '../../pipes/pipe.pipe';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [PipePipe],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  texto = "Pedro Rafael Lazaro Nevado Examen evaluación DAW2";
}
