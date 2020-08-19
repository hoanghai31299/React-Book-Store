import React from 'react';
import FilterBook from './FilterBook'
import BookList from './BookList';
import axios from 'axios'
class BookSection extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            books: [],
            searchText: '',
            filter:''
        }
    }
    componentWillMount(){
        axios.get("http://localhost:8000/api/books").then(res=>{
            this.setState((oldState)=>{
                return {
                    books: res.data.books
                }
            })
        })
    }
    handleSearch = ()=>{
        console.log("hello...")
        axios.get("http://localhost:8000/api/books/search",
        {
            params:{
                name:this.state.searchText
            }
        })
        .then(res=>{
            this.setState((oldState)=>{
                return {
                    books: res.data.book
                }
            })
        })
    }
    render(){
        let books = [...this.state.books];
        if(this.state.filter === "cheapest"){
            books = books.sort((a,b)=>{
                return a.price - b.price
            })
        }else if (this.state.filter === "highest"){
            books = books.sort((a,b)=>{
                return  b.price - a.price
            })
        } 
        return (
            <div className = "book-section container">
                <FilterBook
                handleSearch = {this.handleSearch}
                handleChange = {e=>this.setState({
                    searchText: e.target.value
                })}
                handleChangeFilter = {e=>{
                  this.setState({
                        filter: e.target.value
                    }
                      )}}  />
                <BookList books = {books.splice(0,12)} />
            </div>
        )    
    }
}
export default BookSection;