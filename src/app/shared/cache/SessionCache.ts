
/**
 * Used to quick get and set value in the browsers session storage
 * @returns exposed methods, get and set
 */
const SessionCache = () => {
    /**
     * Gets an item from the session storage
     * @param key The key used to retrive the item.
     * @returns The requested item if it exsists.
     */
    const get = <T>(key: string): T | undefined => {
        const item = sessionStorage.getItem(key);
        return item ? (JSON.parse(item) as T) : undefined;
    };

    /**
     * Sets an item in the session storage
     * @param key The key which the item should be accessed by
     * @param value The value that should be stored
     */
    const set = <T>(key: string, value: T): void => {
        const v = JSON.stringify(value);
        sessionStorage.setItem(key, v);
    };

    return {
        get,
        set,
    };
};

export default SessionCache;
