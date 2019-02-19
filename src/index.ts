import {Observable} from 'rxjs'

let count = 0

const obs = new Observable(o => {
  o.next(1)
  o.next(2)
  o.next(3)
})

obs.subscribe(newValue => console.log(newValue))
