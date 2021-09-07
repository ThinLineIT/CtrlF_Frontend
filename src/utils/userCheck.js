export const getUserId = () => {
  const user_id = localStorage.getItem('user_id'); // 아이디 확인 과정입니다. 추후 교체 예정
  return user_id;
};
