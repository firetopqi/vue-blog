import request from "@/router/axios";
export const postLogInfo = (data) => {
  return request({
    url: `/login`,
    method: "post",
    data: data
  });
};