<template>
    <div class="container mt-5">
        <form action="mailto:danisardani7@gmail.com" method="post" enctype="text/plain">
          <label>Name</label>
          <input type="text" v-model="name" name="name" placeholder="Your Name">
          <label>Email</label>
          <input type="email" v-model="email" name="email" placeholder="Your Email">
          <label>Message,</label>
          <label class="text text-danger" v-text="(max - message.length)"></label>
          <textarea name="message" v-model="message" cols="30" rows="5" placeholder="Message" :maxlength="max"></textarea>
          <input class="tombol" type="submit" value="Send">
        </form>
    </div>
</template>

<style scoped>
* {box-sizing: border-box;}

.container {
  display: block;
  margin:auto;
  text-align: center;
  border-radius: 5px;
  background-color: #f2f2f2;
  padding: 20px;
  width: 50%;
}

label {
  float: left;
}

input[type=text], [type=email], textarea {
  width: 100%;
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
  margin-top: 6px;
  margin-bottom: 16px;
  resize: vertical;
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

<script>
export default {
  name: 'ContactUs',
  data() {
    return {
      name: '',
      email: '',
      message: '',
      max: 100,
    };
  },
};
</script>
