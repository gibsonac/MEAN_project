import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Pipe({
  name: 'keepHtml',
  pure: false
})
export class KeepHtmlPipe implements PipeTransform {
  constructor(private sanitizer: DomSanitizer) {
  }

  transform(content) {
    // this.sanitizer.bypassSecurityTrustHtml(content);
    // this.sanitizer.bypassSecurityTrustStyle(content);
    return this.sanitizer.bypassSecurityTrustHtml(content);
  }
}