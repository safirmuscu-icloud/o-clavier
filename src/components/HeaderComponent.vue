<script>
</script>

<template>
  <div>
    <header id="header">

      <div class="div-logo">
        <img src="../images/logo2.png" alt="logo">
      </div>

      <div class="div-menu">

        <nav>
            <a href="#">Accueil</a>
            <a href="#">Services</a>
            <a href="#">Contact</a>
        </nav>

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

    </header>
  </div>
</template>

<style>
@import url(https://fonts.googleapis.com/css?family=Oswald:400,700);
@import url(https://use.fontawesome.com/releases/v6.4.2/css/all.css);

header {
  background-color: #050816;
  height: 300px;
  width: 100%;
  border-bottom: solid 1px white;
  display: flex;
  flex-direction: row;
}

.div-logo {
  width: 50%;
  display: flex;
  align-items: center;
  padding-left: 1.5em;
}

.div-menu {
  width: 50%;
  display: flex;
  justify-content: end;
  align-items: center;
  text-align: center;
}

/* .div-menu div {
    display: flex;
    justify-content: end;
} */

/* code menu */
/* ul {
  position: relative;
  transform: skewY(-5deg);
  margin: 3em;
  
}

li {
  position: relative;
  list-style: none;
  width: 80px;
  height: 10px;
  padding: 0.5em;
  background: #B62EEB;
  z-index: calc(1 * var(--i));
  transition: 0.5s;
}

li:hover {
  background: #B62EEB;
  transform: translateX(-50px);
}

li::before {
  font-family: "FontAwesome";
  color: #999;
  display: flex;
  justify-content: center;
  align-items: center;
  content: attr(data-icon);
  position: absolute;
  top: 0;
  left: -40px;
  width: 40px;
  height: 100%;
  background: #B62EEB;
  transform-origin: right;
  transform: skewY(45deg);
  transition: 0.5s;
}

li:hover::before {
  background: #B62EEB;
}

li::after {
  content: "";
  position: absolute;
  top: -40px;
  left: 0px;
  width: 100%;
  height: 40px;
  background: #B62EEB;
  transform-origin: bottom;
  transform: skewX(45deg);
  transition: 0.5s;
}

li:hover::after {
  background: #B62EEB;
}

li a {
  text-decoration: none;
  color: #999;
  display: block;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  transition: 0.5s;
}

li:hover a {
  color: #fff;
}

li:last-child::after {
  box-shadow: -120px 120px 20px rgba(0, 0, 0, 0.25);
} */

.div-logo img {
  width: 9em;
}
</style>
