<template>
  <section>
    <div class="container">
      <h2 class="contentH2">Recent Episodes</h2>
      <div class="audio">
        <iframe width="100%" height="166" scrolling="no" frameborder="no" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/365190977&amp;color=%23ff5500&amp;auto_play=false&amp;hide_related=true&amp;show_comments=false&amp;show_user=true&amp;show_reposts=false&amp;show_teaser=false"></iframe>
      </div>
      <a href="https://itunes.apple.com/us/podcast/podcast-good-soldier-podcast-feed/id1321276329?mt=2" target="_blank">
        <img class="itunes" src="../static/itunes.png" alt="Subscribe to our podcast on iTunes.">
      </a>
      <div class="sponsors">
        <a href="http://simplechurchtools.co" target="_blank">
          <img src="../static/SCT.jpg" alt="Simple Church Tools. We are building a suite of tools to solve common church headaches and give pastors back time and sanity.">
        </a>
        <a href="http://www.invitation.church" target="_blank">
          <img src="../static/invitationChurch500.jpg" alt="Reach your community today. Over 500,000 KJV Gospel Tracts Printed.">
        </a>
      </div>
    </div>
  </section>
</template>

<style scoped>
section {
  width: 100%;
  padding: 0px;
}
.container {
  max-width: 800px;
  width: 100%;
  margin: 0px auto;
  padding: 20px;
  text-align: center;
}
.contentH2 {
  font-family: 'Raleway', sans-serif;
  font-weight: 900;
  text-transform: uppercase;
  margin-bottom: 40px;
}
.sponsors {
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 10px;
}
.itunes {
  margin-bottom: 50px;
}
img {
  max-width: 500px;
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
    padding: 20px;
  }
  .sponsors {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 30px;
  }
  .itunes {
    margin-bottom: 100px;
  }
}
@media (min-width:1024px) {
  .container {
    width: 100%;
    padding: 0px;
  }
  .sponsors {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 70px;
  }
}
</style>
