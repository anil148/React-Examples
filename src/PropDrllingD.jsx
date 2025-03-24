import { useContext } from "react";
import { UserContext } from "./PropDrllingA";

function PropDrllingD(props){

    const name = useContext(UserContext);
 console.log(name);
    return (<>
        <div className="box">
        <h1>Component D</h1>

<p>`Logged in {props.user}`</p>
<p>{`Logged user context in ${name}`}</p>
    </div>
    </>);

}
export default PropDrllingD;