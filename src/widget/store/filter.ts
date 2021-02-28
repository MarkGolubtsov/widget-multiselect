import {WidgetItem} from 'widget/WidgetItem';
import {DEFAULT_SEARCH_STRING} from 'widget/store/store';

export enum Filter {
    NONE = 'No filter',
    MORE_10 = '>10',
    MORE_100 = '>100',
    MORE_200 = '>200',
    MORE_300 = '>300',
    MORE_400 = '>400',
    MORE_500 = '>500',
    MORE_600 = '>600',
    MORE_700 = '>700',
    MORE_800 = '>800',
    MORE_900 = '>900',
}

const getFilterAction = (moreThen: number) => {
    return (items: WidgetItem[], searchString = DEFAULT_SEARCH_STRING) => {
        if (searchString) {
            return items.slice(moreThen, items.length).filter(item => item.value.includes(searchString));
        } else {
            return items.slice(moreThen, items.length);
        }
    }
};

const emptyFilter = (items: WidgetItem[], searchString = DEFAULT_SEARCH_STRING) => {
    if (searchString) {
        return items.filter(item => item.value.includes(searchString));
    } else {
        return items;
    }
};

interface FiltersActions {
    [key: string]: (items: WidgetItem[], searchString?: string) => WidgetItem[];
}

export const filtersAction: FiltersActions = {
    [Filter.NONE]: emptyFilter,
    [Filter.MORE_10]: getFilterAction(10),
    [Filter.MORE_100]: getFilterAction(100),
    [Filter.MORE_200]: getFilterAction(200),
    [Filter.MORE_300]: getFilterAction(300),
    [Filter.MORE_400]: getFilterAction(400),
    [Filter.MORE_500]: getFilterAction(500),
    [Filter.MORE_600]: getFilterAction(600),
    [Filter.MORE_700]: getFilterAction(700),
    [Filter.MORE_800]: getFilterAction(800),
    [Filter.MORE_900]: getFilterAction(900),
}