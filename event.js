
class TicketType {
    constructor(name, price){
        this.name= name;
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
        addAvailableTickets = function(ticketName, price){
            this.ticketName = ticketName;
            this.price = price;
            this.availableTickets.push(ticketName, name);
            //console.log(this.availableTickets);
     }
      
        allTickets(){
        for(let i=0; i < this.availableTickets.length; i++);
        return (`All tickets: ${this.availableTickets[i]}`);
       // need to finish this fucntion 

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