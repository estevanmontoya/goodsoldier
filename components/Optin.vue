<template>
  <section>
    <form action="https://GoodSoldier.us17.list-manage.com/subscribe/post?u=9142a4dbbea02ac8801f57eaf&amp;id=954e4bd591" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate" target="_blank" novalidate>
      <div class="container">
        <div class="text">
          <span>Get notified when we release new episodes</span>
        </div>
          <div class="button">
            <a href='https://mailchi.mp/6f593f6b3db0/goodsoldiers' target="_blank">Join Today!</a>
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
}
.container {
  max-width: 900px;
  width: 100%;
  margin: 0px auto;
  padding: 20px;
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 0px;
}

.container .text {
  color: white;
  font-size: 14px;
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
  margin: 0px auto;
}
a {
  padding: 0px 0px;
  -moz-transition: all .5s ease-out;-o-transition: all .5s ease-out;transition: all .5s ease-out;
}
.button a {
  width: 100%;
  padding: 5px 10px;
  background-color: orange;
  color: white;
  text-transform: uppercase;
  text-decoration: none;
  border: none;
  border-radius: 30px;
  font-size: 12px;
  font-weight: 900;
  -moz-transition: all .15s ease-out;-o-transition: all .15s ease-out;transition: all .15s ease-out;
}
.button a:hover {
  background-color: white;
  color: #ffa603;
  -moz-transition: all .5s ease-out;-o-transition: all .5s ease-out;transition: all .5s ease-out;
}
.button a:active {
  background-color: #ffc863cc;
  color: white;
  -moz-transition: all .15s ease-out;-o-transition: all .15s ease-out;transition: all .15s ease-out;
}


@media (min-width:768px) {
  .container {
    grid-template-columns: 1fr;
    margin-bottom: 30px;
  }
  .container .text {
    padding: 10px 0px;
    font-size: 20px;
  }
  .container .text span {
    letter-spacing: 1px;
  }
  .container .form {
    padding: 0px 0px;
  }
  .button {
    margin: 10px auto;
  }
  .button a {
    padding: 10px 20px;
    font-size: 16px;
  }
}
@media (min-width:1024px) {
  .container {
    grid-template-columns: 2fr 1fr;
    margin-bottom: 10px;
  }
  .container .text {
    text-align: right;
  }
}
</style>
