프로그래머스 1기 3차 10팀 핸들이 고장난 푸드트럭입니다

작업 흐름

1. fork 받는다
2. fork 받은 내 레포지토리에서 develop 브랜치를 git clone (git clone -b develop https://github.com/....)
4. npm install -> 클론 받은 프로젝트 디렉토리로 이동하여, 현재 package.json에 정의된 의존성을 설치
5. 개발하고 로컬에서 커밋을 만든다
6. 작업을 완료한 후, 포크 받은 개인 레포지토리에 푸시합니다
7. 푸시 후, 원본 프로젝트로 Pull Request를 생성하여 코드 리뷰 및 병합을 요청합니다.
