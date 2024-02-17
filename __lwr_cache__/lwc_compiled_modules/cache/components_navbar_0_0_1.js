import { registerDecorators as _registerDecorators, registerComponent as _registerComponent, LightningElement } from "lwc";
import _tmpl from "./navbar.html";
class Navbar extends LightningElement {
  constructor(...args) {
    super(...args);
    this.navItems = ["Home", "Services", "About Us"];
    // dropdownSections = dropdownSections;
    this.dropdownOpen = false;
  }
  handleMouseOver() {
    this.dropdownOpen = true;
    console.log('dropdownOpen : ' + this.dropdownOpen);
  }
  handleMouseLeave() {
    this.dropdownOpen = false;
    console.log('mouse leave' + this.dropdownOpen);
  }
  navbarSelection(event) {
    const nameWithoutSpace = event.target.name.replace(/\s/g, ''); // remove space from name say 'About Us'
    const tagName = nameWithoutSpace === 'Home' ? 'components-navbar' : `components-${nameWithoutSpace.toLowerCase()}`; // if name is 'Home' then scroll to header else scroll to section
    const elementName = document.querySelector(tagName);
    elementName.scrollIntoView();
  }
  /*LWC compiler v5.0.0*/
}
_registerDecorators(Navbar, {
  track: {
    dropdownOpen: 1
  },
  fields: ["navItems"]
});
export default _registerComponent(Navbar, {
  tmpl: _tmpl,
  sel: "components-navbar",
  apiVersion: 60
});