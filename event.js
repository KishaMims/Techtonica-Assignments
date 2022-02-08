
class TicketType {
    constructor(type, price){
        this.type= type;
        this.price = price;
    }

}

//let newTicket = new TicketType("Titanic", 76);

class Event{
    constructor(name, description){
        this.name = name;
        this.description = description;
        this.availableTickets = []; 
    }
        addAvailableTickets = function(type, price){
            this.type = type;
            this.price = price;
            this.availableTickets.push(type, price);
            //console.log(this.availableTickets);
     }
      
        allTickets = function(){
        for(let i=0; i < this.availableTickets.length; i++);
        return (`All tickets: ${this.availableTickets}[i]`);
       // need to finish this fucntion 
        //All tickets: 1. Orchestra ($300) 2. Mezzanine ($200) 3. Balcony ($100)
        //console.log(eventOjb1.allTickets());
    }
}



const eventObj1 = new Event(
    'KLOS Golden Gala',
    'An evening with hollywood vampires'
);

eventObj1.addAvailableTickets("human", 299);
eventObj1.addAvailableTickets("vampire", 99);



const eventObj2 = new Event(
    'Skillet & Sevendust', 
    'Victorius war tour'
);

eventObj2.addAvailableTickets("General Admission", 25);
eventObj2.addAvailableTickets("Floor Seating", 80);

const eventObj3 = new Event(
    'Jenny Lewis',
    'On the line tour 2019'
);


eventObj3.addAvailableTickets("Orchestra", 300);
eventObj3.addAvailableTickets("Mezzanine", 200);
eventObj3.addAvailableTickets("Balcony", 100);


const eventArray = [];


eventArray.push(eventObj1);
eventArray.push(eventObj1, eventObj2, eventObj3);



console.log(eventArray);

document.addEventListener('DOMContentLoded', () => {
    let html = '';
    eventArray.forEach((item) => {
        html += `<li>${item.name} - ${item.description}`;
    });
    document.querySelector('#event').innerHTML = html;
});


console.log(eventObj1.allTickets());
console.log(eventObj2.allTickets());
console.log(eventObj3.allTickets());
