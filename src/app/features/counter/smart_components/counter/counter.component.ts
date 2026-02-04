import {Component, computed, effect, linkedSignal, OnInit, signal} from '@angular/core';

@Component({
  selector: 'app-counter.component',
  imports: [],
  template: `
    <h1>Counter</h1>
    <div>
      <span>Counter: </span>
      <span>{{ counter() }}</span>
    </div>

    <div>
      <span>Double Counter: </span>
      <span>{{ doubleCounter() }}</span>
    </div>

    <div>
      <span>Another counter: </span>
      <span>{{ anotherCounter() }}</span>
    </div>

    <div>
      <button (click)="counter.set(0)">Reset</button>
    </div>

    <h1> Asynchronität</h1>
    <div>
      <button (click)="scheduleTimeout()">Timeout</button>
    </div>
  `,
  styles: ``
})
export class CounterComponent implements OnInit {

  // hard-coded initial value
  counter = signal(1)

  // computed value
  doubleCounter = computed(() => {
    return this.counter() * 2;
  })

  // computed initial value
  anotherCounter = linkedSignal(() => this.counter() + 100)

  constructor() {
    effect(() => {
      if (this.counter() == 0) {
        console.log('Counter has been reset!')
      }
    })
  }

  ngOnInit(): void {
    setInterval(() => {
      this.counter.update(currentValue => currentValue + 1)
    }, 1000)
  }

  scheduleTimeout() {
    console.log('Timeout scheduled')

    setTimeout(
      () => this.printMessage('Timeout over'),
      1000
    )
  }

  printMessage(value: String) {
    console.log(value)
  }
}
