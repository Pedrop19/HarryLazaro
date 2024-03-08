import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './domains/shared/components/header/header.component';
import { FooterComponent } from './domains/shared/components/footer/footer.component';
import { CommonService } from './domains/shared/services/common.service';
import { DetailsComponent } from './domains/shared/components/details/details.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, FooterComponent, DetailsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'HarryLazaro';

  commonService = inject(CommonService);
  botonClickado = this.commonService.botonClickado;
}
