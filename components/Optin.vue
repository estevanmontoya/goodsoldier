<template>
  <section>
    <form action="https://GoodSoldier.us17.list-manage.com/subscribe/post?u=9142a4dbbea02ac8801f57eaf&amp;id=954e4bd591" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate" target="_blank" novalidate>
      <div class="container">
        <div class="text">
          <span>Get notified when we release new episodes</span>
        </div>
          <div class="form">
            <input type="email" name="EMAIL" placeholder="E-Mail Address">
          </div>
          <div class="button">
            <div style="position: absolute; left: -5000px;" aria-hidden="true"><input type="text" name="b_9142a4dbbea02ac8801f57eaf_954e4bd591" tabindex="-1" value=""></div>
            <button type="submit" value="Subscribe" name="subscribe">Join Today!</button>
          </div>
      </div>
    </form>
  </section>
</template>

<script>
export default {
}
</script>

<style scoped>

section {
  width: 100%;
  background-color: black;
  box-shadow: 0px 0px 20px 0px rgba(0,0,0,.5);
  margin-bottom: 20px;
}
.container {
  max-width: 1280px;
  width: 100%;
  margin: 0px auto;
  padding: 20px;
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 40px;
}

.container .text {
  color: white;
  font-size: 20px;
  font-family: 'Raleway', sans-serif;
  padding: 5px 0px;
  text-align: center;
  -moz-transition: all .5s ease-out;-o-transition: all .5s ease-out;transition: all .5s ease-out;
}
.container .text span {
  text-transform: uppercase;
  font-weight: 900;
  letter-spacing: 0px;
}

.container .form {
  padding: 0px;
  -moz-transition: all .5s ease-out;-o-transition: all .5s ease-out;transition: all .5s ease-out;
}

.container .form input {
  padding: 15px;
  border: none;
  color: black;
  font-weight: 300;
  width: 100%;
  font-size: 12px;
}

.button {
  padding: 0px 0px;
  -moz-transition: all .5s ease-out;-o-transition: all .5s ease-out;transition: all .5s ease-out;
}
.button button {
  width: 100%;
  padding: 10px 0px;
  background-color: orange;
  color: white;
  text-transform: uppercase;
  border: none;
  border-radius: 30px;
  font-size: 16px;
  font-weight: 900;
  -moz-transition: all .15s ease-out;-o-transition: all .15s ease-out;transition: all .15s ease-out;
}
.button button:hover {
  background-color: white;
  color: #ffa603;
  -moz-transition: all .5s ease-out;-o-transition: all .5s ease-out;transition: all .5s ease-out;
}
.button button:active {
  background-color: #ffc863cc;
  color: white;
  -moz-transition: all .15s ease-out;-o-transition: all .15s ease-out;transition: all .15s ease-out;
}


@media (min-width:768px) {
  .container {
    grid-template-columns: 2fr 1fr 1fr;
  }
  .container .text {
    padding: 10px 0px;
    text-align: left;
  }
  .container .text span {
    letter-spacing: 1px;
  }
  .container .form {
    padding: 0px 0px;
  }
}
@media (min-width:1024px) {
  .container {
    grid-template-columns: 3fr 1fr 1fr;
  }
}
</style>
