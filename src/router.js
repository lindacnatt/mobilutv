import Vue from "vue";
import VueRouter from "vue-router";
import PracticeInfo from "@/components/PracticeInfo";
import SplashScreen from "@/components/SplashScreen";
import MainPage from "@/components/MainPage";
import About from "@/components/About";

Vue.use(VueRouter);

export default new VueRouter({
  routes: [
    { path: "/",name: 'SplashScreen', component: SplashScreen },
    { path: "/MainPage", component: MainPage },
    { path: "/:practiceId", component: PracticeInfo, name: 'PracticeInfo'},
    { path: "/About", component: About },
  ]
});
