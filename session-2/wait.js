function wait(ms) {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            if (ms < 0 || isNaN(ms)) {
                reject (new Error('Invalid time duration'));
            } else {
                resolve();
            }
        }, ms );
    });
}
