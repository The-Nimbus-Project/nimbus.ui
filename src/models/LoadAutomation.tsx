export interface ILoadAutomation {
    id: number;
    name: string;
    lastAccess: Date;
    totalLoads: number;
    lastLoadDate: Date;
    fileRegexPattern: string;
}
  
export class LoadAutomation implements ILoadAutomation {
    id: number;
    name: string;
    lastAccess: Date;
    totalLoads: number;
    lastLoadDate: Date;
    fileRegexPattern: string;
  
    constructor(id: number, name: string, lastAccess: Date, totalLoads: number, lastLoadDate: Date, fileRegexPattern: string) {
        this.id = id;
        this.name = name;
        this.lastAccess = lastAccess;
        this.totalLoads = totalLoads;
        this.lastLoadDate = lastLoadDate;
        this.fileRegexPattern = fileRegexPattern;
    }
}