import {WidgetItem} from 'widget/WidgetItem';
import {Filter, filtersAction} from 'widget/store/filter';
import {Actions, ActionType, ChangeSearchStringAction, UseFilterAction} from 'widget/store/actions';

export const DEFAULT_SEARCH_STRING = '';

export type WidgetState = {
    items: WidgetItem[],
    selectedItems: WidgetItem[],
    showItems: WidgetItem[],
    filter: Filter,
    searchString: string
};

export const getDefaultState = (items: string[], selectedItems: string[]): WidgetState => {

    const widgetItems = items.map(item => {
        return new WidgetItem(item, !!selectedItems.find(selected => selected === item));
    });

    const widgetSelectedItems = selectedItems.map(item => new WidgetItem(item, true));

    return {
        items: widgetItems,
        selectedItems: widgetSelectedItems,
        showItems: filtersAction[Filter.NONE](widgetItems),
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
        default:
            return state;
    }
};


const processChangeSearchString = (state: WidgetState, action: ChangeSearchStringAction): WidgetState => {
    const items = filtersAction[state.filter](state.items, action.searchString);
    return {
        ...state,
        searchString: action.searchString,
        showItems: items
    };
}

const processChangeFilter = (state: WidgetState, action: UseFilterAction): WidgetState => {
    const items = filtersAction[action.filter](state.items, state.searchString);
    return {
        ...state,
        filter: action.filter,
        showItems: items
    };
}