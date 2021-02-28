import React, {createContext, useContext, useReducer} from 'react';
import {Col, Modal, Row} from 'antd';
import {getDefaultState, widgetReducer, WidgetState} from 'widget/store/store';
import {Actions} from 'widget/store/actions';
import {SearchInput} from 'widget/modal/SearchInput';
import {FilterSelect} from 'widget/modal/FilterSelect';
import {AvailableItems} from 'widget/modal/AvailableItems';
import {SelectedItemsFooter} from 'widget/modal/SelectedItemsFooter';


const WidgetStore = createContext<[WidgetState, React.Dispatch<Actions>]>([getDefaultState([], []), () => null]);

WidgetStore.displayName = 'SelectModal store';

export const useStore = () => useContext(WidgetStore);

export type SelectModalProps = {
    items: string[];
    selectedItems: string[];
    onSave: (items: string[]) => void;
    onCancel: () => void;
};

export const SelectModal = ({items, selectedItems, onCancel, onSave}: SelectModalProps) => {

    const [widgetState, dispatch] = useReducer(widgetReducer, getDefaultState(items, selectedItems));

    const handleSave = () => {
        const selectedItems = widgetState.selectedItems.map(item => item.value);
        onSave(selectedItems);
    }

    return (
        <WidgetStore.Provider value={[widgetState, dispatch]}>
            <Modal okText={'Save'}
                   visible={true}
                   onCancel={onCancel}
                   onOk={handleSave}
                   centered={true}
                   width={600}
                   cancelButtonProps={{danger: true}}
                   title={'Select items'}>
                <Row gutter={[12, 12]}>
                    <Col span={12}>
                        <SearchInput/>
                    </Col>
                    <Col span={11} offset={1}>
                        <FilterSelect/>
                    </Col>
                    <Col span={24}>
                        <AvailableItems/>
                    </Col>
                </Row>
                <Row>
                    <Col span={24}>
                        <SelectedItemsFooter/>
                    </Col>
                </Row>
            </Modal>
        </WidgetStore.Provider>
    );
}