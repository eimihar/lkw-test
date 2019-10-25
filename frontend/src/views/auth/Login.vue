<script>
  import config from '../../config';

  export default {
    name: 'Login',
    created() {
      console.log(this.$store.getters.isLoggedIn);
    },
    methods: {
      login: async function() {
        let resp = await this.$axios.post('/oauth/token', {
          grant_type: 'password',
          client_id: config.clientId,
          client_secret: config.clientSecret,
          username: this.email,
          password: this.password,
          scope: '*'
        });

        let respUser = (await this.$axios.get('/me', {
          headers: {
            Authorization: 'Bearer ' + resp.data.access_token
          }
        })).data;

//        this.$router.push({name: 'student-view'});
        await this.$store.commit('saveSession', {session: resp.data, user: respUser});

        if (respUser.admin) {
          this.$router.push({name: 'admin-manage-courses'});
        } else {
          this.$router.push({name: 'student-view-profile'});
        }
//        await this.$store.commit('saveSession', resp.data);

//        if (respUser.role === 'student') {
//          this.$router.go('student-view')
//        }
      }
    },
    data() {
      return {
        email: '',
        password: ''
      }
    }
  }
</script>

<template>
  <div>
    <body>
    <div class="container">
      <div class="row">
        <div class="col-sm-9 col-md-7 col-lg-5 mx-auto">
          <div class="card card-signin my-5">
            <div class="card-body">
              <h5 class="card-title text-center">Sign In</h5>
              <form class="form-signin" @submit.prevent="login">
                <div class="form-label-group">
                  <input type="email" id="inputEmail" v-model="email" class="form-control" placeholder="Email address" required autofocus>
                  <label for="inputEmail">Email address</label>
                </div>

                <div class="form-label-group">
                  <input type="password" id="inputPassword" v-model="password" class="form-control" placeholder="Password" required>
                  <label for="inputPassword">Password</label>
                </div>

                <div class="custom-control custom-checkbox mb-3">
                  <input type="checkbox" class="custom-control-input" id="customCheck1">
                  <label class="custom-control-label" for="customCheck1">Remember password</label>
                </div>
                <button class="btn btn-lg btn-primary btn-block text-uppercase" type="submit">Sign in</button>
                <!--<hr class="my-4">
                <button class="btn btn-lg btn-google btn-block text-uppercase" type="submit"><i class="fab fa-google mr-2"></i> Sign in with Google</button>
                <button class="btn btn-lg btn-facebook btn-block text-uppercase" type="submit"><i class="fab fa-facebook-f mr-2"></i> Sign in with Facebook</button>-->
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
    </body>
  </div>
</template>

<style>

</style>