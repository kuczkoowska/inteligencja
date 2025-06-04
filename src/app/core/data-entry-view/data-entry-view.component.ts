import { Component } from '@angular/core';

@Component({
  selector: 'app-data-entry-view',
  imports: [],
  templateUrl: './data-entry-view.component.html',
  styleUrl: './data-entry-view.component.scss'
})
export class DataEntryViewComponent {
  onFileDrop(event: DragEvent): void {
    event.preventDefault();
    if (event.dataTransfer && event.dataTransfer.files.length > 0) {
      const file = event.dataTransfer.files[0];
      this.handleFile(file);
    }
  }

  onDragOver(event: DragEvent): void {
    event.preventDefault();
  }

  onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      const file = input.files[0];
      this.handleFile(file);
    }
  }

  private handleFile(file: File): void {
    console.log('Selected file:', file);
    // add model here??
  }
}
