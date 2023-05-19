/**
 * Given a name of the directory and a file name return the relevant results 
 */ 

/**
 * Questions to ask the interviewer: 
 * 1. Are we supporting extensions? 
 * 2. Does the file name has to match completely or partially?
 * 3. Case sensitivity? 
 * 4. One directory or multiple directories? 
 */ 
interface FileSearchFilter {

    search(directoryName: String, params : String[]) : String[] 
}

class NameSearchFilter implements FileSearchFilter { 


    search(directoryName: String, params: String[]): String[] {
        throw new Error("Method not implemented.");
    }
}

class ExtensionSearchFilter implements FileSearchFilter {

    search(directoryName: String, params: String[]): String[] {
        throw new Error("Method not implemented.");
    }

}

class DirectorySearch {
    
    private readonly DirectoryName : String; 
    private readonly SearchFilter: FileSearchFilter; 

    constructor(directoryName : String , filter : FileSearchFilter) {
        this.DirectoryName = directoryName; 
        this.SearchFilter = filter;
    }

    public searchDirectory(query : String[]) : String[] { 
        return this.SearchFilter.search(this.DirectoryName, query);
    } 
}