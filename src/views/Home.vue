<template>
    <div class="">
      <div class="bg-atas">
        <img class="awan1" src="../assets/awan.png" alt="awan">
        <div class="title-text text-center">
          <h1><strong>I'm Danis.</strong></h1>
          <h2>a web designer.</h2>
        </div>
        <img class="awan2" src="../assets/awan.png" alt="awan">
        <img class="rounded mx-auto d-block" src="../assets/plant.png" alt="plant">
      </div>

      <div class="bg-tengah text-center" id="intro">
        <div>
          <img class="p-3" src="../assets/avatar.png" alt="avatar">
          <h2 class="pt-3">Hello.</h2>
          <p class="intro">Saya adalah seorang web developer. Saya terlah bekerja dalam bidang ini lebih dari 12 tahun dengan berbaggai perusahaan maupun freelancer. Saya dapat membuat front-end, email design, marketing pages, app UI/UX.</p>
        </div>
        <hr>
        <div class="skills" id="skill">
          <h2>My Skills.</h2>
          <div class="bg-skill">
            <img class="skill" src="../assets/code.png" alt="code-img">

            <h3>Design</h3>
            <p>Saya menguasai berbagai tool design seperti photoshop, coreldraw, figma dan masih banyak lagi.</p>

          </div>
          <div class="bg-skill">
            <img class="skill2" src="../assets/coding.png" alt="coding-img">

            <h3>Development</h3>
            <p>Saya menguasai HTML, CSS dan Javascript serta dapat membuat aplikasi menggunakan java maupun kotlin</p>

          </div>
        </div>
        <hr>
        <h2 id="project">My Works.</h2>
        <div class="row project" >
          <div class="col-md-6 p-5">
            <img class="rounded text-right img-fluid pb-4" alt="project1-img" src="../assets/project1.jpg">
            <h5>Heart Disease Prediction</h5>
            <p>Heart Disease Prediction menggunakan machine learning SVM model</p>
            <router-link to="/project" class="tombol">More</router-link>
          </div>
          <div class="col-md-6 p-5">
            <img class="rounded text-right img-fluid pb-4" alt="project1-img" src="../assets/project2.png">
            <h5>Youniverse</h5>
            <p>Sebuah E-Commerce yang berbasis website secara onlines</p>
            <router-link to="/project2" class="tombol">More</router-link>
          </div>
        </div>
        <hr>
        <div class="text-center">
          <h2>Get In Touch</h2>
          <p class="message">Tertarik untuk mempekerjakan saya? klik tombol dibawah dan mari kita bicarakan</p>
          <router-link class="tombol" to="/about">Contact Me</router-link>

        </div>
      </div>

      <div class="bg-bawah text-center">
        <a href="https://www.linkedin.com">LinkedIn</a>
        <a href="https://twitter.com">Twitter</a>
        <a href="https://www.youtube.com/">Youtube</a>
      </div>
    </div>
</template>

<style scoped>

body {
  color: #40514E;
  margin: 0;
  text-align: center;
  font-family: 'Merriweather', serif;
}

label{
  font-family: 'Merriweather', serif;
}

h1 {
  color: #66BFBF;
  font-size: 5.625rem;
  margin: 50px auto 0 auto;
  font-family: 'Sacramento', cursive;
}

h2 {
  color: #66BFBF;
  font-family: 'Montserrat', sans-serif;
  font-size: 2.5rem;
  font-weight: normal;
  padding-bottom: 10px;
}

h3 {
  color: #11999E;
  font-family: 'Montserrat', sans-serif;
}

p {
  line-height: 2;
}

hr {
  border: dotted #40514E 6px;
  background-color: #ffffff;
  border-bottom: none;
  width: 4%;
  margin: 100px auto;
}

input:focus{
  border: 1px;
  border-style: solid;
  border-color: #555;
}

a{
  color: #11999E;
  font-family: 'Montserrat', sans-serif;
  margin: 10px 20px;
  text-decoration: none;
}

a:hover {
  color: #EAF6F6;
}

.bg-atas {
  background-color: #E4F9F5;
  position: relative;
  padding-top: 10px;
}

.bg-tengah {
  margin: 100px 0
}

.bg-bawah {
  background-color: #66BFBF;
  padding: 50px 0 20px;
}

.project {
  padding: 0 20%;
}

.bg-contact{
  border: #11999E;
  border-width: 5px;
  border-style: solid;
  border-radius: 8px;
  height: 400px;
  width: 600px;
  background-color: #E4F9F5;
  position: relative;
  left: 650px;
  top: 250px;
  padding-left: 50px;
}

.bg-skill {
  width: 50%;
  margin: 100px auto 200px auto;
  text-align: left;
}

.intro {
  width: 30%;
  margin: auto;
}

.message {
  width: 40%;
  margin: 40px auto 60px;
}

.awan1 {
  position: absolute;
  right: 150px;
  top: 10px;
}

.awan2 {
  position: absolute;
  left: 250px;
  bottom: 300px;
}

.skill {
  width: 25%;
  float: left;
  margin-right: 30px;
}

.skill2 {
  width: 25%;
  float: right;
  margin-left: 30px;
}

.tombol {
  background: #11cdd4;
  border: none;
  border-radius: 8px;
  font-family: 'Montserrat', sans-serif;
  color: #ffffff;
  font-size: 15px;
  padding: 10px 20px 10px 20px;
}

.tombol:hover {
  background: #30e3cb;
}

</style>
