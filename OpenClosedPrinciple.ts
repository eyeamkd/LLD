/**
 * You are designing a library that provides various data sorting algorithms to its users.
 *  One of the requirements is to ensure that new sorting algorithms can be added 
 * to the library without modifying the existing code. How can you apply 
 * the Open Closed Principle to achieve this requirement? 
 * Can you provide an example implementation of how the library can be designed 
 * to be more maintainable and extensible?
 */ 

interface Sorter{
    sort(data:any[]) : any[]
} 

class QuickSort implements Sorter {
    sort(data: any[]): any[] {
       // Quick sort implementation
       return [];
    }

}

class BubbleSort implements Sorter{
    sort(data: any[]): any[] {
       // bubble sort implementation
       return [];
    }

} 

class RadixSort implements Sorter{
    sort(data: any[]): any[] { 
        //Radix sort implementation
        return [];
    }

}

class SortingLibrary{
    private sorter : Sorter;
    private data;
    constructor(sorter : Sorter, data : any ) {
        this.sorter = sorter;
        this.data = data;
    } 

    sort(){
       return this.sorter.sort(this.data);
    }
}
