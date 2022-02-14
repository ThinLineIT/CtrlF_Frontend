import axios from 'axios';
import Cookies from 'js-cookie';

export const deleteApi = async (data) => {
  let headers = Cookies.get('token');
  const request = await axios({
    url: `${process.env.NEXT_PUBLIC_API_BASE_URL}/${data.type}s/${data.id}/`,
    method: 'delete',
    headers: {
      Authorization: `Bearer ${headers}`,
    },
    data: { reason: data.reason },
  })
    .then((res) => res)
    .catch((err) => err.response);
  return request;
};
