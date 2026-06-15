// Problem 31: Debounce Function  [Medium]
// Description: Write a debounce(fn, delay) function that delays invoking fn until after delay milliseconds have elapsed since the last time it was called.
// Example:
// const debouncedSearch = debounce(search, 300);// Fires only once after user stops typing for 300ms
// Hint: Use clearTimeout and setTimeout.

function debounce(fn:Function, delay: number ) {
    let timer: any;
    return function(...args: any[]){
        clearTimeout(timer);
        timer = setTimeout(()=>{
            fn(...args);
        }, delay
    )
    }

}

function search(str: string){
    console.log(`${str}`);
}
const debounceSearch = debounce(search, 3000)
debounceSearch("ka")
debounceSearch("kal")
debounceSearch("kala")