// function List(){
import PropTypes from "prop-types";
import propTypes from "prop-types";
    function List(props){
// const fruits = ["apple","banana","grapes","coconut","pineapple"]
// var fruits = [{id:1,name:"apple",calories:95},
//     {id:2,name:"banana",calories:125},
//     {id:3,name:"grapes",calories:90},
//     {id:4,name:"coconut",calories:50},
//    { id:5,name:"pineapple",calories:65}]
var fruits = props.items;
var category = props.category;

// const listItems = fruits.map(fruit => <li>{fruit}</li>)
// fruits.sort((a,b) => a.name.localeCompare(b.name));//Alphabetical
// fruits.sort((a,b) => b.name.localeCompare(a.name));//Reverse Alphabetical
// fruits.sort((a,b) => a.calories-(b.calories));//Numeric
// fruits = fruits.filter(fruit=>fruit.calories>90);
// fruits.sort((a,b) => b.calories-(a.calories));//Reverse Numeric
const listItems = fruits.map(fruit => <li key={fruit.id}>{fruit.name}:&nbsp;<b>{fruit.calories}</b></li>);
return(
<>
<h3 className ="list-category">{category}</h3>
<ol className ="list-item">{listItems}</ol>
</>

);
}
List.defaultProps={
 category:"Category",
 items:[],
}
List.propTypes ={
    category:PropTypes.String,
    items:PropTypes.arrayOf(PropTypes.shape({id:PropTypes.number,
        name:PropTypes.string,
        calories:PropTypes.number
    })),
}
export default List