# Redux-Toolkit API Error

원인: `baseUrl`에 `process.env.`를 사용해서 제대로 적용되지 않았다. 그로인해 `Layout.tsx`에서 api를 통한 data를 불러오지 못해. `pending`, `rejected`만 나오게되었다.

해결: `baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5001" })`을 통해서 해결. 이후 `fullfield`가 출력됨을 확인했다.
이후 어떻게 `process.env`(.env.local)을 활용할 수 있는지 알아보자

```ts
export const api = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: process.env.REACT_APP_BASE_URL }),
  reducerPath: "adminApi",
  tagTypes: [
    "User",
  ],
  endpoints: (build) => ({
    getUser: build.query({
      query: (id) => `general/user/${id}`,
      providesTags: ["User"],
```

## 추가

`.env.local`파일을 통해 `process.env.VARIABLE`를 사용하려면 CRA일 경우 env파일에서 `REACT_APP_`을 사용하여야 한다.
그렇지만 Vite!를 사용 한다면 `import.meta.env.VARIABLE`을 사용해야한다.

- [vite-env](https://ko.vitejs.dev/guide/env-and-mode.html)
