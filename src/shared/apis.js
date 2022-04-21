import axios from "axios";

export const instance = axios.create({
  baseURL: "http://13.125.220.132",
  headers: {
    "content-type": "application/json;charset=UTF-8",
  },
});

// 헤더에 토큰 보내기
instance.interceptors.request.use(function (config) {
  const accessToken = document.cookie.split("=")[1];
  config.headers.common["Authorization"] = `${accessToken}`;
  return config;
});

export const formDatas = axios.create({
  baseURL: "http://13.125.220.132",
  headers: {
    "content-type": "multipart/form-data",
  },
});

formDatas.interceptors.request.use(function (config) {
  const accessToken = document.cookie.split("=")[1];
  config.headers.common["Authorization"] = `${accessToken}`;
  // console.log(config);
  return config;
});

export const apis = {
  // 로그인 POST
  login: (username, password) =>
    instance.post("/user/login", { username: username, password: password }),

  // 회원가입 POST
  signup: (username, password, passwordcheck) =>
    instance.post("/user/signup", {
      username: username,
      password: password,
      passwordcheck: passwordcheck,
    }),

  // 메인 페이지 GET
  mainGet: () => instance.get("/api/main"),

  //POST작성 POST
  postWrite: (fromData) => formDatas.post("/api/post", fromData),

  // POST수정 PUT
  postEdit: (title, categoryid, price, content, postid) =>
    instance.put(`/api/post/${postid}`, { title, categoryid, price, content }),

  // POST삭제 DELETE
  postDelete: (postid) => instance.delete(`/api/post/${postid}`),

  // 상세 페이지 GET
  detailPost: (postid) => instance.get(`/api/post/${postid}`),

  // 거래 상태 수정 POST
  stateEdit: (postid, status) =>
    instance.put(`/api/status/${postid}`, {
      status,
    }),

  // 좋아요 GET
  like: (postId, username) => instance.get(`api/like/${postId}`),
};
