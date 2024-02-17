import { LightningElement } from "lwc";
import SERVICES_DATA  from "./servicesData";

export default class Services extends LightningElement {
    servicesData = SERVICES_DATA;

    connectedCallback() {

        //TO DO : Could be filtered out in a separate function
        this.servicesData = this.servicesData.map((service) => {

            //Output : {id: 1, title: "", color: "", description: "", image: "", className: "icon blue"}
            return {
                ...service,
                className: `icon ${service.color}`
            };
        });
    }

}
