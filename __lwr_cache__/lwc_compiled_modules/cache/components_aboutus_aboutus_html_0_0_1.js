import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./aboutus.css";

import _implicitScopedStylesheets from "./aboutus.scoped.css?scoped=true";

import {parseFragment, registerTemplate} from "lwc";
const $fragment1 = parseFragment`<div class="line blue-gradient mb-5${0}"${2}></div>`;
const $fragment2 = parseFragment`<div class="col-12 col-md-6${0}"${2}><img src="/public/assets/aboutus/about_us.png" class="img-fluid${0}" loading="lazy" alt="aboutus" width="100%" height="auto"${2}></div>`;
const $fragment3 = parseFragment`<div class="hero-cards${0}"${2}><div class="shadow-bg-top${0}"${2}></div><div class="col-1${0}"${2}><div class="card card-color${0}"${2}><div class="card--top${0}"${2}><div class="avatar${0}"${2}><img src="https://lemon.io/wp-content/uploads/2023/06/Victoria-B.svg" class="attachment-full size-full wp-post-image lazyloaded${0}" loading="lazy" alt="aboutus" width="46px" height="54" display="flex"${2}></div><div class="wrapper${0}"${2}><div class="name${0}"${2}>Ruchika K.</div><div class="description${0}"${2}> Senior Salesforce Developer</div><div class="experience${0}"${2}>5+ years of experience</div><div class="rate${0}"${2}>72$/h</div></div></div><div class="card--bottom${0}"${2}><div class="skill${0}"${2}>Apex</div><div class="skill${0}"${2}>LWC</div><div class="skill${0}"${2}>Heroku</div><div class="skill${0}"${2}>NodeJS</div><div class="skill${0}"${2}>SFMC</div><div class="skill${0}"${2}>Write</div></div><svg class="card-bg${0}" width="100%" height="100%" viewBox="0 0 306 133" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none"${2}/></div><div class="card card-color${0}"${2}><div class="card--top${0}"${2}><div class="avatar${0}"${2}><img src="https://lemon.io/wp-content/uploads/2023/07/avatars_2.webp" class="attachment-full size-full wp-post-image lazyloaded${0}" loading="lazy" alt="aboutus" width="46px" height="54" display="flex"${2}></div><div class="wrapper${0}"${2}><div class="name${0}"${2}>Tarun K.</div><div class="description${0}"${2}> Technical Architect</div><div class="experience${0}"${2}>6+ years of experience</div><div class="rate${0}"${2}>100$/h</div></div></div><div class="card--bottom${0}"${2}><div class="skill${0}"${2}>Apex</div><div class="skill${0}"${2}>LWC</div><div class="skill${0}"${2}>Heroku</div><div class="skill${0}"${2}>NodeJS</div><div class="skill${0}"${2}>SFMC</div><div class="skill${0}"${2}>Laugh</div></div><svg class="card-bg${0}" width="100%" height="100%" viewBox="0 0 306 133" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none"${2}/></div></div></div>`;
const stc0 = {
  classMap: {
    "white-gradient": true,
    "aboutus-section": true
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
    "row": true
  },
  key: 2
};
const stc3 = {
  classMap: {
    "col-12": true,
    "col-md-6": true,
    "text-center": true,
    "mt-md-5": true
  },
  key: 3
};
const stc4 = {
  classMap: {
    "text-center": true,
    "section-heading": true,
    "heading-color": true
  },
  key: 4
};
const stc5 = {
  classMap: {
    "text-center": true,
    "fs-5": true,
    "mb-5": true
  },
  key: 7
};
const stc6 = {
  classMap: {
    "row": true,
    "mb-5": true
  },
  key: 8
};
const stc7 = {
  "col-sm-4": true,
  "mb-3": true
};
const stc8 = {
  classMap: {
    "box-shadow": true,
    "text-center": true
  },
  key: 10
};
const stc9 = {
  classMap: {
    "text-color": true,
    "fs-4": true
  },
  key: 11
};
const stc10 = {
  classMap: {
    "text-color": true,
    "mb-4": true,
    "fs-7": true
  },
  key: 12
};
const stc11 = {
  classMap: {
    "text-center": true,
    "fs-4": true,
    "mb-5": true
  },
  key: 13
};
function tmpl($api, $cmp, $slotset, $ctx) {
  const {d: api_dynamic_text, t: api_text, h: api_element, st: api_static_fragment, k: api_key, i: api_iterator} = $api;
  return [api_element("section", stc0, [api_element("div", stc1, [api_element("div", stc2, [api_element("div", stc3, [api_element("h1", stc4, [api_text(api_dynamic_text($cmp.ABOUTUS_DATA.sectionHeading))]), api_static_fragment($fragment1(), 6), api_element("p", stc5, [api_text(api_dynamic_text($cmp.ABOUTUS_DATA.description))]), api_element("div", stc6, api_iterator($cmp.ABOUTUS_DATA.stats, function (stat) {
    return api_element("div", {
      classMap: stc7,
      key: api_key(9, stat.label)
    }, [api_element("div", stc8, [api_element("h2", stc9, [api_text(api_dynamic_text(stat.value))]), api_element("span", stc10, [api_text(api_dynamic_text(stat.label))])])]);
  })), api_element("p", stc11, [api_text(api_dynamic_text($cmp.ABOUTUS_DATA.tagline))])]), api_static_fragment($fragment2(), 15)])]), api_static_fragment($fragment3(), 17)])];
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
tmpl.stylesheetToken = "lwc-2fjnl5fqbbc";
tmpl.legacyStylesheetToken = "components-aboutus_aboutus";
freezeTemplate(tmpl);
