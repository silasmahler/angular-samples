import { By } from '@angular/platform-browser';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Component, DebugElement, Directive } from '@angular/core';
import { TooltipDirective } from './tooltip.directive';


@Component({
  selector: 'mock-component',
  template: '<div tooltip="Hallo!"></div>'
})
class MockComponent {}

describe('A Component with Tooltipdirective', () => {
let fixture: ComponentFixture<MockComponent>;
let element: DebugElement;
let inst: TooltipDirective;

beforeEach(() => {
  TestBed.configureTestingModule({
    declarations: [MockComponent, TooltipDirective]
  });

  fixture = TestBed.createComponent(MockComponent);
  element = fixture.debugElement.query(By.directive(TooltipDirective));
  inst = element.injector.get(TooltipDirective);
  });

it('should create', () => {
  const tooltipdirective = new TooltipDirective(undefined);
  expect(tooltipdirective).toBeTruthy();
});

it('trigger directive when mouseover', () => {
  fixture.detectChanges();
  expect(inst.tooltipElement).toBeDefined();
  expect(inst.tooltipElement).toBeTruthy();
  element.triggerEventHandler('mouseenter', element);
  expect(inst.tooltipElement.hidden).toBeFalsy();
  }
  );
});
