import axios, { AxiosResponse } from 'axios';
import { MyEvent } from './MyEvent';

export class Collection<T, U> {
  models: T[] = [];
  events: MyEvent = new MyEvent();

  constructor(
    public rootUrl: string,
    public deserialize: (json: U) => T
  ) {

  }

  get on() {
    return this.events.on;
  }

  get trigger() {
    return this.events.trigger;
  }

  fetch(): void {
    axios.get(this.rootUrl)
      .then((response: AxiosResponse) => {
        response.data.forEach((modelData: U) => {
          const model = this.deserialize(modelData);
          this.models.push(model);
        });

      this.trigger('change');
    });
  }
}