'use strict';   // Mode strict du JavaScript

let holidayList = ['Greece', 'Spain', 'France', 'UK', 'Ireland', 'Scotland'];

let favoriteFood = ['biscuits', 'sausage', 'bread', 'cheese', 'tomatoes', 'lettuce'];

function displayList (list) {
    
    document.write('<ul>');
    for ( let item of list) {
        document.write('<li>' + item + '</li>');
    }
    
    document.write('</ul>');
}

function addItem (list, item) {
    list.push(item);
}

addItem(holidayList, 'Italy');
displayList (holidayList);

addItem ( favoriteFood, 'pizza');
displayList (favoriteFood);



function removeItem (list, item) {
    let itemToBeRemoved = list.indexOf(item);
    
    if (itemToBeRemoved >= 0)  {
        list.splice(itemToBeRemoved, 1);
    }
    else {
        document.write('item does not exist');
    }
}
removeItem( holidayList,'Greece');
removeItem( favoriteFood,'biscuits');
displayList (holidayList);