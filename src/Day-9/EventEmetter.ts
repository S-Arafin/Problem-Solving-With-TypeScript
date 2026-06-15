
// Problem 34: Event Emitter  [Medium]
// Description: Build a simple EventEmitter class with on(event, listener), emit(event, ...args), and off(event, listener) methods.
// Example:
// const emitter = new EventEmitter();emitter.on('greet', name => console.log('Hello ' + name));emitter.emit('greet', 'Sara'); // Hello Sara
// Hint: Store listeners in an object where keys are event names and values are arrays of functions.


class EventEmitter {
    events: Record<string, Function[]> = {};

    on(name: string, fn: Function) {
        if (!this.events[name]) {
            this.events[name] = [];
        }
        this.events[name].push(fn);
    }

    emit(name: string, ...args: any[]) {
        if (this.events[name]) {
            for (const fn of this.events[name]) {
                fn(...args);
            }
        }
    }

    off(name: string, fn: Function) {
        if (this.events[name]) {
            this.events[name] = this.events[name].filter((l) => l !== fn);
        }
    }
}

const emitter = new EventEmitter();

const greet = (name: string) => console.log('Hello ' + name);

emitter.on('greet', greet);
emitter.emit('greet', 'Sara'); 

emitter.off('greet', greet);
emitter.emit('greet', 'John');