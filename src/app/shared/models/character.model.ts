export interface Character {
    id?:number;
    name?:string;
    description?:string;
    modified?: Date;
    resourceURI?: string;
    events?:any; 
    series?:any; 
    stories?:any; 
    thumbnail?:any; 
    urls?: any[];

    
}