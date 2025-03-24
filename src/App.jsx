import Header from './Header.jsx'
import Footer from './Footer.jsx'
import Food from './Food.jsx'
import Card from './Card.jsx'
import Button from './Button/Button.jsx'
import Student from './Student.jsx'
import UserGreeting from './UserGreeting.jsx'
import List from './List.jsx'
import Button_e from './Button_e.jsx'
import ProfilePicture from './ProfilePicture.jsx'
import Mycomponent from './Mycomponent.jsx'
import Counter from './Counter.jsx'
import OnChangeEventEx from './OnChangeEventEx.jsx'
import ColorPicker from './ColorPicker.jsx'
import UseStateString from './UseStateString.jsx'
import UpdateArrayContent from './UpdateArrayContent.jsx'
import UpdateArrayObject from './UpdateArrayObject.jsx'
import ToDoList from './ToDoList.jsx'
import UseEffectEx from './UseEffectEx.jsx'
import UseEffectEx2 from './UseEffectEx2.jsx'
import UseEffectEx_DigitalClock from './UseEffectEx_DigitalClock.jsx'
import UseContextEx from './UseContextEx.jsx'
import PropDrllingA from './PropDrllingA.jsx'; 
import UseRefEx from './UseRefEx.jsx'; 
function App(){
  var fruits = [{id:1,name:"apple",calories:"apple"},
    {id:2,name:"banana",calories:125},
    {id:3,name:"grapes",calories:90},
    {id:4,name:"coconut",calories:50},
   { id:5,name:"pineapple",calories:65}]
   var vegetables = [{id:1,name:"potato",calories:95},
    {id:2,name:"brinjal",calories:125},
    {id:3,name:"bittergourd",calories:90},
    {id:4,name:"onion",calories:50},
   { id:5,name:"tomatos",calories:65}]
  return(
<>
{/*<Header/>
 <Food/>
<Card/>
<Button/>

<Student name="Spongebob" age={30} isStudent={false}/>
<Student name="Patrick" age={40} isStudent={false}/> 
<UserGreeting isUserLoggedIn={true} />
<Student /> 
{fruits.length >0 && <List  category ="fruits"/>}
{vegetables.length >0 &&  <List items ={vegetables} category ="vegetables"/> } 

<Button_e/>
<ProfilePicture/>

<Mycomponent/>
<Counter/>
<OnChangeEventEx/>
<ColorPicker/>
<UseStateString/>
<UpdateArrayContent/>
<UpdateArrayObject/>
<ToDoList/>
<UseEffectEx/>
<UseEffectEx2/>
<UseEffectEx_DigitalClock/> 
 <UseContextEx/> 
 <PropDrllingA/>
 */}
<UseRefEx/>

<Footer/>
</>
  );
}
export default App