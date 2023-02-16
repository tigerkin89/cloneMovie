# 0 준비 작업

## 1. node 작업
- node 설치
- npx 설치 (보일러 플레이트)
  - npm install npx -g
    - npm add create-react-app (필요시))
  - 최초 한번만 설치한다.
  - 리액트 기초 환경을 생성
    - npx create-react-app 프로젝트명

## 2. Git 작업

- 로컬 저장소 초기화
  - git init
- github.com 저장소 만들기
  - 로그인 후 : Repositories --> New --> Create a new repository 작성
  - cli로 하는 것은 힘드네... VS Code에서 Git 툴을 이용하여 진행함 T.T

## nomade 강의

- JSX
- babel

## Git 명령어

- git clone ;local pc로 git hub depository 복사 
- git status ; local 변경된 파일을 git push 전에 변경된 파일 리스트 보기 확인 (modified: readme.md로 변경파일 확인)
```````
PS D:\mystudy\cloneMovie> git status
On branch master
Your branch is up to date with 'origin/master'.

Changes to be committed:
  (use "git restore --staged <file>..." to unstage)
        modified:   readme.md
```````
- git add readme.md ; 변경된 파일을 로컬 브런치에 upload 파일 등록
- git commit ; 로컬 브런치에 upload
````````
PS D:\mystudy\cloneMovie> git commit -m "push test"
[master 46cbe7f] push test
 1 file changed, 1 insertion(+)
PS D:\mystudy\cloneMovie> git status
On branch master
Your branch is ahead of 'origin/master' by 1 commit.
  (use "git push" to publish your local commits)

nothing to commit, working tree clean
`````````
- git push ; 로컬 브런치에서 commit한 내용을  remote 브런치 적용
````````
PS D:\mystudy\cloneMovie> git push
Enumerating objects: 5, done.
Counting objects: 100% (5/5), done.
Delta compression using up to 8 threads
Compressing objects: 100% (3/3), done.
Writing objects: 100% (3/3), 298 bytes | 99.00 KiB/s, done.
Total 3 (delta 2), reused 0 (delta 0), pack-reused 0
remote: Resolving deltas: 100% (2/2), completed with 2 local objects.
To https://github.com/tigerkin89/cloneMovie.git
   faa89bc..46cbe7f  master -> master
``````````

- 기타 명령어
  - git branch -av
  - git checkout filename ; local 파일을 remote 파일로 원복

