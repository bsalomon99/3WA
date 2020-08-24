for (let i = 1; i <= 100; i++) {
    console.log(i);
    if (i % 3 === 0) {
        console.log('fizz');
    }
    if (i % 5 === 0) {
        console.log('buzz');
    }
    
}

for (let i = 100; i <= 200; i++) {
    console.log(i);
    
    if (i % 3 === 0 && i % 5 === 0) {
        console.log('fizzbuzz');
    }
    else if (i % 3 === 0) {
        console.log('fizz');
    }
    else if (i % 5 === 0) {
        console.log('buzz');
    }
}