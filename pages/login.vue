<template>
    <div class="container-fluid">
        <div v-if="isError" class="alert alert-danger">
            <p class="mb-0">{{ errMsg }}</p>
        </div>
        <h1>Login</h1>
        <div>
            <b-form inline @submit.prevent="login" @submit.enter="login">
                <b-form-group
                    id="nuxtfire-email-group"
                    label="Email address:"
                    label-for="nuxtfire-email"
                >&nbsp;
                    <b-form-input
                    id="nuxtfire-email"
                    type="email"
                    class="mb-2 mr-sm-2 mb-sm-0"
                    placeholder="someone@somewhere.com"
                    v-model="account.email"
                    ></b-form-input>
                </b-form-group>

                <b-form-group
                    id="nuxtfire-password-group"
                    label="Password:"
                    label-for="nuxtfire-password"
                >&nbsp;
                    <b-form-input 
                    id="nuxtfire-password"
                    type="password"
                    class="mb-2 mr-sm-2 mb-sm-0"
                    v-model="account.password"
                    ></b-form-input>
                </b-form-group>

                <b-button
                    variant="primary"
                    type="submit"
                    @click="login"
                >Submit</b-button>
            </b-form>
        </div>
    </div>
</template>

<script>
export default {
    data: () => ({
        account: {
            email: "",
            password: ""
        },
        isError: false,
        errMsg: ''
    }),
    methods: {
        login(e) {
        e.preventDefault();
        // TODO: add parsing of data.
        this.$store
            .dispatch("users/login", this.account)
            .then(() => {
            this.$router.push("/admin");
            })
            .catch(error => {
            this.isError = true;
            this.errMsg = error.code;
            setTimeout(() => {
                this.isError = false;
            }, 60000);
            });
        }
    }
};
</script>