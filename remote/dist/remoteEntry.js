import { _ as i } from "./preload-helper.36fbc8e5.js";
const c = new Set(["Module", "__esModule", "default", "_export_sfc"]);
let l = {
  "./Remote.vue": () => (
    d([]),
    f("./__federation_expose_remote_vue.js").then((e) =>
      Object.keys(e).every((t) => c.has(t)) ? () => e.default : () => e
    )
  ),
};
const a = {},
  d = (e) => {
    const t = import.meta.url;
    if (typeof t > "u") {
      console.warn(
        'The remote style takes effect only when the build.target option in the vite.config.ts file is higher than that of "es2020".'
      );
      return;
    }
    const n = t.substring(0, t.lastIndexOf("remoteEntry.js"));
    e.forEach((r) => {
      const o = n + r;
      if (o in a) return;
      a[o] = !0;
      const s = document.head.appendChild(document.createElement("link"));
      (s.href = o), (s.rel = "stylesheet");
    });
  };
async function f(e) {
  return i(() => import(e), []);
}
const u = (e) => l[e](),
  m = (e) => {
    (globalThis.__federation_shared__ = globalThis.__federation_shared__ || {}),
      Object.entries(e).forEach(([t, n]) => {
        const r = Object.keys(n)[0],
          o = Object.values(n)[0],
          s = o.scope || "default";
        globalThis.__federation_shared__[s] =
          globalThis.__federation_shared__[s] || {};
        const _ = globalThis.__federation_shared__[s];
        (_[t] = _[t] || {})[r] = o;
      });
  };
export { d as dynamicLoadingCss, u as get, m as init };
