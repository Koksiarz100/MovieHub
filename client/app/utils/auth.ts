export const checkToken = (): boolean => {
  if (typeof localStorage !== 'undefined') {
    const token = localStorage.getItem('token');
    if (token) {
      return true;
    }
  }
  return false;
};