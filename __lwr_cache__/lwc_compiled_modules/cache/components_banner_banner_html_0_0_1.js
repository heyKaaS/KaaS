import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./banner.css";

import _implicitScopedStylesheets from "./banner.scoped.css?scoped=true";

import {parseFragment, registerTemplate} from "lwc";
const $fragment1 = parseFragment`<a class="btn btn-lg banner-button${0}"${2}>Contact Us</a>`;
const $fragment2 = parseFragment`<div class="col-md-5${0}"${2}><img src="/public/assets/banner/intellectaszip.jpeg" alt="banner" width="100%" height="auto"${3}></div>`;
const stc0 = {
  classMap: {
    "banner": true,
    "blue-gradient": true,
    "content-center": true
  },
  key: 0
};
const stc1 = {
  classMap: {
    "container-fluid": true
  },
  key: 1
};
const stc2 = {
  classMap: {
    "row": true,
    "align-items-center": true
  },
  key: 2
};
const stc3 = {
  classMap: {
    "col-md-6": true
  },
  key: 3
};
const stc4 = {
  classMap: {
    "banner-title": true,
    "text-white": true,
    "text-center": true
  },
  key: 4
};
const stc5 = {
  classMap: {
    "mb-4": true,
    "h1": true
  },
  key: 5
};
const stc6 = {
  classMap: {
    "mb-5": true,
    "h6": true
  },
  key: 6
};
function tmpl($api, $cmp, $slotset, $ctx) {
  const {d: api_dynamic_text, t: api_text, h: api_element, st: api_static_fragment} = $api;
  return [api_element("section", stc0, [api_element("div", stc1, [api_element("div", stc2, [api_element("div", stc3, [api_element("div", stc4, [api_element("h1", stc5, [api_text(api_dynamic_text($cmp.banner))]), api_element("p", stc6, [api_text(api_dynamic_text($cmp.bannerDescription))]), api_static_fragment($fragment1(), 8)])]), api_static_fragment($fragment2(), 10)])])])];
  /*LWC compiler v5.0.0*/
}
export default registerTemplate(tmpl);
tmpl.stylesheets = [];


if (_implicitStylesheets) {
  tmpl.stylesheets.push.apply(tmpl.stylesheets, _implicitStylesheets);
}
if (_implicitScopedStylesheets) {
  tmpl.stylesheets.push.apply(tmpl.stylesheets, _implicitScopedStylesheets);
}
tmpl.stylesheetToken = "lwc-5hbi3hvp4l0";
tmpl.legacyStylesheetToken = "components-banner_banner";
freezeTemplate(tmpl);
