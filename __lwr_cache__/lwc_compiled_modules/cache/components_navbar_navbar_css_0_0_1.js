function stylesheet(token, useActualHostSelector, useNativeDirPseudoclass) {
  var shadowSelector = token ? ("[" + token + "]") : "";
  var hostSelector = token ? ("[" + token + "-host]") : "";
  var suffixToken = token ? ("-" + token) : "";
  return "nav" + shadowSelector + "{background-color:#1C1C1C;height: 60px;display:flex;justify-content:space-between;align-items:center;padding:0 20px;box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.75);}a" + shadowSelector + "{color:#5CBF35;}.navbar-brand" + shadowSelector + "{font-size: 2.5rem;font-weight: 600;}.navbar-expand-lg" + shadowSelector + " .navbar-nav" + shadowSelector + " .nav-link" + shadowSelector + "{padding-left: 1rem;padding-right: 1rem;font-size: 1.2rem;}.logo-container" + shadowSelector + " {margin-right: 10px;}.dropdown-menu" + shadowSelector + " {display: none;position: absolute;background-color: #f9f9f9;min-width: 160px;box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);z-index: 1;}.dropdown-menu.show" + shadowSelector + " {display: block;}";
  /*LWC compiler v5.0.0*/
}
export default [stylesheet];