<template>
  <section>
    <div class="container">
      <img class='logo' src="../static/good-soldier-podcast-cover.jpg" alt="Logo for Good Soldier Podcast">
      <p class='intro'>The Good Soldier Podcast is here to encourage Independent Baptist Preachers to stay in the fight for the Lord. A ministry of Pastor Estevan Montoya, of the <a class='churchLink' href='http://www.MVBCTaos.org' target='_blank'>Mountain View Baptist Church</a> in Taos, NM. Lessons taught from a King James Bible.</p>
      <hr class='divider'>
      <div id='Social-Links'>
        <h3>Don't forget to share our page</h3>
        <ul class="share-buttons">
          <li><a href="https://www.facebook.com/sharer/sharer.php?u=http%3A%2F%2Fwww.goodsoldier.co&quote=Encouraging%20Independent%20Baptist%20Preachers" title="Share on Facebook" target="_blank"><img alt="Share on Facebook" src="../static/images/flat_web_icon_set/black/Facebook.png" /></a></li>
          <li><a href="https://twitter.com/intent/tweet?source=http%3A%2F%2Fwww.goodsoldier.co&text=Encouraging%20Independent%20Baptist%20Preachers:%20http%3A%2F%2Fwww.goodsoldier.co" target="_blank" title="Tweet"><img alt="Tweet" src="../static/images/flat_web_icon_set/black/Twitter.png" /></a></li>
          <li><a href="https://plus.google.com/share?url=http%3A%2F%2Fwww.goodsoldier.co" target="_blank" title="Share on Google+"><img alt="Share on Google+" src="../static/images/flat_web_icon_set/black/Google+.png" /></a></li>
          <li><a href="http://pinterest.com/pin/create/button/?url=http%3A%2F%2Fwww.goodsoldier.co&description=The%20Good%20Soldier%20Podcast%20is%20here%20to%20encourage%20Independent%20Baptist%20Preachers%20to%20fight%20the%20good%20fight%20of%20faith." target="_blank" title="Pin it"><img alt="Pin it" src="../static/images/flat_web_icon_set/black/Pinterest.png" /></a></li>
          <li><a href="http://www.linkedin.com/shareArticle?mini=true&url=http%3A%2F%2Fwww.goodsoldier.co&title=Encouraging%20Independent%20Baptist%20Preachers&summary=The%20Good%20Soldier%20Podcast%20is%20here%20to%20encourage%20Independent%20Baptist%20Preachers%20to%20fight%20the%20good%20fight%20of%20faith.&source=http%3A%2F%2Fwww.goodsoldier.co" target="_blank" title="Share on LinkedIn"><img alt="Share on LinkedIn" src="../static/images/flat_web_icon_set/black/LinkedIn.png" /></a></li>
          <li><a href="mailto:?subject=Encouraging%20Independent%20Baptist%20Preachers&body=The%20Good%20Soldier%20Podcast%20is%20here%20to%20encourage%20Independent%20Baptist%20Preachers%20to%20fight%20the%20good%20fight%20of%20faith.:%20http%3A%2F%2Fwww.goodsoldier.co" target="_blank" title="Send email"><img alt="Send email" src="../static/images/flat_web_icon_set/black/Email.png" /></a></li>
        </ul>
      </div>
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
  padding: 0px 0px;
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
#Social-Links {
  margin: 20px 0px;
}
#Social-Links h3 {
  margin: 10px 0px;
}
ul.share-buttons{
  list-style: none;
  padding: 0;
}

ul.share-buttons li{
  display: inline;
  margin:2px;
}

ul.share-buttons .sr-only{
  position: absolute;
  clip: rect(1px 1px 1px 1px);
  clip: rect(1px, 1px, 1px, 1px);
  padding: 0;
  border: 0;
  height: 1px;
  width: 1px;
  overflow: hidden;
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
    padding: 40px 0px;
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
