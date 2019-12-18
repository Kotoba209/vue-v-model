class Vue {
  constructor(options) {
    let data = this._data = options.data;

    new Observer(data);

    const _compile = new Compile(options.el, this);
    _compile.commpileText();
  }
}