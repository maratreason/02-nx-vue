// import "./styles.scss";

import {createApp} from "vue";
import PrimeVue from "primevue/config";
import Aura from "@primevue/themes/aura";

import App from "./app/App.vue";

const app = createApp(App);
app.use(PrimeVue, {
    theme: {
        preset: Aura
    }
});

app.mount("#root");
