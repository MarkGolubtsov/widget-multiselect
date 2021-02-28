export class WidgetItem {
    private readonly _value: string
    private _isSelected: boolean

    constructor(item: string, isSelected = false) {
        this._value = item;
        this._isSelected = isSelected;
    }

    get value() {
        return this._value;
    }

    get isSelected() {
        return this._isSelected
    }

    select() {
        this._isSelected = true;
    }

    unselect() {
        this._isSelected = false;
    }
}

