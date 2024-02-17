function stylesheet(token, useActualHostSelector, useNativeDirPseudoclass) {
  var shadowSelector = token ? ("[" + token + "]") : "";
  var hostSelector = token ? ("[" + token + "-host]") : "";
  var suffixToken = token ? ("-" + token) : "";
  return ".dropdown-container" + shadowSelector + " {position: relative;}.dropdown-trigger" + shadowSelector + " {display: inline-block;padding: 10px 15px;text-decoration: none;color: #333;}.dropdown-content" + shadowSelector + " {position: absolute;top: 100%;left: 0;background-color: #fff;box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);padding: 10px;display: block !important;visibility: visible !important;z-index: 1000;overflow: visible;}";
  /*LWC compiler v5.0.0*/
}
export default [stylesheet];