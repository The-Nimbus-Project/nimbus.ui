export interface IFileMapping {
    id: number;
    fileName: string;
    lastAccess: Date;
    columnCount: number;
    fileType: string;
    delimiter: string;
    datasetId: number;
}
  
export class FileMapping implements IFileMapping {
    id: number;
    fileName: string;
    lastAccess: Date;
    columnCount: number;
    fileType: string;
    delimiter: string;
    datasetId: number;
  
    constructor(id: number, fileName: string, lastAccess: Date, columnCount: number, fileType: string, delimiter: string, datasetId: number) {
        this.id = id;
        this.fileName = fileName;
        this.lastAccess = lastAccess;
        this.columnCount = columnCount;
        this.fileType = fileType;
        this.delimiter = delimiter;
    }
}