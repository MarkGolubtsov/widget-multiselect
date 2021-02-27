import {WidgetItem} from 'widget/WidgetItem';
import {Filter} from 'widget/store/filter';

export enum ActionType {
    CHANGE_SEARCH_STRING,
    SELECT_ITEM,
    UNSELECT_ITEM,
    USE_FILTER
}

export type Actions = ChangeSearchStringAction | SelectItemAction | UnselectItemAction | UseFilterAction

export interface ChangeSearchStringAction {
    type: ActionType.CHANGE_SEARCH_STRING,
    searchString: string
}

export interface SelectItemAction {
    type: ActionType.SELECT_ITEM,
    item: WidgetItem
}

export interface UnselectItemAction {
    type: ActionType.UNSELECT_ITEM,
    item: WidgetItem
}

export interface UseFilterAction {
    type: ActionType.USE_FILTER,
    filter: Filter
}

export const changeSearchString = (string: string): ChangeSearchStringAction => {
    return {
        type: ActionType.CHANGE_SEARCH_STRING,
        searchString: string
    }
}

export const changeFilter = (filter: Filter): UseFilterAction => {
    return {
        type: ActionType.USE_FILTER,
        filter
    }
}
