import { Component, Directive } from '@angular/core';

@Directive()
export abstract class BaseComponent {
  isTitleOpen: boolean = true;

  toggleTitleOpen() {
    this.isTitleOpen = !this.isTitleOpen;
  }

  get titleClassName() {
    return this.isTitleOpen ? 'section-icon' : 'section-icon close';
  }

  get titleSectionClassName() {
    return this.isTitleOpen ? 'title-section' : 'title-section close';
  }

  isContentOpen: boolean = true;

  toggleContentOpen() {
    this.isContentOpen = !this.isContentOpen;
  }

  get contentClassName() {
    return this.isContentOpen ? 'section-icon' : 'section-icon close';
  }

  get contentSectionClassName() {
    return this.isContentOpen ? 'title-section' : 'title-section close';
  }

  isDemoOpen: boolean = true;

  toggleDemoOpen() {
    this.isDemoOpen = !this.isDemoOpen;
  }

  get demoClassName() {
    return this.isDemoOpen ? 'section-icon' : 'section-icon close';
  }

  get demoSectionClassName() {
    return this.isDemoOpen ? 'title-section' : 'title-section close';
  }

  isReferenceOpen: boolean = true;

  toggleReferenceOpen() {
    this.isReferenceOpen = !this.isReferenceOpen;
  }

  get referenceClassName() {
    return this.isReferenceOpen ? 'section-icon' : 'section-icon close';
  }

  get referenceSectionClassName() {
    return this.isReferenceOpen ? 'title-section' : 'title-section close';
  }

  escapeHtml(str: string) {
    return str.replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;")
  }
}
