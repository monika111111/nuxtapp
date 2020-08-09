//eslint-disable-next-line
<template>
  <v-card class="mx-auto mt-5 pa-5" max-width="300" outlined shaped>
    <v-form v-model="valid" @submit.prevent>
      <v-text-field v-model.trim="signUpForm.name" :rules="nameRules" label="Name" required />
      <v-text-field v-model.trim="signUpForm.email" :rules="emailRules" label="E-mail" required />
      <v-text-field v-model.trim="signUpForm.password" :rules="passwordRules" label="Password" required type="text" />
      <v-text-field v-model.trim="signUpForm.repeatPassword" :rules="[(signUpForm.password === signUpForm.repeatPassword) || 'Password must match']" label="Repeat password" required type="text" />
      <v-btn type="submit" class="mt-10" :disabled="!valid" @click="signup()">
        Sign up
      </v-btn>
    </v-form>
    <v-card-text>
      or
      <nuxt-link to="/signin">
        Sign in
      </nuxt-link>
    </v-card-text>
  </v-card>
</template>

<script>

export default {
  name: 'Signup',
  data: () => ({
    valid: false,
    signUpForm: {
      name: '',
      email: '',
      password: '',
      repeatPassword: ''
    },
    nameRules: [
      v => !!v || 'Name is required'
    ],
    emailRules: [
      v => !!v || 'E-mail is required',
      v => /.+@.+/.test(v) || 'E-mail must be valid'
    ],
    passwordRules: [
      v => !!v || 'Password is required',
      v => (v && v.length >= 5) || 'Password must have 5+ characters',
      v => /(?=.*[A-Z])/.test(v) || 'Must have one uppercase character',
      v => /(?=.*\d)/.test(v) || 'Must have one number',
      v => /([!@$%])/.test(v) || 'Must have one special character [!@#$%]'
    ]
  }),
  methods: {
    signup () {
      this.$store.dispatch('signUp', this.signUpForm)
    }
  }
}</script>
