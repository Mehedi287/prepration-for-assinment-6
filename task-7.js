

const getPhoto = () => {
    fetch(`https://jsonplaceholder.typicode.com/photos`)
        .then(res => res.json())
        .then(data => setPhoto(data))
}
getPhoto()
const setPhoto = (photos) => {
    console.log(photos);
    const cardContainer = document.getElementById('card-container')
    for (const photo of photos) {
        console.log(photo);
        const div = document.createElement('div');

        div.innerHTML = `
    <div class="card mx-auto mt-4" style="width: 18rem;">
        <img id="img" src="${photo.thumbnailUrl}" class="card-img-top" alt="...">
         <div class="card-body">
            <h5 class="card-title"> ${photo.title}</h5>

           
         </div>
    </div>
    `;
        cardContainer.appendChild(div)
    }


}

