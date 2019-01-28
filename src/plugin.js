import qs from "query-string";

export default {
  install(Vue) {
    const state = [];

    function popLast() {
      let f = state.pop();
      if (f) {
        f();
      }
    }

    window.onpopstate = function(event) {
      if (event.state && event.state.position) {
        popLast();
      }
    };

    Vue.prototype.$history = {
      addBackObserver: function(f) {
        let position = state.length + 1;
        state.push(f);

        if (window.history) {
          if (position === 1)
            window.history.replaceState({ position: 1 }, "", window.href);

          let obj = { position: position };

          window.history.pushState(obj, "", "#" + position);
        }
      },
      popState: function() {
        if (window.history) window.history.back();
        else popLast();
      },
      go: function(d) {
        if (window.history) window.history.go(d);
        else popLast();
      }
    };

    Vue.prototype.$params = qs.parse(location.search);
  }
};
