class Watcher {
  constructor(vue, exp, callback) {
    this.vue = vue;
    this.exp = exp;
    this.callback = callback;
    this.value = this.get();
  }

  get() {
    Dep.target = this;
    let value = this.vue._data[this.exp];
    Dep.target = null;
    return value;
  }

  updated() {
    this.value = this.get();
    this.callback.call(this.vue, this.value);
  }
}