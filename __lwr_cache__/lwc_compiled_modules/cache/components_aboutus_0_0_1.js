import { registerDecorators as _registerDecorators, registerComponent as _registerComponent, LightningElement } from "lwc";
import _tmpl from "./aboutus.html";
class Aboutus extends LightningElement {
  constructor(...args) {
    super(...args);
    this.ABOUTUS_DATA = {
      sectionHeading: 'About KaaS',
      description: "We have one of the region's best Salesforce consulting teams. We have helped a number of organizations identify, grow, deploy, and evolve their Salesforce investments. We are headquartered in the India",
      tagline: 'What sets us apart is our dedication to fully comprehending your requirements prior to beginning growth.',
      stats: [{
        label: "Satisfied Clients",
        value: "50+"
      }, {
        label: "Certifications",
        value: "100+"
      }, {
        label: "Years Completed",
        value: "5+"
      }]
    };
  }
  /*LWC compiler v5.0.0*/
}
_registerDecorators(Aboutus, {
  fields: ["ABOUTUS_DATA"]
});
export default _registerComponent(Aboutus, {
  tmpl: _tmpl,
  sel: "components-aboutus",
  apiVersion: 60
});