import React from 'react';
import {Col, Row} from 'antd';
import {CloseOutlined} from '@ant-design/icons';

type SelectedItemsProps = {
    items: string[],
    onDelete: (item: string) => void
}

export const SelectedItems = ({items, onDelete}: SelectedItemsProps) => {
    return (
        <div className={'selected-items'}>
            <Row>
                <Col span={24}>
                    Selected items:
                </Col>
            </Row>
            <Row>
                <Col span={24}>
                    <Row gutter={[12, 12]}>
                        {items.map(item =>
                            <Col key={item} span={3}>
                                {item} <CloseOutlined onClick={() => onDelete(item)}/>
                            </Col>
                        )}
                    </Row>
                </Col>
            </Row>
        </div>
    )
}