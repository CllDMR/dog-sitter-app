import { MyService } from "MyModels";
import images from "../../../dataset.json";

let myServices: MyService[] = images;

const TIMEOUT = 100;

export function init(): Promise<MyService[]> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve([]);
    }, TIMEOUT);
  });
}

export function load(page: number): Promise<MyService[]> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(myServices.slice((page - 1) * 5, page * 5));
    }, TIMEOUT);
  });
}

export function create(myService: MyService): Promise<MyService[]> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      myServices = myServices.concat(myService);
      resolve(myServices);
    }, TIMEOUT);
  });
}

export function update(myService: MyService): Promise<MyService[]> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      myServices = myServices.map(i => (i.id === myService.id ? myService : i));
      resolve(myServices);
    }, TIMEOUT);
  });
}

export function remove(myService: MyService): Promise<MyService[]> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      myServices = myServices.filter(i => i.id !== myService.id);
      resolve(myServices);
    }, TIMEOUT);
  });
}
