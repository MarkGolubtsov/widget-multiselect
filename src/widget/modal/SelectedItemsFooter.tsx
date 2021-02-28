import React from 'react';
import {useStore} from 'widget/modal/SelectModal';
import {SelectedItems} from 'widget/SelectedItems';
import {unselectItem} from 'widget/store/actions';


export const SelectedItemsFooter = () => {
    const [widgetStore, dispatch] = useStore();

    const values = widgetStore.selectedItems.map(item => item.value);

    const handleUnselectItem = (value: string) => {
        const item = widgetStore.selectedItems.find(item => item.value === value);
        item && dispatch(unselectItem(item));
    }

    return <SelectedItems items={values} onDelete={handleUnselectItem}/>
}