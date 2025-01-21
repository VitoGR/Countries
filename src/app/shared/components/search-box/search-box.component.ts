import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { debounceTime, Subject, Subscription } from 'rxjs';

@Component({
  selector: 'shared-search-box',
  standalone: false,

  templateUrl: './search-box.component.html',
  styles: ``
})
export class SearchBoxComponent implements OnInit, OnDestroy {

  private debouncer: Subject<string> = new Subject<string>();

  private deBouncerSubscription?: Subscription;

  @Input()
  public placeholder: string = '';
  @Input()
  public initialValue: string = '';

  @Output()
  public onValue = new EventEmitter<string>();

  @Output()
  public onDebounce = new EventEmitter<string>();

  ngOnInit(): void {
   this.deBouncerSubscription = this.debouncer
      .pipe(debounceTime(300))
      .subscribe(value => {
        this.onDebounce.emit(value)
      });
  }

  ngOnDestroy(): void {
    this.deBouncerSubscription?.unsubscribe();
  }


  emitValue(value: string) {
    this.debouncer.unsubscribe;

  }

  onKeyPress(searchTerm: string) {

    this.debouncer.next(searchTerm);
  }
}
