# node_study

1. node.js test용 서버 만들기와 정리 파일들

2. push 순서
    * git init
    * git add {경로}
    * git commit -m {메세지}
    * git remote add origin https://github.com/var-mingi/node_study.git
        * 리모트 안했을 경우만 (최초 한번만)
    * git push -u origin master

3. pull
    * git pull origin master

4. ignore에 설정한 파일이 올라갈때 캐쉬를 지워주면 된다
    * git rm -r --cached .
    * 이후 add 