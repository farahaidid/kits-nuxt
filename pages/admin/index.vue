<template>
    <section>
        <h1>Admin Route</h1>
        <a @click="logout">Logout</a>
    </section>
</template>

<script>
import { auth } from '@/services/firebase';
import Cookie from 'js-cookie';
import { mapMutations } from "vuex"

export default {
    methods: {
        ...mapMutations("users",["SET_USER"]),
        async logout() {
            await auth.signOut().then(()=>{
                this.SET_USER(null)
            })
            await Cookie.remove("access_token");

            location.href = "/login";
        }
    }
};
</script>