export const getUserId = () => {
  const user_id = localStorage.getItem('user_id');
  return user_id;
};
