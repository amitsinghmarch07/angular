import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[speak]'
})
export class SpeakDirective {

  private speech = window.speechSynthesis;
  constructor(private host: ElementRef) { }

  @HostListener("mouseenter")
  onMouseEnter(event: MouseEvent) {
    const text = this.host.nativeElement.innerText;
    const utter = new SpeechSynthesisUtterance(text);
    this.speech.speak(utter);
  }
}
