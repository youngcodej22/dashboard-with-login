# dashboard-with-login

Dashboard와 login을 연결

https://www.youtube.com/watch?v=0cPCMIuDk2I

https://lucid.app/lucidchart/81ff5432-cc50-4c41-a7b8-7258fec1e630/view?page=0_0#

## 일 순서

server.js를 구축 했고 client부분들을 작업 한 이후에
routes > controller > client의 api > page또는 component 작업 순서로 진행

transaction per page 안맞음 client에서 초기 설정과 newPageSize 부분 변수 안된다. 확인하자
newPageSize 부분해결 전체 page넘어가는거하자

https://mui.com/x/migration/migration-data-grid-v5/#pagination

4:27:37

# 세팅

client .env

```
VITE_API_URL=http://localhost:5001
```

server .env

```
MONGO_URL=mongodb+srv://<id명>:<pw비번>@cluster0.dukxdbv.mongodb.net/<collection명>?retryWrites=true&w=majority
PORT=5001
```

# geography

https://nivo.rocks/choropleth/

https://github.com/plouc/nivo/blob/master/website/src/data/components/geo/world_countries.json
example에서 raw 파일 추출