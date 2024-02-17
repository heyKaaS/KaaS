import { LightningElement,track } from "lwc";


export default class Navbar extends LightningElement {

    navItems = ["Home", "Services", "About Us"];
    // dropdownSections = dropdownSections;
@track dropdownOpen = false;

  handleMouseOver() {
    this.dropdownOpen = true;
    console.log('dropdownOpen : ' + this.dropdownOpen);
  }

  handleMouseLeave() {
    this.dropdownOpen = false;
    console.log('mouse leave' + this.dropdownOpen);
  }

  navbarSelection(event){
    const nameWithoutSpace = event.target.name.replace(/\s/g, ''); // remove space from name say 'About Us'
    const tagName = nameWithoutSpace === 'Home' ? 'components-navbar' : `components-${nameWithoutSpace.toLowerCase()}`; // if name is 'Home' then scroll to header else scroll to section
    const elementName =  document.querySelector(tagName);
    elementName.scrollIntoView();

  }

}
