import { createContext } from "react";
import PropDrllingB from "./PropDrllingB";
import PropDrllingD from "./PropDrllingD";
export const UserContext = createContext();
function PropDrllingA(){
    const user = "Anil";
    return (<>
    <div className="box">
        <h1>Component A</h1>
        <p> {`Hello ${user}`}</p>
        <UserContext.Provider value={user}> 
            {/* <PropDrllingC user={user}/> */}
            <PropDrllingD/> 
        </UserContext.Provider>
        
    </div>
    </>);

}
export default PropDrllingA;