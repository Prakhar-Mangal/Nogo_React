import React from 'react'
import { Router, Link, navigate } from "@reach/router";
import { Card } from 'antd';
import { Col, Container, Row } from 'react-bootstrap'
import { myStore } from './Store'


export default function Home() {
    return (
        <div>
            <Categories />
        </div>
    )
}

const Categories = () => {
    const { Meta } = Card;
    const categoryData = myStore.useState(s => s.nogozoData);
    
    return (
        <Row>
            {categoryData.map((d,id) =>
                <Col md={4} ><Card
                    onClick={()=>navigate('/shops/'+id)}
                    hoverable
                    className="mx-auto my-2"
                    style={{ width: 240 }}
                    cover={<img alt="example" src={d.url} />}
                >
                    <Meta title={d.title} />
                </Card></Col>
            )}
        </Row>
    );
};
