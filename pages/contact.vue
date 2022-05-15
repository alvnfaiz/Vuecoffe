<template>
  <div class="contact">
    <div class="contact-form">
      <div class="contact-form-content">
        <form @submit.prevent="send">
          <div class="form-group">
            <label for="name">Name</label>
            <input id="name" v-model="name" type="text" class="form-control" placeholder="Name">
          </div>
          <div class="form-group">
            <label for="email">Email</label>
            <input id="email" v-model="email" type="email" class="form-control" placeholder="Email">
          </div>
          <div class="form-group">
            <label for="message">Message</label>
            <textarea id="message" v-model="message" class="form-control" placeholder="Message"></textarea>
          </div>
          <button type="submit" class="btn btn-primary">
            Send
          </button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ContactComponent'
}
</script>
