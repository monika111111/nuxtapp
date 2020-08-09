//eslint-disable-next-line
<template>
  <v-card class="mx-auto mt-5 pa-5" max-width="300" outlined shaped>
    <v-form v-model="valid" @submit.prevent>
      <v-text-field v-model.trim="signInForm.email" :rules="emailRules" label="E-mail" required />
      <v-text-field v-model.trim="signInForm.password" :rules="passwordRules" label="Password" required type="text" />
      <v-btn type="submit" class="mt-10" :disabled="!valid" @click="signin()">
        Sign in
      </v-btn>
    </v-form>
    <v-card-text>
      or
      <nuxt-link to="/signup">
        Sign up
      </nuxt-link>
    </v-card-text>
  </v-card>
</template>

<script>

export default {
  name: 'Signin',
  data: () => ({
    valid: false,
    signInForm: {
      email: '',
      password: ''
    },
    emailRules: [
      v => !!v || 'E-mail is required'
    ],
    passwordRules: [
      v => !!v || 'Password is required'
    ]
  }),
  methods: {
    signin () {
      this.$store.dispatch('signInWithEmail', this.signInForm)
    }
  }
}</script>
