import AbstractStore from './store';

export default class MemoryStore<T,S> implements AbstractStore<T, S> {
  private items: Map<T, S> = new Map<T, S>();

  setItem(key: T, value: S): S {
    this.items.set(key, value);
    return value;
  }
  removeItem(key: T) {
    this.items.delete(key);
  }
  getItem(key: T): S | undefined {
    return this.items.get(key);
  }
  getAll(): Map<T, S> {
    return new Map<T, S>(this.items);
  }
}
