<script setup>

</script>

<template>

    <footer>

        <div class="copyright">
            <p>© 2024 <span>O'</span>Clavier</p>

        </div>

        <div class="menu-footer">
            <nav>
                <a href="#">Politique de cookies</a>
                <a class="conditions" href="#"><span>Conditions générales de vente</span></a>
                <a class="mentions" href="#">Mentions légales et politique de confidentialité</a>
            </nav>

        </div>

        <div class="reseaux">

            <ul>
                <li>
                    <a href="#" style="--clr0: #ff6efb; --clr1: #ff6efb; --clr2: #ff2666a">
                        <i class="fa-brands fa-instagram"></i>
                    </a>
                </li>

                <li>
                    <a href="#" style="--clr0: #00009A; --clr1: #00009A; --clr2: #ff2666a">
                        <i class="fa-brands fa-snapchat"></i>
                    </a>
                </li>

                <li>
                    <a href="#" style="--clr0: #59d8c3; --clr1: #59d8c3; --clr2: #ff2666a">
                        <i class="fa-brands fa-envelope"></i>
                    </a>
                </li>
            </ul>

        </div>

        

    </footer>

</template>

<style scoped>

@import url('https://fonts.googleapis.com/css2?family=Cardo&display=swap');


footer {
    background-color: black;
    height: 8em;
    border-top: solid 1px white;
    display: flex;
    align-items: center;
    
}

.copyright {
    width: 33%;
    color: white;
    font-family: 'cardo';
    font-size: 0.9em;
    display: flex;
    align-items: center;
    padding-left: 1.5em;
}

.copyright p span {
    color: #ff6efb;
}

.copyright p:hover {
    /* color: #ff6efb; */
    transform: scale(1.3); /* Ajuste la valeur selon tes préférences */
    transition: transform 1s ease; /* Ajoute une transition fluide */
}

.menu-footer {
    width: 33%;
    font-family: 'cardo';
    font-size: 0.9em;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;

}

.menu-footer a {
    text-decoration: none;
    color: white;
    display: block;
    line-height: 2.5em;
}

.menu-footer a:hover {
    /* color: #ff6efb; */
    transform: scale(1.3); /* Ajuste la valeur selon tes préférences */
    transition: transform 1s ease; /* Ajoute une transition fluide */
}

/* .conditions:hover {
    color: #00009A;
}

.mentions:hover {
    color: #5ED6C2;
} */



.reseaux {
    width: 33%;
    padding-right: 1.5em;
    display: flex;
    justify-content: center;
    align-items: center;
    
}

.reseaux ul {
    display: flex;
    align-items: center;
    margin-bottom: 2em;
    gap: 100px;
}

.reseaux li {
    list-style: none;
}

.fa-brands {
    font-size: 20px;
    color: #262626;
    line-height: 40px;
    transition: 0.5s;
}

.reseaux a {
    position: relative;
    display: block;
    width: 40px;
    height: 40px;
    background: #fff;
    text-align: center;
    transform: perspective(1000px) rotate(-30deg) skew(25deg) translate(0, 0);
    transition: 0.5s;
    transition-timing-function: linear;
    box-shadow: -20px 20px 10px rgba(0, 0, 0, 0.5);
}


.reseaux a:before {
    content: "";
    position: absolute;
    top: 10px;
    left: -20px;
    height: 100%;
    width: 20px;
    background: #b1b1b1;
    transition: 0.5s;
    transform: rotate(0deg) skewY(-45deg);

}

.reseaux a:after {
    content: "";
    position: absolute;
    bottom: -20px;
    left: -10px;
    height: 20px;
    width: 100%;
    background: #b1b1b1;
    transition: 0.5s;
    transform: rotate(0deg) skewX(-45deg);
}

.reseaux a:hover {
    transform: perspective(1000px) rotate(-30deg) skew(25deg) translate(20px, -20px);
    box-shadow: -50px 50px 50px rgba(0, 0, 0, 0.5);
}

.reseaux li:hover .fa-brands {
    color: white;
}

.reseaux li:hover a {
    background: var(--clr0);
}

.reseaux li:hover a:before {
    background: var(--clr1);
}

.reseaux li:hover a:after {
    background: var(--clr2);
}





</style>
