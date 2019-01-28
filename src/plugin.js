import qs from "query-string";

export default {
  install(Vue) {
    const state = {};

    function popPosition(position) {
      let f = state[position];
      if (f) {
        f();
      }
      delete state[position];
    }

    window.onpopstate = function(event) {
      if (event.state && event.state.position) {
        let position = event.state.position;
        popPosition(position);
      }
    };

    Vue.prototype.$history = {
      addBackObserver: function(f) {
        let position = Object.keys(state).length + 1;
        state[position] = f;

        if (window.history) {
          if (position === 1)
            window.history.replaceState({ position: 1 }, "", window.href);

          let obj = { position: position };

          window.history.pushState(obj, "", "#" + position);
        }
      },
      popState: function() {
        if (window.history) window.history.back();
        else popPosition(Object.keys(state).length);
      },
      go: function(d) {
        if (window.history) window.history.go(d);
        else popPosition(Object.keys(state).length);
      }
    };

    Vue.prototype.$params = qs.parse(location.search);
  }
};
