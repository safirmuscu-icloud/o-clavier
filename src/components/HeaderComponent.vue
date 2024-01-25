<script>

document.addEventListener('DOMContentLoaded', function() {
  // Attend que la page soit entièrement chargée

  // Sélectionne l'élément que vous souhaitez animer
  var headerChild1 = document.querySelector('.header-child-1');

  // Ajoute une classe pour déclencher l'animation
  headerChild1.classList.add('animate-on-load');
});


</script>

<template>

  <div>
    
    <header id="header">

      <div class="header-child-1 animate-on-load">

        <div class="div-logo">
          <img src="../images/logo3.png" alt="logo">
        </div>

        <!-- <div class="moving-text">Votre agence de création de site web<span class="span-noir">------------------------------------------------------------</span>Votre agence de création de site web<span class="span-noir">--------------------------------------------------</span>Votre agence de création de site web<span class="span-noir">--------------------------------------------------</span>Votre agence de création de site web<span class="span-noir">--------------------------------------------------</span>Votre agence de création de site web<span class="span-noir">--------------------------------------------------</span>Votre agence de création de site web<span class="span-noir">--------------------------------------------------</span>Votre agence de création de site web<span class="span-noir">--------------------------------------------------</span>Votre agence de création de site web<span class="span-noir">--------------------------------------------------</span>Votre agence de création de site web<span class="span-noir">--------------------------------------------------</span>Votre agence de création de site web<span class="span-noir">--------------------------------------------------</span>Votre agence de création de site web<span class="span-noir">--------------------------------------------------</span>Votre agence de création de site web<span class="span-noir">--------------------------------------------------</span>Votre agence de création de site web<span class="span-noir">--------------------------------------------------</span>Votre agence de création de site web<span class="span-noir">--------------------------------------------------</span>Votre agence de création de site web<span class="span-noir">--------------------------------------------------</span>Votre agence de création de site web<span class="span-noir">--------------------------------------------------</span>Votre agence de création de site web<span class="span-noir">--------------------------------------------------</span>Votre agence de création de site web<span class="span-noir">--------------------------------------------------</span>Votre agence de création de site web<span class="span-noir">--------------------------------------------------</span>Votre agence de création de site web<span class="span-noir">--------------------------------------------------</span>Votre agence de création de site web<span class="span-noir">--------------------------------------------------</span>Votre agence de création de site web<span class="span-noir">--------------------------------------------------</span>Votre agence de création de site web<span class="span-noir">--------------------------------------------------</span>Votre agence de création de site web<span class="span-noir">--------------------------------------------------</span>Votre agence de création de site web<span class="span-noir">--------------------------------------------------</span>Votre agence de création de site web<span class="span-noir">--------------------------------------------------</span>Votre agence de création de site web<span class="span-noir">--------------------------------------------------</span>Votre agence de création de site web<span class="span-noir">--------------------------------------------------</span>Votre agence de création de site web<span class="span-noir">--------------------------------------------------</span>Votre agence de création de site web<span class="span-noir">--------------------------------------------------</span>Votre agence de création de site web<span class="span-noir">--------------------------------------------------</span>Votre agence de création de site web<span class="span-noir">--------------------------------------------------</span>Votre agence de création de site web<span class="span-noir">--------------------------------------------------</span>Votre agence de création de site web<span class="span-noir">--------------------------------------------------</span>Votre agence de création de site web<span class="span-noir">--------------------------------------------------</span>Votre agence de création de site web<span class="span-noir">--------------------------------------------------</span>Votre agence de création de site web<span class="span-noir">--------------------------------------------------</span>Votre agence de création de site web<span class="span-noir">--------------------------------------------------</span>Votre agence de création de site web<span class="span-noir">--------------------------------------------------</span>Votre agence de création de site web<span class="span-noir">--------------------------------------------------</span>Votre agence de création de site web<span class="span-noir">--------------------------------------------------</span>Votre agence de création de site web<span class="span-noir">--------------------------------------------------</span>Votre agence de création de site web<span class="span-noir">--------------------------------------------------</span>Votre agence de création de site web<span class="span-noir">--------------------------------------------------</span>Votre agence de création de site web<span class="span-noir">--------------------------------------------------</span>Votre agence de création de site web<span class="span-noir">--------------------------------------------------</span>Votre agence de création de site web<span class="span-noir">--------------------------------------------------</span>Votre agence de création de site web<span class="span-noir">--------------------------------------------------</span>Votre agence de création de site web<span class="span-noir">--------------------------------------------------</span>Votre agence de création de site web<span class="span-noir">--------------------------------------------------</span>Votre agence de création de site web<span class="span-noir">--------------------------------------------------</span>Votre agence de création de site web<span class="span-noir">--------------------------------------------------</span>Votre agence de création de site web<span class="span-noir">--------------------------------------------------</span>Votre agence de création de site web<span class="span-noir">--------------------------------------------------</span>Votre agence de création de site web<span class="span-noir">--------------------------------------------------</span>Votre agence de création de site web</div> -->
       

        <!-- <div class="tag-list">
          <div class="inner">
            <div class="tag"><span></span>Votre</div>
            <div class="tag"><span></span>Agence</div>
            <div class="tag"><span></span>de</div>
            <div class="tag"><span></span>Création</div>
            <div class="tag"><span></span>de</div>
            <div class="tag"><span></span>Site</div>
            <div class="tag"><span></span>Web</div>

            <div class="tag"><span></span>Votre agence de création de site web</div>
          </div>

          <div class="fade"></div>

        </div> -->

        

      </div>

      <div class="header-child-2">

        <p>Votre agence de création de site web</p>

        

        

          <!-- <div>
              <ul>
              <li style="--i:6;" data-icon=""> 
                  <a href="#">Accueil</a>
              </li>
              <li style="--i:5;" data-icon=""> 
                  <a href="#">Services</a>
              </li>
              <li style="--i:4;" data-icon=""> 
                  <a href="#">Contact</a>
              </li>
          </ul>
          </div> -->
          

        

      </div>





      <div class="header-child-3">
        <div class="div-menu">

          <nav>
              <a href="#"><span>ACCUEIL</span></a>
              <a href="#"><span>SERVICES</span></a>
              <a href="#"><span>À PROPOS DE NOUS</span></a>
              <a href="#"><span>CONTACT</span></a>
          </nav>
        </div>




      </div>

    </header>

  </div>
