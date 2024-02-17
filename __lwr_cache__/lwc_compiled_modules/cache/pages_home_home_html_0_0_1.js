import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./home.css";

import _implicitScopedStylesheets from "./home.scoped.css?scoped=true";

import {registerTemplate} from "lwc";
const stc0 = [];
function tmpl($api, $cmp, $slotset, $ctx) {
  return stc0;
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
tmpl.stylesheetToken = "lwc-6le4c39rot8";
tmpl.legacyStylesheetToken = "pages-home_home";
freezeTemplate(tmpl);
