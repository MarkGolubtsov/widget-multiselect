export class StorageService<T> {
    private readonly _name: string;

    constructor(name: string) {
        this._name = name;
    }

    getValueIfExist(): T | undefined {
        const savedValue = localStorage.getItem(this._name);
        if (savedValue) {
            return JSON.parse(savedValue) as T;
        } else {
            return undefined;
        }
    }

    setValue(value: T) {
        localStorage.setItem(this._name, JSON.stringify(value));
    }
}