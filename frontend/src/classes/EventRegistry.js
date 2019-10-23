export default class EventRegistry {
  _registries = {};

  register(namespace) {
    this._registries[namespace] = {
      events: {},
      on(event, callback) {
        this.events[event] = callback;
      },
      call(event, params) {
        console.log(event);
        if (this.events[event]) {
          this.events[event].apply(null, params);
        }
      }
    };

    return this._registries[namespace];
  }

  emit(namespace, event) {
    if (this._registries[namespace]) {
      this._registries[namespace].call(event[0], event[1]);
    }
  }

  on(name, callback) {
    this._registries[name] = callback;

    return this;
  }

  call(name, params) {

  }
}