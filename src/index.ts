import { interval } from 'rxjs';

interval(1000) // 每秒发出最新值
  .subscribe(console.log);
