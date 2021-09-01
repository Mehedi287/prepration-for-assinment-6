const getPhoto = () => {
    fetch(`https://jsonplaceholder.typicode.com/photos`)
        .then(res => res.json())
        .then(data => setPhoto(data))
}
getPhoto()
// set img ==-------------------------------
const setPhoto = (photos) => {
    console.log(photos);
    const cardContainer = document.getElementById('card-container')
    for (const photo of photos) {
        console.log(photo);
        const div = document.createElement('div');
        div.classList.add('col')
        div.innerHTML = `
        <div class="card mx-auto mt-4" style="width: 18rem;">
            <div onclick="details()">
               <img   id="img"   " src="${photo.thumbnailUrl}" class="card-img-top" alt="...">
            </div>
            <div class="card-body">
               <h5 class="card-title"> ${photo.title}</h5>
            </div>
        </div>
    `;
        cardContainer.appendChild(div)
    }
}
// details ----------------------------
const details = () => {
    fetch(`https://jsonplaceholder.typicode.com/photos`)
        .then(res => res.json())
        .then(data => display(data[0]))
}
const display = imgs => {
    console.log(imgs);

    const details = document.getElementById('detailImg');
    const div = document.createElement('div');
    div.innerHTML = `
        <div class="d-flex ">
                    <img src="${imgs.thumbnailUrl}" alt="">
                    <img src="" alt="">
        </div>
        
        `;
    details.appendChild(div)

}
