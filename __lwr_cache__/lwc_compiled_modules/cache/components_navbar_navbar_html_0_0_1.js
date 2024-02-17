import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./navbar.css";

import _implicitScopedStylesheets from "./navbar.scoped.css?scoped=true";

import _componentsTheusdropdown from "components/theusdropdown";
import {parseFragment, registerTemplate} from "lwc";
const $fragment1 = parseFragment`<a href="/" class="logo-container${0}"${2}><img src="/public/assets/navbar/logo.JPG" alt="logo" width="50" height="50" class="d-inline-block align-text-top${0}"${2}></a>`;
const $fragment2 = parseFragment`<span class="navbar-toggler-icon${0}"${2}></span>`;
const $fragment3 = parseFragment`<p${3}>Static content for testing</p>`;
const stc0 = {
  classMap: {
    "fixed-top": true,
    "navbar": true,
    "navbar-expand-lg": true,
    "navbar-light": true,
    "bg-light": true,
    "blue-gradient": true
  },
  key: 0
};
const stc1 = {
  "navbar-brand": true
};
const stc2 = {
  "navbar-toggler": true
};
const stc3 = {
  "collapse": true,
  "navbar-collapse": true
};
const stc4 = {
  classMap: {
    "navbar-nav": true,
    "ms-auto": true,
    "mt-2": true,
    "mt-lg-0": true
  },
  key: 8
};
const stc5 = {
  "nav-item": true,
  "active": true
};
const stc6 = {
  "nav-link": true
};
const stc7 = {
  classMap: {
    "nav-item": true,
    "dropdown": true
  },
  key: 11
};
const stc8 = {
  "nav-link": true,
  "dropdown-toggle": true
};
const stc9 = {
  key: 13
};
function tmpl($api, $cmp, $slotset, $ctx) {
  const {st: api_static_fragment, fid: api_scoped_frag_id, t: api_text, h: api_element, gid: api_scoped_id, k: api_key, b: api_bind, d: api_dynamic_text, i: api_iterator, c: api_custom_element, f: api_flatten} = $api;
  const {_m0, _m1} = $ctx;
  return [api_element("nav", stc0, [api_static_fragment($fragment1(), 2), api_element("a", {
    classMap: stc1,
    attrs: {
      "href": api_scoped_frag_id("#")
    },
    key: 3
  }, [api_text("KaaS")]), api_element("button", {
    classMap: stc2,
    attrs: {
      "type": "button",
      "data-toggle": "collapse",
      "data-target": "#navbarTogglerDemo02",
      "aria-controls": api_scoped_id("navbarTogglerDemo02"),
      "aria-expanded": "false",
      "aria-label": "Toggle navigation"
    },
    key: 4
  }, [api_static_fragment($fragment2(), 6)]), api_element("div", {
    classMap: stc3,
    attrs: {
      "id": api_scoped_id("navbarTogglerDemo02")
    },
    key: 7
  }, [api_element("ul", stc4, api_flatten([api_iterator($cmp.navItems, function (nav) {
    return api_element("li", {
      classMap: stc5,
      key: api_key(9, nav)
    }, [api_element("a", {
      classMap: stc6,
      attrs: {
        "href": api_scoped_frag_id("#"),
        "name": nav
      },
      key: 10,
      on: {
        "click": _m0 || ($ctx._m0 = api_bind($cmp.navbarSelection))
      }
    }, [api_text(api_dynamic_text(nav))])]);
  }), api_element("li", stc7, [api_element("a", {
    classMap: stc8,
    attrs: {
      "href": api_scoped_frag_id("#"),
      "id": api_scoped_id("navbarDropdownMenuLink"),
      "role": "button",
      "data-bs-toggle": "dropdown",
      "aria-expanded": "false"
    },
    key: 12,
    on: {
      "mouseover": _m1 || ($ctx._m1 = api_bind($cmp.handleMouseOver))
    }
  }, [api_text("The Us")]), $cmp.dropdownOpen ? api_custom_element("components-theusdropdown", _componentsTheusdropdown, stc9, [api_static_fragment($fragment3(), 15)]) : null])]))])])];
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
tmpl.stylesheetToken = "lwc-38n2s6kncb0";
tmpl.legacyStylesheetToken = "components-navbar_navbar";
freezeTemplate(tmpl);
