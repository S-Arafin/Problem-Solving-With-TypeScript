// Problem 32: Throttle Function  [Medium]
// Description: Write a throttle(fn, limit) function that ensures fn is called at most once every limit milliseconds.
// Example:
// const throttledScroll = throttle(onScroll, 200);// Fires at most once every 200ms during scroll
// Hint: Track the last call time with Date.now().

function throttle(fn: Function, limit: number){
    let lastCallAt = 0;

    return function(...args: any[]){
        const now = Date.now();
        if(now - lastCallAt>=limit){
            fn(...args);
            lastCallAt = now;
        }
    }
}

function onScroll(){
    console.log(`${new Date().toLocaleTimeString()}`);
}

const throttledScroll = throttle(onScroll, 100);
console.log('go');
setInterval(()=>{
    throttledScroll();
}, 500)