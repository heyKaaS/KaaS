function stylesheet(token, useActualHostSelector, useNativeDirPseudoclass) {
  var shadowSelector = token ? ("[" + token + "]") : "";
  var hostSelector = token ? ("[" + token + "-host]") : "";
  var suffixToken = token ? ("-" + token) : "";
  return ".banner" + shadowSelector + " {height: calc(100vh - 60px);top: 60px;position: relative;}.banner-title" + shadowSelector + " {max-width: 670px;}.banner-button" + shadowSelector + " {color: #5CBF35;background: #fff;border-radius: 30px;padding: 1rem 3rem;margin-bottom: 3rem;font-weight: bold;}.content-center" + shadowSelector + "{display: flex;justify-content: center;align-items: center;}";
  /*LWC compiler v5.0.0*/
}
export default [stylesheet];