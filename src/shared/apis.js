import axios from "axios";

export const instance = axios.create({
  baseURL: "http://13.125.220.132",
  // headers:
});

// 헤더에 토큰 보내기
instance.interceptors.request.use(function (config) {
  const accessToken = document.cookie.split("=")[1];
  config.headers.common["Authorization"] = `Bearer ${accessToken}`;
  return config;
});

export const formDatas = axios.create({
  baseURL: "http://52.79.226.206/",
  headers: {
    "content-type": "multipart/form-data",
  },
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
  postWrite: (fromData) =>
    formDatas.post("/api/post", {
      fromData,
    }),

  // POST수정 PUT
  postEdit: (title, imagelist, category, price, content, postid) =>
    instance.put(`/api/post/${postid}`, {
      title: title,
      imagelist: imagelist,
      category: category,
      price: price,
      content: content,
    }),

  // POST삭제 DELETE
  postDelete: (postid) => instance.delete(`/api/post/${postid}`),

  // 상세 페이지 GET
  detailPost: (postid) => instance.get(`/api/post/${postid}`),

  // 거래 상태 수정 POST
  stateEdit: (postid, status) =>
    instance.put(`/api/status/${postid}`, {
      status: status,
    }),

  // 좋아요 GET
  like: (postId, username) => instance.get(`api/like/${postId}/${username}`),
};
