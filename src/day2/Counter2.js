class Counter {
    constructor(init) {
        this.init = init;
        this.presentCount = init;
    }

    increment() {
        this.presentCount += 1;
        return this.presentCount;
    }

    decrement() {
        this.presentCount -= 1;
        return this.presentCount;
    }

    reset() {
        this.presentCount = this.init;
        return this.presentCount;
    }
}

const createCounter = function (init) {
    return new Counter(init);
};

const counter = createCounter(6);
console.log(counter.increment());
console.log(counter.reset());
console.log(counter.decrement());

/**
 * const counter = createCounter(5)
 * counter.increment(); // 6
 * counter.reset(); // 5
 * counter.decrement(); // 4
 */