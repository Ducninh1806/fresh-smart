<template>
    <div>
        <!-- Main Content -->
			<div id="content" class="site-content">
				<!-- Breadcrumb -->
				<div id="breadcrumb">
					<div class="container">
						<h2 class="title">Login</h2>
						
						<ul class="breadcrumb">
							<li><a href="#" title="Home">Home</a></li>
							<li><span>Login</span></li>
						</ul>
					</div>
				</div>
			
			
				<div class="container marginBotton100px" >
					<div class="login-page">
						<div class="login-form form">
							<div class="block-title">
								<h2 class="title"><span>Login</span></h2>
							</div>
						
							<form  enctype="multipart/form-data" name="form" @submit.prevent="authenticate">
							
								<div class="form-group">
									<label>Username</label>
									<input v-model="user.username" type="text" name="username">

								</div>
								
								<div class="form-group">
									<label>Password</label>
									<input v-model="user.password" type="password" name="password">
								</div>
								
								<div class="form-group text-center">
									<div class="link">
										<router-link to="forgot-password"><a>Forgot your password?</a></router-link>
										<router-link to="register"><a>Register?</a></router-link>
									</div>
								</div>
								
								<div class="form-group text-center">
									<input type="submit" class="btn btn-primary" value="Sign In">
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
    </div>
</template>
<script>

import User from '../models/user'

export default {
    name: "Login",
    data() {
        return {
			user: new User(),
			loading: false,
			message: '',
			type: 'login',
			error: null,
        }
    },
	created(){

	},

	computed: {
	
	},

	methods: {
	 	async authenticate(){
			try {
				
				await this.$store.dispatch('auth/login', this.user)
				this.$emit('next-page')
			} catch (error) {
				this.loading = false;
					console.error(error);
					this.$store.commit("LOGIN_FAILED", {error})
			}
		},
		
	}
}
</script>
<style scoped>
    .marginBotton100px {
		margin-bottom: 100px;
	}
</style>