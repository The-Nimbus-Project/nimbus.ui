export interface IDataset {
    id: number;
    name: string;
    lastAccess: Date;
    totalRecords: number;
}
  
export class Dataset implements IDataset {
    id: number;
    name: string;
    lastAccess: Date;
    totalRecords: number;
  
    constructor(id: number, name: string, lastAccess: Date, totalRecords:number) {
        this.id = id;
        this.name = name;
        this.lastAccess = lastAccess;
        this.totalRecords = totalRecords;
    }
}