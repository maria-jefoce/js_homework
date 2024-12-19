var services = {
    "стрижка": "60 грн",
    "гоління": "80 грн",
    "Миття голови": "100 грн"
    };

services['Розбити скло'] = "200 грн";

function extractPrice(value) {
    return parseInt(value.replace(/\D/g, ""), 10);
}

function price(){
    let sum = 0;
    for (const key in services) {
        const value = extractPrice(services[key])
        sum += value;
    }
    return sum;
}

function minPrice(){
    let min = Infinity;
    for (const key in services) {
        const value = extractPrice(services[key])
        if(value < min){
            min = value;
        }
    }
    return min;
}

function maxPrice(){
    let max = 0;
    for (const key in services) {
        const value = extractPrice(services[key])
        if(value > max){
            max = value;
        }
    }
    return max;
}

console.log('Total cost of provided services =', price(), 'грн');
console.log('Min price of provided services =', minPrice(), 'грн');
console.log('Max price of provided services =', maxPrice(), 'грн');