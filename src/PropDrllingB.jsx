import PropDrllingC from "./PropDrllingC";
function PropDrllingB(props){
    return (<>
        <div className="box">
        <h1>Component B</h1>
        <PropDrllingC user={props.user}/>
    </div>
    </>);

}
export default PropDrllingB;