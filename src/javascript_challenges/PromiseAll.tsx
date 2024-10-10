import React, { useEffect, useState } from 'react';

const promiseAllHandler = (promises: Promise<any>[]): Promise<any> => {
    return new Promise((resolve, reject) => {
        const results: Promise<any>[] = [];
        let completedPromises = 0;
        promises.forEach((promise, index) => {
            // Takes non promise values and handles them
            Promise.resolve(promise)
                .then((value) => {
                    // store the information in the correct index
                    results[index] = value;

                    // promise is completed, only count once
                    completedPromises += 1
                    if (completedPromises === promises.length) {
                        resolve(results);   
                    }
                })
                .catch(reject);
        })
    });
}

const PromiseAll = () => {
    const [promiseAll, setPromiseAll] = useState<any[]>([]);
    const testPromises = {
        // Value is already resolved to 42, just wraps in a promise
        intPromise: Promise.resolve(42),
        num: 32,
        dummyPromise: new Promise((resolve, reject) => {
            setTimeout(resolve, 100, 'fortnite')
        })
    };

    const values = Object.values(testPromises);
    
    // Convert non promises to promise
    const promiseArray = values.map(value => value instanceof Promise ? value : Promise.resolve(value));

    useEffect(() => {
        // Resolve all the promises
        const resolvePromises = async () => {
            return await promiseAllHandler(promiseArray);            
        };

        resolvePromises()
            .then(resolvedPromises => {
                setPromiseAll(resolvedPromises)
            })
            .catch(err => console.error(err));
    }, []);

    return (
        <div>
            <h2>Promises</h2>
            <p>Given the following promises:</p>
            {Object.entries(testPromises).map(([key, value]) => (
                <p key={key}>
                    <strong>{key}</strong>: {String(value)}
                </p>
            ))}
            <h2>Result</h2>
            <p>Resolving all promises results in an array of the following:</p>
            <p>
                {promiseAll.map((value) => (
                    <p>{value}</p>
                ))}
            </p>
        </div>
    );
};

export default PromiseAll;