export default interface AbstractStore<T, S> {
  setItem(key: T, value: S): S;
  removeItem(key: T);
  getItem(key: T): S | undefined;
  getAll(): Map<T,S>;
}