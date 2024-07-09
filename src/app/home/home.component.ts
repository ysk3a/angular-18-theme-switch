import { Component, HostBinding, Renderer2 } from '@angular/core';
import { MatToolbar } from '@angular/material/toolbar';
import { MatButton, MatIconButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { MatCard, MatCardActions, MatCardContent, MatCardHeader, MatCardImage, MatCardSubtitle, MatCardTitle } from '@angular/material/card';
import { MatFormField, MatHint, MatLabel } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';
import { MatSlideToggle } from '@angular/material/slide-toggle';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MatToolbar, MatIconButton, MatIcon, MatCard, MatCardHeader, MatCardTitle, MatCardContent, MatCardImage, MatCardActions, MatButton, MatFormField, MatInput, MatHint, MatLabel, MatCardSubtitle, MatSlideToggle, FormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  // @HostBinding('class')
  currentTheme: 'theme-azure-blue-light' | 'theme-cyan-orange-dark' = 'theme-azure-blue-light';

  isDarkMode: boolean = true;
  constructor(private renderer: Renderer2) {}
  onThemeChanged() {
    this.isDarkMode = !this.isDarkMode;
    console.log(this.isDarkMode);
    if (this.isDarkMode) {
      this.renderer.removeClass(document.body, this.currentTheme);
      this.currentTheme = 'theme-cyan-orange-dark';
      this.renderer.addClass(document.body, this.currentTheme);
    } else {
      this.renderer.removeClass(document.body, this.currentTheme);
      this.currentTheme = 'theme-azure-blue-light';
      this.renderer.addClass(document.body, this.currentTheme);
    }
  }
}
