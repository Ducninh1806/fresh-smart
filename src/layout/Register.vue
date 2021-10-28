<template>
    <div>
        <!-- Main Content -->
			<div id="content" class="site-content">
				<!-- Breadcrumb -->
				<div id="breadcrumb">
					<div class="container">
						<h2 class="title">Create Account</h2>
						
						<ul class="breadcrumb">
							<li><a href="#" title="Home">Home</a></li>
							<li><span>Create Account</span></li>
						</ul>
					</div>
				</div>
			
			
				<div class="container marginBotton100px">
					<div class="register-page">
						<div class="register-form form">
							<div class="block-title">
								<h2 class="title"><span>Create Account</span></h2>
							</div>
						
							<form enctype="multipart/form-data" @submit.prevent="handleRegister">
								<div class="form-group">
									<label>First Name</label>
									<input v-model="user.firstName" type="text" name="firstName">
								</div>
								
								<div class="form-group">
									<label>Last Name</label>
									<input type="text" v-model="user.lastName" name="lastName">
								</div>
								
								<div class="form-group">
									<label>Email</label>
									<input type="email" v-model="user.email" name="email">
								</div>

								<div class="form-group">
									<label>Username</label>
									<input type="text" v-model="user.username" name="username">
								</div>
								
								<div class="form-group">
									<label>Password</label>
									<input type="password" v-model="user.password" name="password">
								</div>
								
								<div class="form-group text-center">
									<input type="submit" class="btn btn-primary" value="Create Account">
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
    name: "Register",
    data(){
        return {
            user: new User(),
			loading: false,
        }
    },

	created(){

	},
	
	computed: {

	},

	methods: {
		async handleRegister(){
			const res =await this.$store.dispatch('auth/register', this.user);
			if (res.status == 200) {
				this.$router.push({path: "/login"})
			}
		}
	}
}
</script>
<style scoped>
    .marginBotton100px {
		margin-bottom: 100px;
	}
</style>