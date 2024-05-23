let pages = 1;
const after = document.getElementById('after');
const before = document.getElementById('before');

const contenedor = document.getElementById('contenedor');

let change = document.getElementById('cambio');
let change2 = document.getElementById('cambio2');
let change3 = document.getElementById('cambio3');
let change4 = document.getElementById('cambio4');
let change5 = document.getElementById('cambio5');


// if(pages>1){
//     after.addEventListener('click', function(){
//         console.log(change)
//          change.classList.remove("cambio");
//          change.classList.add("derecha");
//     })

// }
// before.addEventListener('click', function(){
//     console.log(change)
//      change.classList.remove();
//      change.classList.add("izquierda");
// })
Swal.fire({
    title: "HI!!!!! if you have put your git hub userNAMe",
    input: "text",
    inputAttributes: {
      autocapitalize: "off"
    },
    showCancelButton: true,
    confirmButtonText: "Look up",
    showLoaderOnConfirm: true,
    preConfirm: async (login) => {
      try {
        const githubUrl = `https://api.github.com/users/${login}`;
        const response = await fetch(githubUrl);
        if (!response.ok) {
          return Swal.showValidationMessage(`${JSON.stringify(await response.json())}`);
        }
        return response.json();
      } catch (error) {
        Swal.showValidationMessage(`
          Request failed: ${error}
        `);
      }
    },
    allowOutsideClick: () => !Swal.isLoading()
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire({
        title: `${result.value.login}'s avatar`,
        imageUrl: result.value.avatar_url
      });

    const unlink = document.getElementById('Unlink')  
    const iconURL = result.value.avatar_url; // Convierte el canvas a una URL de imagen
       const link = document.createElement('link');
        link.rel = 'icon';
        link.href = iconURL;
        // document.head.appendChild(link);
        document.head.replaceChild(link, unlink)

    }
  });


after.addEventListener('click', () =>{
    if(pages < 1000){
        
        pages += 1 ;
        chargeMovies();
        // change.classList.remove("izquierda");
        // change2.classList.remove("izquierda2");
        // change3.classList.remove("izquierda3");
        // change4.classList.remove("izquierda4");
        // change5.classList.remove("izquierda5");
        if(change.attributes.classList=true){
            //aqui aprovechare y hare una animacion corporativa se podria decir jeejje 
            //1
            change.classList.remove("izquierda");
            change.classList.add("derecha");
            //2
            change2.classList.remove("izquierda2");
            change2.classList.add("derecha2");
            //3
            change3.classList.remove("izquierda3");
            change3.classList.add("derecha3");
            //4
            change4.classList.remove("izquierda4");
            change4.classList.add("derecha4");
            //5
            change5.classList.remove("izquierda5");
            change5.classList.add("derecha5");
            
            scrollToSection();
            
            // console.log(change)
            // console.log()
        }
    }
})
before.addEventListener('click', () =>{
    if(pages > 1){
        pages -= 1 ;
        chargeMovies();
        //1
        change.classList.remove("derecha");
        change.classList.add("izquierda");
        //2
        change2.classList.remove("derecha2");
        change2.classList.add("izquierda2");
        //3
        change3.classList.remove("derecha3");
        change3.classList.add("izquierda3");
        //4
        change4.classList.remove("derecha4");
        change4.classList.add("izquierda4");
        //5
        change5.classList.remove("derecha5");
        change5.classList.add("izquierda5");
        

        scrollToSection();
        // console.log(change);

    }
})

const chargeMovies = async() => {
    
    try{
       const respons =  await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=8799f7e10249a43c7398705ca2282cc6&page=${pages}`);    //&language=es-ES, 
    //    console.log(respons)

  //     https://api.themoviedb.org/3/movie/popular?api_key=8799f7e10249a43c7398705ca2282cc6

        if(respons.status === 200){
            const datos = await  respons.json();

            let movies = '';
            datos.results.forEach(pelicula => {
               console.log(pelicula);

            movies += ` 
                <div class="pelicula">
                    <img class="poster" src="https://image.tmdb.org/t/p/w500/${pelicula.poster_path}">
                <!-- <div class='overview'><p>${pelicula.overview}</p></div> -->
                </div>

                <h1 class="titulo">${pelicula.title}</h1>
                `;
            });
            document.getElementById('contenedor').innerHTML=  movies; 
        }
        else{console.log("url movie not found")}    
    }
    catch(error){
        console.log('error');
    }
}
chargeMovies();

function scrollToSection() {
    contenedor.scrollTo({
        top: -500, 
        behavior: 'smooth' 
    });
}

