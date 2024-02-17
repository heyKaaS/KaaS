import { registerDecorators as _registerDecorators, registerComponent as _registerComponent, LightningElement } from "lwc";
import _tmpl from "./services.html";
import SERVICES_DATA from "./servicesData";
class Services extends LightningElement {
  constructor(...args) {
    super(...args);
    this.servicesData = SERVICES_DATA;
  }
  connectedCallback() {
    //TO DO : Could be filtered out in a separate function
    this.servicesData = this.servicesData.map(service => {
      //Output : {id: 1, title: "", color: "", description: "", image: "", className: "icon blue"}
      return {
        ...service,
        className: `icon ${service.color}`
      };
    });
  }
  /*LWC compiler v5.0.0*/
}
_registerDecorators(Services, {
  fields: ["servicesData"]
});
export default _registerComponent(Services, {
  tmpl: _tmpl,
  sel: "components-services",
  apiVersion: 60
});