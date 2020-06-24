import React from 'react';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, Media
} from 'reactstrap';


    function RenderDish({dish}) {
        if (dish != null) {

            const comments = dish.comments.map((comment) => {
                return (
                    <Media tag="li">
                        <div key={comment.id} className="comment-box" style={{ paddingTop: 35 },{ paddingBottom: 35 }}>
                            <div>{comment.comment}</div>
                            <div>--{comment.author},  {new Intl.DateTimeFormat('en-US', {year: 'numeric', month: 'short' , day:'2-digit'}).format(new Date(Date.parse(comment.date)))}</div>
                        </div>
                    </Media>
                )
            });

            return(
                <>
                <div className="container">
                <div className="row">
                    <div className="col-12 col-md-5 m-1">
                        <Card>
                            <CardImg top src={dish.image} alt={dish.name} />
                            <CardBody>
                                <CardTitle>{dish.name}</CardTitle>
                                <CardText>{dish.description}</CardText>
                            </CardBody>
                        </Card>
                    </div>
        
                    <div className="col-12 col-md-5 m-1">
                        <h3>Comments</h3>
                        <Media list style={{ paddingLeft: 0 }}>
                            {comments}
                        </Media>
        
                    </div>
                </div>
                </div>
                </>
            );
        }
        else
            return(
                <div></div>
            );
    }

const DishDetail = (props) => {
    return (
        <RenderDish dish={props.dish} />
    )
}

export default DishDetail;