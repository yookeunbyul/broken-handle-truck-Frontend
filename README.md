# 🚚 핸들이 고장난 푸드트럭(broken-handle-truck)

![핸들이-고장난-푸드트럭-001 (1)](https://github.com/user-attachments/assets/7c816e25-69e6-4ea7-9ab5-3175fc32f86c)

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
 
<br />

## 프로젝트 구조

![스크린샷 2024-11-07 오전 11 30 14](https://github.com/user-attachments/assets/1eb747fd-4780-4956-ba19-7c7cb9292100)

<br />

## 화면설계서

![Section 1](https://github.com/user-attachments/assets/6da44432-0abf-44c6-848d-1ec1f6b6a45f)

<br />

## 주요 기능

- **회원가입 및 로그인(카카오 로그인)**

  <img src="https://github.com/user-attachments/assets/451baff6-e299-4a10-b436-bf1190a25b4f" width="500">

- 지도에서 가게 정보 확인(카드, 상세페이지)

  <img src="https://github.com/user-attachments/assets/b2cc1968-e2a9-405a-b19f-c94aa96f760f" width="500">

- 검색, 카테고리 기능

  <img src="https://github.com/user-attachments/assets/563f8424-fc9a-4829-9c30-e0f532751bf4" width="500">

- 북마크

  <img src="https://github.com/user-attachments/assets/ade3e74d-6734-4e17-9954-bbf3047ed770" width="500">
  
- 알림

  <img src="https://github.com/user-attachments/assets/ee067b90-5a26-4ee0-b39e-442dace1a1bb" width="500">

- 가게 등록 및 관리(수정, 삭제)

  <img src="https://github.com/user-attachments/assets/79193f58-79b8-498e-b335-697344f01c34" width="500">
    
- 리뷰(댓글) 남기기

  <img src="https://github.com/user-attachments/assets/4e82f206-535b-47fb-b167-b7d7896ab086" width="500">
  
<br />

## 코드 컨벤션

- 폴더 구조

  ```
  src
  │
  ├─apis     #API 관련 로직
  ├─assets     #이미지 등 정적 파일
  ├─components     #재사용 가능한 컴포넌트 모음
  ├─constants     #데이터
  ├─hooks     #커스텀 훅
  ├─layouts     #페이지 레이아웃 컴포넌트
  ├─mocks     #목업 데이터
  ├─pages     #라우터 페이지
  ├─store     #전역 상태 관리(zustand)
  └─types     #타입 정의
  ```

- 파일 명명 규칙

  ```
  - 컴포넌트: PascalCase (예: `Button.jsx`, `UserProfile.jsx`)
  - 유틸리티, 훅: camelCase (예: `useForm.js`, `formatDate.js`)
  - customHook을 사용하는 경우 : use + 함수명
  ```

- axios instance 생성

  ```js
  const service = axios.create({
     baseURL: `${import.meta.env.VITE_API_URL}/api/`,
     withCredentials: true,
     timeout: 10000,
  });
  ```

<br />

## 향후 계획

  ```
  1. 가게 제보하기(타인 등록 가능)
  2. 고객 리뷰에 사장님의 답글
  3. 스토어 등록 시 사장님 인증 (실제 운영하는 가게 사진)
  ```