</template>

<style scoped>
@import url(https://fonts.googleapis.com/css?family=Oswald:400,700);
@import url(https://use.fontawesome.com/releases/v6.4.2/css/all.css);

header {
  background-color: black;
  height: 20em;
  width: 100%;
  /* border-bottom: solid 0.5px gray; */
  display: flex;
  flex-direction: column;
}

.span-noir {
  color: black;
}



/* .tag-list {
  width: 100%;
  font-family: "Montserrat";
  position: relative;
  overflow: hidden;
}

.inner {
  width: 100%;
  display: flex;
  gap: 10rem;
  animation: loop 15s linear infinite;
}

.tag {
  
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0 0rem;
  color: #e2e8f0;
  font-size: 1.5em;
  background-color: black;
  padding: 0.7rem 1rem;
  border-radius: 0.4rem;
  box-shadow: 0 0.1rem 0.2rem #00000033, 0 0.1rem 0.5rem #0000004d, 0 0.2rem 1.5rem #00000066;

}

.tag span {
  font-size: 1.2rem;
  color: #64748b;
}

.fade {
  position: absolute;
  background: linear-gradient(90deg, #000000, transparent 30%, transparent 70%, #000000);
  inset: 1;
  pointer-events: none;
}

@keyframes loop {
  0% {
    transform: translateX(100%);
  }

  100% {
    transform: translateX(-1%);
  }
}


.animate-on-load {
  height: 4em;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  position: relative;
  overflow: hidden;
}

.animate-on-load .moving-text {
  color: white;
  font-size: 2em;
  position: absolute;
  top: 50%;
  left: 100%;
  white-space: nowrap;
  animation: moveText 30s linear infinite;
  animation-delay: 0s;
}

@keyframes moveText {
  0% {
    transform: translateX(100%);
  }
  100% {
    transform: translateX(-1000%);
  }
  101% {
    transform: translateX(100%);
  }
} */




.header-child-1 {
  height: 8em;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  

}


.header-child-1 {
  width: 100%;
}

/* .header-child-1 .moving-text {
  color: white;
  font-size: 2em;
  position: absolute;
  top: 50%; 
  left: 100%;
  white-space: nowrap;
  animation: moveText 200s linear infinite; 
  animation-delay: 0s; 

}

@keyframes moveText {
  0% {
    transform: translateX(100%);
  }
  100% {
    transform: translateX(-1000%);
  }
  101% {
    transform: translateX(100%);
  }
} */



.header-child-2 {
  height: 4em;
  /* border-top: solid 0.1px gray; */
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

}

.header-child-2 p {
  color: white;
  font-size: 1.6em;

}

.header-child-3 {
  height: 8em;
  /* border-top: solid 0.1px gray; */
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

}

.div-logo {
  width: 30%;
  display: flex;
  align-items: center;
  padding-left: 1.5em;
}

.div-menu {
  width: 70%;
  display: flex;
  justify-content: end;
  align-items: center;
  text-align: center;
}

nav a {
  text-decoration: none;
  color: white;
  margin-right: 5em;
  padding: 0.5em;
  /* background-color: #B62EEB; */
  border-radius: 20px;
  font-family: 'Cardo', serif;
}

nav a span {
    display: inline-block; /* Ajoutez cette règle pour que le span soit un élément en bloc */
}

/* nav a span:hover {
    
    transform: scale(1.3); 
    transition: transform 1s ease; 
} */



.div-logo img {
  width: 6.5em;
}

.div-logo img:hover {
  transform: rotate(0deg) scale(0.5) translateX(2px) translateY(-4px); /* Ajustez les valeurs selon vos préférences */
  transition: transform 0.3s ease-in-out;
}

</style>
