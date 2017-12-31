<template>
  <section>
    <div class="container">
      <img class='logo' src="../static/good-soldier-podcast-cover.jpg" alt="Logo for Good Soldier Podcast">
      <p class='intro'>The Good Soldier Podcast is here to encourage Independent Baptist Preachers to stay in the fight for the Lord. A ministry of Pastor Estevan Montoya, of the <a class='churchLink' href='http://www.MVBCTaos.org' target='_blank'>Mountain View Baptist Church</a> in Taos, NM. Lessons taught from a King James Bible.</p>
      <hr class='divider'>
    </div>
  </section>
</template>

<script>
export default {
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css?family=Cardo');
section {
  width: 100%;
  padding: 0px;
}
.container {
  max-width: 800px;
  text-align: center;
  width: 100%;
  margin: 0px auto;
  padding: 40px 0px;
}
.logo {
  margin-bottom: 40px;
  max-width: 800px;
  width: 100%;
}
.intro {
  font-family: 'Cardo', serif;
  font-style: italic;
  font-size: 16px;
  padding: 10px;
}
.churchLink {
  color: black;
  font-weight:800;
}

.divider {
  width: 50%;
  margin: 10px auto 0px;
  border: none;
  height: 1px;
  background-color: black;
}
/* Tablet Viewport */
@media (min-width:768px) {
  .container {
    width: 100%;
  }
  .intro {
    font-size: 20px;
  }
  .divider {
    width: 70%;
    margin: 20px auto 6px;
  }
}

/* Desktop Viewport */
@media (min-width:1024px) {
  .container {
    width: 100%;
  }
  .intro {
    font-size: 26px;
    padding: 0px;
  }
  .divider {
    width: 50%;
    margin: 40px auto 10px;
  }
}
</style>
