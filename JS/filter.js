const d = document;

function filtroBusqueda(){
    d.addEventListener("keyup", e => {
        console.log(e);
        if (e.target.classList.contains("card-filter")) {
            console.log(e.key);
        } else {
            console.log("Algo está mal");
        }
    });
}

export default filtroBusqueda;