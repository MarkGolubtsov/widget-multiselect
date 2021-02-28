import {WidgetItem} from 'widget/WidgetItem';
import {Filter, filtersAction} from 'widget/store/filter';
import {
    Actions,
    ActionType,
    ChangeSearchStringAction,
    SelectItemAction,
    UnselectItemAction,
    UseFilterAction
} from 'widget/store/actions';

export const DEFAULT_SEARCH_STRING = '';

export type WidgetState = {
    items: WidgetItem[],
    selectedItems: WidgetItem[],
    filteredItems: WidgetItem[],
    filter: Filter,
    searchString: string
};

export const getDefaultState = (items: string[], selectedItems: string[]): WidgetState => {

    const widgetItems = items.map(item => {
        return new WidgetItem(item, !!selectedItems.find(selected => selected === item));
    });

    const widgetSelectedItems = selectedItems.map(item => {
        const itemFromBaseArray = widgetItems.find(widgetItem => widgetItem.value === item);
        if (itemFromBaseArray) {
            return itemFromBaseArray;
        } else {
            throw new Error(`Selected item = '${item}' isn't exits in items!`);
        }
    });

    return {
        items: widgetItems,
        selectedItems: widgetSelectedItems,
        filteredItems: filtersAction[Filter.NONE](widgetItems),
        searchString: DEFAULT_SEARCH_STRING,
        filter: Filter.NONE
    }
};

export const widgetReducer = (state: WidgetState, action: Actions) => {
    switch (action.type) {
        case ActionType.CHANGE_SEARCH_STRING:
            return processChangeSearchString(state, action);
        case ActionType.USE_FILTER:
            return processChangeFilter(state, action);
        case ActionType.SELECT_ITEM:
            return processSelectItem(state, action);
        case ActionType.UNSELECT_ITEM:
            return processUnselectItem(state, action);
        default:
            return state;
    }
};

const processChangeSearchString = (state: WidgetState, action: ChangeSearchStringAction): WidgetState => {
    const items = filtersAction[state.filter](state.items, action.searchString);
    return {
        ...state,
        searchString: action.searchString,
        filteredItems: items
    };
}

const processChangeFilter = (state: WidgetState, action: UseFilterAction): WidgetState => {
    const items = filtersAction[action.filter](state.items, state.searchString);
    return {
        ...state,
        filter: action.filter,
        filteredItems: items
    };
}

const processSelectItem = (state: WidgetState, action: SelectItemAction): WidgetState => {
    action.item.select();
    const selectedItems = state.selectedItems.concat(action.item);
    return {
        ...state,
        selectedItems
    }
}

const processUnselectItem = (state: WidgetState, action: UnselectItemAction): WidgetState => {
    action.item.unselect();
    const selectedItems = state.selectedItems.filter(selectedItem => selectedItem.value !== action.item.value);
    return {
        ...state,
        selectedItems
    }
}