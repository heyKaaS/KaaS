function stylesheet(token, useActualHostSelector, useNativeDirPseudoclass) {
  var shadowSelector = token ? ("[" + token + "]") : "";
  var hostSelector = token ? ("[" + token + "-host]") : "";
  var suffixToken = token ? ("-" + token) : "";
  return ".slds-card" + shadowSelector + " {background-color: #ffffff;border: 1px solid #e3e8ee;border-radius: 4px;}.icon" + shadowSelector + "{position: relative;width: 80px;height: 80px;margin: 0 auto 24px;border-radius: 50%;color: #ffffff;padding: 1rem;z-index: 10;}.icon" + shadowSelector + "::after{content: '';border: 2px dashed #eeeeee;border-radius: 50%;z-index: -10;position: absolute;width: calc(100% + 20px);height: calc(100% + 20px);top: -10px;left: -10px;background: transparent;}.services-animation:hover" + shadowSelector + "{transform: translateY(-10px);box-shadow: 0 18px 56px rgb(47 91 234 / 14%);color: #fff;transition-duration: 500ms;background: linear-gradient(to right, #031a33 35%, #2251ff 65%, #042a76 100%);}";
  /*LWC compiler v5.0.0*/
}
export default [stylesheet];