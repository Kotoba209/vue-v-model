class Observer {
  constructor(data) {
    this.defineReactive(data);
  }

  defineReactive(data) {
    let dep = new Dep();
    Object.keys(data).forEach(key => {
      let val = data[key];
      Object.defineProperty(data, key, {
        get() {
          Dep.target && dep.addSubscribe(Dep.target);
          return val;
        },
        set(newVal) {
          val = newVal;
          dep.notify();
        }
      })
    });
  }
}