### Setting

1. 기본설정
    >express와 필요한 것들 설치
    * npm install -g express-generator
    * express {projectname} && npm install

2. npm start
    * 없다고 뜨는 모듈들 설치 하면 된다

3. 바벨 설치
    * npm install -g nodemon
    * npm install --save @babel/polyfill
    * npm install --save-dev @babel/core @babel/cli @babel/preset-env @babel/node
    >nodejs가 최신 스펙의 javascript를 해석할 수 있도록 트랜스파일 해주는 모듈
    * 설치 끝나면 프로젝트 루트에 .babelrc 파일 생성
        * {
  "presets": [
    [
      "@babel/preset-env", {
        "targets": {
          "node": "current"
        }
      }
    ]
  ]
}
    * package.json도 수정
        * script - start : nodemon {경로} --exec babel-node --presets @babel/preset-env 추가

4. 몽고 디비 설치
    * npm install mongodb --save
    * npm install mongoose --save

5. Session 모율
    * npm install express-session