import PropDrllingD from "./PropDrllingD";
function PropDrllingC(props){

    return (<>
        <div className="box">
        <h1>Component C</h1>
        <PropDrllingD user={props.user}/>

    </div>
    </>);

}
export default PropDrllingC;