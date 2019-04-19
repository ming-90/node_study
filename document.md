### Node.js

1. 기본설정
    >express와 필요한 것들 설치
    * npm install -g express-generator
    * express {projectname} && npm install

2. dotenv
    >node를 실행할때 시스템 변수를 명시적으로 지정하는 방법<br>
     dotenv를 사용하여 관리
    * npm install dotenv
    >프로젝트 루트에 .ev 파일 생성
    * NODE_ENV=development<br>
      DEBUG={projectname}:server<br>
      PORT=3000

3. npm start
    >서버를 실행하면 모듈이 없다고 뜨면서 에러가 남<br>
     npm install 로 모듈 설치 하면 된다