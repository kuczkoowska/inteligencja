import { Component } from '@angular/core';
import { OcrService } from '../services/ocr.service';

@Component({
  selector: 'app-data-entry-view',
  imports: [],
  templateUrl: './data-entry-view.component.html',
  styleUrl: './data-entry-view.component.scss'
})
export class DataEntryViewComponent {
  prediction: string | null = null;

  constructor(private ocrService: OcrService) {}

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

  onFileSelected(event: any): void {
    const file: File = event.target.files[0];
    if (file) {
      this.handleFile(file);
    }
  }

  private handleFile(file: File): void {
    this.ocrService.predict(file).subscribe(result => {
      this.prediction = result.prediction || result['prediction '] || 'No prediction';
      console.log('Prediction:', this.prediction);
    });
  }
}