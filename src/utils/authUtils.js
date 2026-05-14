export const getCurrentUser = () => {
  const user = localStorage.getItem("currentUser");
  return user ? JSON.parse(user) : null;
};

export const saveUserData = (user) => {
  if (!user || !user.email) return;
  localStorage.setItem(`user_${user.email}`, JSON.stringify(user));
  localStorage.setItem("currentUser", JSON.stringify(user));
};

export const addToFavorites = (movieId) => {
  const user = getCurrentUser();
  if (!user) return false;

  if (!user.favoriteMovies) user.favoriteMovies = [];

  if (!user.favoriteMovies.includes(movieId)) {
    user.favoriteMovies.push(movieId);
    saveUserData(user);
    return true;
  }
  return false;
};

export const removeFromFavorites = (movieId) => {
  const user = getCurrentUser();
  if (!user || !user.favoriteMovies) return false;

  user.favoriteMovies = user.favoriteMovies.filter(id => id !== movieId);
  saveUserData(user);
  return true;
};

export const getUserFavorites = () => {
  const user = getCurrentUser();
  return user && user.favoriteMovies ? user.favoriteMovies : [];
};