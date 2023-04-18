export const AuthService = {
  
  isAuthor(object) {
    if (this.getAuthUser().id !== object.author.id) return false;
    return true;
  },

  isAuth() {
    if (!localStorage.getItem("auth")) return false;
    return true;
  },

  getAuthUser() {
    const authJson = localStorage.getItem("auth")
      ? localStorage.getItem("auth")
      : false;
    return JSON.parse(authJson);
  },

  saveAuthUser(authUser) {
    localStorage.setItem("auth", JSON.stringify(authUser));
  },
};
