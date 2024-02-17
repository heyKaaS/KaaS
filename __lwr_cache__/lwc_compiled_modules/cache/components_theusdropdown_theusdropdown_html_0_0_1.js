import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./theusdropdown.css";

import _implicitScopedStylesheets from "./theusdropdown.scoped.css?scoped=true";

import {parseFragment, registerTemplate} from "lwc";
const $fragment1 = parseFragment`<ul class="dropdown-menu${0}"${2}><li${3}><a class="dropdown-content${0}" href="/our-mission"${2}>Our Mission</a></li><li${3}><a class="dropdown-content${0}" href="/our-process"${2}>Our Process</a></li><li${3}><a class="dropdown-content${0}" href="/our-culture"${2}>Our Culture</a></li></ul>`;
function tmpl($api, $cmp, $slotset, $ctx) {
  const {st: api_static_fragment, h: api_element} = $api;
  return [api_element("div", {
    className: $cmp.dropdownClasses,
    key: 0
  }, [api_static_fragment($fragment1(), 2)])];
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
tmpl.stylesheetToken = "lwc-1blo92uu8l1";
tmpl.legacyStylesheetToken = "components-theusdropdown_theusdropdown";
freezeTemplate(tmpl);
