import { LightningElement } from "lwc";

export default class Aboutus extends LightningElement {
    
        ABOUTUS_DATA = {
            sectionHeading:'About KaaS',
            description:"We have one of the region's best Salesforce consulting teams. We have helped a number of organizations identify, grow, deploy, and evolve their Salesforce investments. We are headquartered in the India",
            tagline:'What sets us apart is our dedication to fully comprehending your requirements prior to beginning growth.',
            stats:[
                {label:"Satisfied Clients",value:"50+"},
                {label:"Certifications",value:"100+"},
                {label:"Years Completed",value:"5+"}
            ]
        }
    }