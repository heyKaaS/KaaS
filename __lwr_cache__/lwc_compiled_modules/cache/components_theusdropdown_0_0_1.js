import { registerDecorators as _registerDecorators, registerComponent as _registerComponent, LightningElement } from "lwc";
import _tmpl from "./theusdropdown.html";
class DropdownMenu extends LightningElement {
  constructor(...args) {
    super(...args);
    this.isOpen = false;
    this.label = void 0;
    this.label = 'Services';
    this.dropdownItems = [{
      id: 1,
      label: 'Our Services',
      href: '#our-services'
    }, {
      id: 2,
      label: 'Our Mission',
      href: '#our-mission'
    }, {
      id: 3,
      label: 'Our Products',
      href: '#our-products'
    }];
  }
  // Inside components-theusdropdown.js
  connectedCallback() {
    console.log('components-theusdropdown is added to the DOM');
  }

  // Inside components-theusdropdown.js
  renderedCallback() {
    const style = window.getComputedStyle(this.template.host);
    console.log('Display style of the dropdown:', style.display);
    console.log('Visibility style of the dropdown:', style.visibility);
  }

  // Inside components-theusdropdown.js
  renderedCallback() {
    console.log('Dropdown items:', this.dropdownItems);
  }
  handleMouseEnter() {
    this.isOpen = true;
  }
  handleMouseLeave() {
    this.isOpen = false;
  }
  /*LWC compiler v5.0.0*/
}
_registerDecorators(DropdownMenu, {
  publicProps: {
    label: {
      config: 0
    }
  },
  fields: ["isOpen", "label", "dropdownItems"]
});
export default _registerComponent(DropdownMenu, {
  tmpl: _tmpl,
  sel: "components-theusdropdown",
  apiVersion: 60
});