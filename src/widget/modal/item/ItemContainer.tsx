import React from 'react';
import {Row} from 'antd';
import {useStore} from 'widget/modal/SelectModal';
import {selectItem, unselectItem} from 'widget/store/actions';
import {Item} from 'widget/modal/item/Item';
import {MAX_COUNT_SELECTED_ITEMS} from 'widget/constants';

type ItemProps = {
    index: number,
    style: React.CSSProperties
}

export const ItemContainer = ({index, style}: ItemProps) => {
    const [widgetStore, dispatch] = useStore();
    const item = widgetStore.filteredItems[index];
    const disabled = widgetStore.selectedItems.length >= MAX_COUNT_SELECTED_ITEMS;

    const onChange = () => {
        const action = item.isSelected ? unselectItem : selectItem;
        dispatch(action(item));
    }

    return (
        <Row style={style} key={item.value + index}>
            <Item value={item.value} onChange={onChange} disabled={disabled} isSelected={item.isSelected}/>
        </Row>
    )
}
