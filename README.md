# 🚚 핸들이 고장난 푸드트럭(broken-handle-truck)

<div align="center" style="display: flex;">
  <img width="400" alt="화면 캡처 2024-11-06 163513" src="https://github.com/user-attachments/assets/f82d800e-7eb9-41fa-b653-817e4bc71ece">
  <img width="400" alt="화면 캡처 2024-11-06 163620" src="https://github.com/user-attachments/assets/c7e64730-4f24-4439-9c91-1449f5da5fde">
</div>

### 🔗 ["핸들이 고장난 푸드트럭" 배포 링크](https://broken-handle-truck.store/)

#### 🗓️ 프로젝트 기간 : 2024.10.15 ~ 2024.11.06

#### 👋 팀원 구성

| 김현석 | 장원석 | 육은별 | 이예진 | 조준영 |
|----------|----------|----------|----------|----------|
| <img src="https://github.com/user-attachments/assets/4ab7f825-1905-4338-9094-dde78b5fb7b7" width="150" height="150" /> |<img src="https://github.com/user-attachments/assets/ef421f29-67ac-43c6-878a-a966c6cc5eee" width="150" height="150" /> |<img src="https://github.com/user-attachments/assets/f483c0f8-53ed-4c15-957b-e44ff4331102" width="150" height="150" /> |  <img src="https://github.com/user-attachments/assets/bc947593-936a-41e3-acf8-cf1c186a441b" width="150" height="150" />  | <img src="https://github.com/user-attachments/assets/6f3104ea-68d4-47be-8434-c8dacf4344d4" width="150" height="150" />|
| Frontend, Backend | Backend | Frontend | Frontend | Frontend |

<br />

## 프로젝트 소개

길거리에서 만날 수 있는 붕어빵, 타코야끼 등과 같은 노점들은 우리의 일상에 소소한 즐거움을 더해주지만, 이들이 언제 어디에서 열리는지 알기 어려운 경우가 많습니다.
특히 좋아하는 푸드트럭이나 노점의 일정이 단속 때문에 급하게 시간이나 장소를 변경하는 경우, 이를 매번 확인할 수 있는 방법이 부족하다는 점에서 불편함을 느꼈습니다.

이런 불편함을 해결하고자, 사장님들이 직접 영업 정보를 실시간으로 업데이트하고 공유할 수 있는 플랫폼을 만들면 어떨까 하는 아이디어에서 이 웹 애플리케이션을 기획하게 되었습니다.

`사장님`들은 핸들이 고장난 푸드트럭을 통해 가게를 등록하고, 언제든지 가게 위치 및 정보와 영업 상태(오픈 여부)를 수정하여 사용자들에게 알릴 수 있습니다.

`사용자`들은 '핸들이 고장난 푸드트럭'을 통해 주변의 가게들을 지도에서 확인하고, 관심 있는 가게는 북마크 기능을 이용해 저장해둘 수 있습니다. 또한, 오픈 여부 알림을 통해 언제든지 원하는 가게가 영업 중인지 확인할 수 있습니다. 게다가, 방문 후에는 리뷰를 남겨 가게에 대한 피드백을 제공할 수 있습니다.

#### ⚙️ 기술 스택

- **Frontend**
    - `React`, `Typescript`, `tailwind`, `axios`, `react-query`, `zustand`, `react-hook-form`, `react-router-dom`, `react-toastify`, `react-modal-sheet`, `react-kakao-maps-sdk`

- **Backend**
    - `Express`, `Typescript`, `JWT`, `MongoDB`, `Websocket`, `Swagger`
 
#### 📚 배운 점

이 프로젝트를 통해 팀은 다음과 같은 백엔드 및 프론트엔드 개발 지식을 학습했습니다.

- **Frontend**
  - **Zustand를 통한 전역 상태 관리**: React 기반에서 Zustand를 활용하여 상태를 효율적으로 관리하는 방법을 익혔습니다.
  - **API 연동 및 비동기 처리**: 백엔드와의 통신을 위해 Axios 등을 사용하여 API 요청을 보내고, 비동기 처리를 관리하는 방법을 익혔습니다.
  - **타입스크립트를 활용한 안정성 강화**: 프론트엔드 코드에 타입스크립트를 도입하여 코드의 안정성과 유지 보수성을 높였습니다.
  - **웹 소켓을 통한 실시간 업데이트 경험**: WebSocket을 통해 실시간으로 데이터를 수신하고 화면을 업데이트하는 사용자 경험을 강화했습니다.

- **Backend**
  - **Express를 통한 백엔드 개발 기초**: Express를 사용하여 서버 구조와 라우팅, 미들웨어 사용법에 대해 이해했습니다.
  - **JWT 토큰을 통한 인증 방식**: JWT를 이용해 사용자 인증을 구현하고, 보안을 강화하는 방법을 배웠습니다.
  - **OAuth 연동을 통한 외부 서비스 로그인**: 카카오 OAuth 연동을 통해 소셜 로그인 구현 방법을 익혔습니다.
  - **WebSocket을 활용한 실시간 데이터 업데이트**: WebSocket을 통해 노점 위치나 시간 변경 알림을 실시간으로 처리하는 방법을 학습했습니다.

<br />

## 화면설계서

<br />

## 주요 기능

<br />

## 폴더 구조
```
src
│  App.tsx
│  index.css
│  main.tsx
│  map.svg
│  vite-env.d.ts
│
├─apis
│      apiClient.ts
│      auth.ts
│      bookmark.ts
│      comment.ts
│      notification.ts
│      store.ts
│
├─assets
│  └─images
│
├─components
│  │  BookMarkButton.tsx
│  │  button.tsx
│  │  Card.tsx
│  │  Category.tsx
│  │  Comment.tsx
│  │  EditStore.tsx
│  │  Input.tsx
│  │  Loading.tsx
│  │  Menu.tsx
│  │  Message.tsx
│  │  NoReview.tsx
│  │  Select.tsx
│  │  Toggle.tsx
│  │  WriteReview.tsx
│  │
│  ├─bookmark
│  │      NoBookMark.tsx
│  │
│  ├─map
│  │      MapMarker.tsx
│  │      MyLocation.tsx
│  │      Search.tsx
│  │
│  ├─register
│  │      InputSection.tsx
│  │      RegisterButton.tsx
│  │
│  └─routeGuards
│          AuthGuard.tsx
│          MainGuard.tsx
│          PublicGuard.tsx
│
├─constants
│      categories.ts
│
├─hooks
│      useComment.ts
│      useFadeNavigate.ts
│      useFetchBookmark.ts
│      useFetchStores.ts
│      useMyLocation.ts
│      useMyStore.ts
│      useSearch.ts
│      useToggle.ts
│
├─layouts
│      BottomNavBar.tsx
│      layout.tsx
│      TopBar.tsx
│
├─mocks
│      myBookMark.json
│      truckDatas.json
│
├─pages
│  │  BookMarkPage.tsx
│  │  DetailPage.tsx
│  │  LoginPage.tsx
│  │  MainPage.tsx
│  │  MapPage.tsx
│  │  MyPage.tsx
│  │  NotificationPage.tsx
│  │  SignUpPage.tsx
│  │
│  └─owner
│          index.tsx
│          MyTruckPage.tsx
│          RegisterPage.tsx
│
├─store
│      mapLocationStore.ts
│      notificationStore.ts
│      storesStore.ts
│      titleStore.ts
│      userStore.ts
│
└─types
        auth.d.ts
        bookmark.d.ts
        category.d.ts
        comment.d.ts
        notification.d.ts
        response.d.ts
        store.d.ts
        user.d.ts
```
