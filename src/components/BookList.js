import React  from 'react';
import Book from './Book'
import { Row, Col } from 'reactstrap';
const BookList = ({books})=>{
        return(
            <div className = "book-list p-5">
                <Row>
                    {books.map((book,i)=>{
                        return (
                            <Col key={i} xs="4">
                                <Book key = {i} name = {book.name}
                                    image = {book.image}
                                    price = {book.price}
                                    description = {book.description}
                                />
                            </Col>
                        )
                    })}
                </Row>
            </div>      
        )
}
export default BookList;