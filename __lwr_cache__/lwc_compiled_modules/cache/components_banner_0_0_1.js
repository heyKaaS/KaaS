import { registerDecorators as _registerDecorators, registerComponent as _registerComponent, LightningElement } from "lwc";
import _tmpl from "./banner.html";
class Banner extends LightningElement {
  constructor(...args) {
    super(...args);
    this.banner = "Unlock Your Business Potential with Unrivaled Salesforce Expertise";
    this.bannerDescription = "Our powerhouse team of Salesforce-accredited experts and dedicated advisors is committed to delivering excellence in every implementation and consulting service. Discover the difference of top-tier Salesforce solutions tailored just for you";
  }
  /*LWC compiler v5.0.0*/
}
_registerDecorators(Banner, {
  fields: ["banner", "bannerDescription"]
});
export default _registerComponent(Banner, {
  tmpl: _tmpl,
  sel: "components-banner",
  apiVersion: 60
});