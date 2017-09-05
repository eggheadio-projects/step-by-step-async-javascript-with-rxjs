import Rx from 'rxjs'
const Observable = Rx.Observable;


// App logic
const startButton = document.querySelector('#start');

const start$ = Observable.fromEvent(startButton, 'click');
const interval$ = Observable.interval(1000);

const startInterval$ = start$
    .switchMapTo(interval$);


startInterval$
    .subscribe((x)=> console.log(x));



