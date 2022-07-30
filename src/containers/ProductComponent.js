import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import {Card,Button} from "react-bootstrap"


const ProductComponent = () => {
  const products = useSelector((state) => state.allBlogs.blogs);
  const renderList = products.map((product) => {
    const { id, Title, Image, Subtitle } = product;
    return (
        <div className="col-md-4 col-sm-6" key={id}>
        <Link to={`/${id}`}>
    <Card key={id}>
    <Card.Img src={Image}/>
    <Card.Body>
    <div className='d-flex justify-content-between text'>
            <p>Posted On October 6 2021</p>
            <p><i></i>563 Views</p>
        </div>
        <Card.Title>
            {Title}
        </Card.Title>
        <Card.Text>
            {Subtitle}
        </Card.Text>
      
    </Card.Body>
</Card>
        </Link>
</div>
     
    );
  });
  return <>{renderList}</>;
};

export default ProductComponent;
