import {Observable} from 'rxjs'

let count = 0

const obs = new Observable(observer => {
  try {
    observer.next(1)
    observer.next(2)
    observer.next(3)
    observer.complete();
  } catch (e) {
    observer.error(e);
  }
})

obs.subscribe(
  newValue => console.log(newValue),
  error => console.log(error),
  () => console.log('Completed.')
)
