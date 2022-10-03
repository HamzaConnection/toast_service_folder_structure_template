
/**
 * Used to quick get and set value in the browsers local storage
 * @returns exposed methods, get and set
 */
const LocalCache = () => {
    /**
     * Gets an item from the local storage
     * @param key The key used to retrive the item.
     * @returns The requested item if it exsists.
     */
    const get = <T>(key: string): T | undefined => {
        const item = localStorage.getItem(key);
        return item ? (JSON.parse(item) as T) : undefined;
    };

    /**
     * Sets an item in the local storage
     * @param key The key which the item should be accessed by
     * @param value The value that should be stored
     */
    const set = <T>(key: string, value: T): void => {
        const v = JSON.stringify(value);
        localStorage.setItem(key, v);
    };

    return {
        get,
        set,
    };
};

export default LocalCache;
