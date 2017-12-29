<template>
  <section>
    <div class="container">
      <img class='logo' src="../static/goodSoldierSquare.jpg" alt="Logo for Good Soldier Podcast">
      <div class="content">
        <h1 class='title'>Good Soldier Podcast</h1>
        <h2 class='subTitle'>The Good Soldier Podcast is here to encourage Independent Baptist Preachers to fight the good fight of faith. Led by <a href='http://www.MVBCTaos.org' target='_blank'>Pastor Estevan Montoya</a>, be encouraged from the Word of God to take up the Sword of Lord and move forward for the Glory of God.</h2>
      </div>
    </div>
  </section>
</template>

<script>
export default {
}
</script>

<style scoped>

section {
  width: 100%;
  padding: 20px 0px;
}
.container {
  max-width: 1280px;
  width: 100%;
  margin: 0px auto;
  padding: 20px;
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 40px;
  /* border-bottom: 1px solid rgba(0,0,0,.25); */
}
.container img {
  width: 100%;
  height: auto;
  box-shadow: 0 8px 6px -6px black;
}

.container h1.title {
  font-size: 30px;
  font-weight: 900;
  text-transform: uppercase;
  font-family: 'Raleway', sans-serif;
  -moz-transition: all .5s ease-out;-o-transition: all .5s ease-out;transition: all .5s ease-out;
}

.container h2.subTitle {
  font-family: 'Cardo', serif;
  font-weight: 200;
  font-style: italic;
  font-size: 16px;
  -moz-transition: all .5s ease-out;-o-transition: all .5s ease-out;transition: all .5s ease-out;
}

@media (min-width:768px) {
  .container {
    grid-template-columns: 1fr 2fr;
    padding: 30px;
  }
  .container h1.title {
    font-size: 40px;
  }

  .container h2.subTitle {
    font-size: 24px;
    line-height: 1.75em;
  }
}
@media (min-width:1024px) {
  section {
    padding: 50px 0px;
  }
  .container {
    grid-template-columns: 1fr 3fr;
  }
  .container h1.title {
    font-size: 50px;
  }

  .container h2.subTitle {
    font-size: 32px;
    line-height: 1.75em;
  }
}
</style>
