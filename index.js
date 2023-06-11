function receivesAFunction(callback){
    callback();
    return 'a';
}

function returnsANamedFunction(){
    const subtract = (a, b) => a - b;
    return subtract;
}

function returnsAnAnonymousFunction(){
    return function(){
        console.log('I am doing ok.')
    }
}