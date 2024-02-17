import { LightningElement,api } from 'lwc';

export default class DropdownMenu extends LightningElement {


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

    isOpen = false;

    @api label;

    label = 'Services';
    dropdownItems = [
        { id: 1, label: 'Our Services', href: '#our-services' },
        { id: 2, label: 'Our Mission', href: '#our-mission' },
        { id: 3, label: 'Our Products', href: '#our-products' }
    ];

    handleMouseEnter() {
        this.isOpen = true;
    }

    handleMouseLeave() {
        this.isOpen = false;
    }
}
