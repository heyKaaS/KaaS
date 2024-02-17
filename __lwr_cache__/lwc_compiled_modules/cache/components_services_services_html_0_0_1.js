import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./services.css";

import _implicitScopedStylesheets from "./services.scoped.css?scoped=true";

import {parseFragment, registerTemplate} from "lwc";
const $fragment1 = parseFragment`<div class="text-center pt-5 pb-5${0}"${2}><h1 class="section-heading heading-color${0}"${2}>Our Services</h1><div class="line blue-gradient${0}"${2}></div></div>`;
const stc0 = {
  classMap: {
    "services-section": true,
    "white-gradient": true
  },
  key: 0
};
const stc1 = {
  classMap: {
    "container-fluid": true,
    "pt-5": true,
    "pb-5": true,
    "px-md-5": true
  },
  key: 1
};
const stc2 = {
  classMap: {
    "row": true,
    "row-cols-1": true,
    "row-cols-md-3": true,
    "g-3": true
  },
  key: 4
};
const stc3 = {
  "col": true
};
const stc4 = {
  classMap: {
    "card": true,
    "h-100": true,
    "p-4": true,
    "rounded-3": true,
    "services-animation": true
  },
  key: 6
};
const stc5 = {
  "card-img-top": true
};
const stc6 = {
  classMap: {
    "card-body": true
  },
  key: 9
};
const stc7 = {
  classMap: {
    "card-title": true,
    "text-center": true,
    "fs-4": true,
    "text-color": true
  },
  key: 10
};
const stc8 = {
  classMap: {
    "card-text": true,
    "text-center": true
  },
  key: 11
};
function tmpl($api, $cmp, $slotset, $ctx) {
  const {st: api_static_fragment, k: api_key, h: api_element, d: api_dynamic_text, t: api_text, i: api_iterator} = $api;
  return [api_element("section", stc0, [api_element("div", stc1, [api_static_fragment($fragment1(), 3), api_element("div", stc2, api_iterator($cmp.servicesData, function (serviceData) {
    return api_element("div", {
      classMap: stc3,
      key: api_key(5, serviceData.id)
    }, [api_element("div", stc4, [api_element("div", {
      className: serviceData.className,
      key: 7
    }, [api_element("img", {
      classMap: stc5,
      attrs: {
        "src": serviceData.image,
        "alt": serviceData.title
      },
      key: 8
    })]), api_element("div", stc6, [api_element("h5", stc7, [api_text(api_dynamic_text(serviceData.title))]), api_element("p", stc8, [api_text(api_dynamic_text(serviceData.description))])])])]);
  }))])])];
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
tmpl.stylesheetToken = "lwc-47tn9tc6r9e";
tmpl.legacyStylesheetToken = "components-services_services";
freezeTemplate(tmpl);
