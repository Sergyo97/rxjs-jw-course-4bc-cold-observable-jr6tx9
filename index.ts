import { ajax } from 'rxjs/ajax';

const ajax$ = ajax('https://random-data-api.com/api/v2/users');

ajax$.subscribe((data) => console.log(data.response.first_name));

ajax$.subscribe((data) => console.log(data.response.first_name));

ajax$.subscribe((data) => console.log(data.response.first_name));
