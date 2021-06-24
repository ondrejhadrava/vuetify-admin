<template>
  <v-app id="inspire">
    <v-navigation-drawer
      v-model="drawer"
      app
      class="py-4 d-flex"
      color="grey lighten-3"
      mini-variant
      permanent
      expand-on-hover>

        <v-list>
            <v-list-item class="px-2">
                <v-list-item-avatar>
                    <v-img src=".\assets\user-profile.jpg"></v-img>           
                </v-list-item-avatar>
                <v-list-item-title class="font-weight-bold">
                    Amelia Nowak
                </v-list-item-title>
            </v-list-item>
        </v-list>

        <v-list nav>
            <v-list-item link v-for="route in routes" :key="route.name" :to="route.link">
                <v-list-item-icon>
                    <v-icon>{{ route.icon }}</v-icon>
                </v-list-item-icon>
                <v-list-item-title>
                    {{ route.name }}
                </v-list-item-title>
            </v-list-item>
        </v-list>

        <template v-slot:append>
            <v-list-item link>
                <v-list-item-icon>
                    <v-icon>mdi-logout-variant</v-icon>
                </v-list-item-icon>
                <v-list-item-title>
                    Sign off
                </v-list-item-title>
            </v-list-item>
        </template>

    </v-navigation-drawer>

    <v-main class="mx-5  my-5">
      <router-view></router-view>
    </v-main>
  </v-app>   
</template>

<script>
export default {
    name: 'MainLayout',
    data() {
        return {
            routes: [
                { icon: "mdi-home", name: "Home", link: '/home' },
                { icon: "mdi-chart-bar", name: "Statistics", link: '/statistics' },
                { icon: "mdi-account-supervisor", name: "Clients", link: '/clients' },
                { icon: "mdi-email", name: "Mail", link: '/mail' },
                { icon: "mdi-cog", name: "Settings", link: '/settings' }
            ]
        }
    }
}
</script>

<style scoped>
    .tile {
        width: 200px;
        height: 200px;
        margin: 0 1rem;
        display: flex;
        align-items: center;
    }

    .navigation {
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
    }
</style>