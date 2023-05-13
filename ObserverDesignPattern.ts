// Implement Notify me by update that you see in Amazon's product description 

//-------------------------------------------------------------------------------------------// 

/**
 * Features 
 * 1. When the user clicks on that, the user should get a notification when the product is back in stock  
 * 
 * Design 
 * 1. Product back in stock --> Trigger/Publish an event 
 * 2. For each click on the "Notify Me" --> Add a subscriber to the event above 
 * 3. Once the subscriber gets the mail, delete the subscription 
 * 
 */  

interface IObservable{
    AddObserver(observer: Observer)
    RemoveObserver(observer: Observer)
    NotifyObservers()
}

interface IObserver{
    OnChange()
}

class Observable implements IObservable{
    private readonly ObserverList: [Observer]

    AddObserver(observer: Observer) {
        this.ObserverList.push(observer)
  
    }
    RemoveObserver(observer: Observer) {
        this.ObserverList.find((obs)=> obs == observer)
    }
    NotifyObservers() {
        this.ObserverList.forEach(observer => observer.OnChange())
    }

}

class Observer implements IObserver{

    OnChange() {
        // Write custom on change logic
    }

} 


