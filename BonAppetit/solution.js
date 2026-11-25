function bonAppetit(bill, k, b) {
    // k, item anna doesn't eat
    // b amount of money anna contributed
    // bill - the array of the cost of items in the bill
    
    let charged = b;
    let actual = 0;
    let remove = new Set([k]);
    
    // filter anna's items out of brians order
    let briansOrder = bill.filter((_, index) => !remove.has(index));
    
    // add up brians bill
    for(let itemsCost in briansOrder) {
        actual += briansOrder[itemsCost];
    }
    
    if(actual / 2 == charged) {
        console.group('Bon Appetit');
    } else {
        console.log(charged - actual / 2 );
    }
}