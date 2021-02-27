import React, {useState} from 'react';
import {Button, Col, Row} from 'antd';
import {SelectModal} from 'widget/modal/SelectModal';
import {MAX_COUNT_SELECTED_ITEMS} from 'widget/constants';

import 'antd/dist/antd.css';
import {SelectedItems} from 'widget/SelectedItems';

export type WidgetProps = {
    items: string[];
    selectedItems: string[];
    onChangeSelectItems: (items: string[]) => void;
};

export const Widget = ({items, selectedItems, onChangeSelectItems}: WidgetProps) => {

    if (selectedItems.length > MAX_COUNT_SELECTED_ITEMS) {
        throw new Error("Too many selected items!");
    }

    const [showModal, setShowModal] = useState<boolean>(false);

    const toggleModal = () => {
        setShowModal((prev) => !prev);
    }

    const onSave = (items: string[]) => {
        toggleModal();
        onChangeSelectItems(items);
    }

    const onCancel = () => {
        toggleModal();
    }

    const deleteSelectedItem = (item: string) => {
        onChangeSelectItems(selectedItems.filter(selectedItem => selectedItem !== item));
    }

    return (
        <div className={'widget'}>
            <Row>
                <Col span={24}>
                    <SelectedItems items={selectedItems} onDelete={deleteSelectedItem}/>
                </Col>
            </Row>
            <Row>
                <Col span={24}>
                    {showModal &&
                    <SelectModal selectedItems={selectedItems} items={items} onSave={onSave} onCancel={onCancel}/>}
                    <Button color={'blue'} onClick={toggleModal}>
                        Change
                    </Button>
                </Col>
            </Row>
        </div>
    )

}