import Rx from 'rxjs'
const Observable = Rx.Observable;


// App logic
const startButton = document.querySelector('#start');
const stopButton = document.querySelector('#stop');

const start$ = Observable.fromEvent(startButton, 'click');
const interval$ = Observable.interval(1000);
const stop$ = Observable.fromEvent(stopButton, 'click');

const intervalThatStops$ = interval$
    .takeUntil(stop$);

start$
    .switchMapTo(intervalThatStops$)
    .subscribe((x)=> console.log(x));


