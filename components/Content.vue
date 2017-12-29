<template>
  <section>
    <div class="container">
      <div class="audio">
        <h2 class="contentH2">Recent Episodes</h2>
        <iframe style="margin-bottom:50px;" width="100%" height="166" scrolling="no" frameborder="no" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/365190977&amp;color=%23ff5500&amp;auto_play=false&amp;hide_related=true&amp;show_comments=false&amp;show_user=true&amp;show_reposts=false&amp;show_teaser=false"></iframe>
        <p class="likeUs">Like our fanpage of Facebook to be encouraged with shareable social media graphics and quotes that are uplifting.</p>
        <a href="https://www.facebook.com/GoodSoldier.co/" target="_blank">
          <img src="../static/facebook-logo.jpg" alt="Like our fanpage on Facebook.">
        </a>
      </div>
      <div class="side">
        <h2 class="contentH2">Sponsors</h2>
        <a href="http://simplechurchtools.co" target="_blank">
          <img src="../static/SCT.jpg" alt="Simple Church Tools. We are building a suite of tools to solve common church headaches and give pastors back time and sanity.">
        </a>
        <a href="http://www.invitation.church" target="_blank">
          <img src="../static/invitationChurch.jpg" alt="Reach your community today. Over 500,000 KJV Gospel Tracts Printed.">
        </a>
      </div>
    </div>
  </section>
</template>

<style scoped>
section {
  width: 100%;
  padding: 40px 0px;
}
.container {
  background-color: rgba(0,0,0,.03);
  max-width: 1280px;
  width: 100%;
  margin: 0px auto;
  padding: 20px;
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 100px;
}
.contentH2 {
  font-family: 'Raleway', sans-serif;
  font-weight: 900;
  text-transform: uppercase;
  margin-bottom: 40px;
}
.likeUs {
  font-family: 'Cardo', serif;
  font-size: 16px;
  font-style: italic;
  margin-bottom: 20px;
  -moz-transition: all .5s ease-out;-o-transition: all .5s ease-out;transition: all .5s ease-out;
}
img {
  max-width: 430px;
  width: 100%;
  border: 2px solid (0,0,0,.75);
  box-shadow: 0px 8px 6px -3px rgba(0,0,0,.25);
  margin-bottom: 40px;
  -moz-transition: all .5s ease-out;-o-transition: all .5s ease-out;transition: all .5s ease-out;
}
img:hover {
  box-shadow: 0px 8px 6px -3px rgba(0,0,0,.7);
}
@media (min-width:768px) {
  .container {
    grid-template-columns: 2fr 1fr;
    padding: 50px;
  }
  .likeUs {
    font-size: 30px;
  }
}
@media (min-width:1024px) {
  .container {
    width: 100%;
  }
}
</style>
