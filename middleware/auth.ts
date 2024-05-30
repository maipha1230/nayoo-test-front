export default defineNuxtRouteMiddleware((to, from) => {
  const isLogin = localStorage.getItem("accessToken");
  if (!isLogin) {
    return navigateTo("/login");
  }
});
