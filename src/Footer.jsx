function Footer(){
    const styles ={position:'fixed'};
    return(
        <footer style={styles}>
        <p>&copy;{new Date().getFullYear()} Your website name </p>
        </footer>
    );
}

export default Footer