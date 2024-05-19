//import filtroBusqueda from "./filter";
const d = document;
filtroBusqueda();

function ampliarImagen(img){
    img.classList.toggle('imagen-ampliada');
}


function filtroBusqueda(){
    d.addEventListener("keyup", e => {
        if (e.target.matches(".card-filter")) {
            const valorBusqueda = e.target.value.toLowerCase();
            d.querySelectorAll(".cargue").forEach(el => {
                const descripcion = el.querySelector(".filter-d").textContent.toLowerCase();
                if (descripcion.includes(valorBusqueda)) {
                    el.classList.remove("filter");
                } else {
                    el.classList.add("filter");
                }
            });
        } else {
            console.log("Algo está mal");
        }
    });
}

document.addEventListener("DOMContentLoaded", function() {
    const video = document.querySelector('.video');
    video.addEventListener('loadedmetadata', function() {
        const canvas = document.createElement('canvas');
        canvas.width = video.videoWidth;
        canvas.height = video.videoHeight;
        const ctx = canvas.getContext('2d');
        ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
        const imgData = canvas.toDataURL('image/png');
        video.setAttribute('poster', imgData);
    });
});