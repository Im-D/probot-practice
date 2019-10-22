# Probot-practise

test
pr test

pr test
  
- [probot 공식 사이트](https://probot.github.io/)
- [probot 개발 Docs](https://probot.github.io/docs/)
- [참고 사이트](https://blog.outsider.ne.kr/1390)

> 현재는 모든 사람들이 바로 개발 및 테스트를 하기 위해서 `.env` 파일을 추가했습니다. 실제 개발에서는 올리지 않을 예정

## 서버 실행시키기

```sh
# Install dependencies
npm install

# Run the bot
npm start

# Run the bot for dev
npm run dev
```

## probot framework로 프로젝트 만들기

React의 CRA와 동일하게 프로젝트를 바로 생성이 가능하다.

```shell
npx create-probot-app my-project-name
```

이후에 나오는 여러가지 정보는 자유롭게 입력을 하여 프로젝트를 생성한다.

## 프록시 서버 만들기

GitHub App을 개발하는데 있어서 GitHub API의 사용을 필수적이다. GitHub App Hook을 날릴 수 있는 사이트를 넣어주어야 하지만, 현재는 개발 서버로 localhost로 보낼 수 없다. 이럴 때 도와주는 것이 바로 `seem.io`이다.

`seem.io`에 들어가게 되면 버튼 하나로 하나의 프록시 서버를 만들 수 있으며 만들어진 주소를 GitHub App 만들기 창에 추가를 해주면 Hook은 그 주소로 보내고 되고 `seem.io`에서 나의 주소로 보내주게 되는 것이다.

 ## .env 설정
 
 즉 환경변수를 설정해주는 파일이다. 
 
 ```
# The ID of your GitHub App
APP_ID=32017
WEBHOOK_SECRET=development

# Use `trace` to get verbose logging or `info` to show less
LOG_LEVEL=debug

# Go to https://smee.io/new set this to the URL that you are redirected to.
WEBHOOK_PROXY_URL=https://smee.io/n9bfnwV1JBvcyZU
```

기본 구성은 APP_ID, WEBHOOK_SECRET, LOG_LEVEL, WEBHOOK_PROXY_URL 4가지로 위에서 부터 보면,

APP_ID : new GitHub App으로 만든 앱의 고유 번호를 넣어주면 된다.
WEBHOOK_SECRET : WEBHOOK을 사용하는데 키이다. 간단하게 DB의 시크릿 키와 동일하다.
LOG_LEVEL : LOG를 어느 레벨까지 보여줄 것인지에 대한 설정이다.
WEBHOOK_PROXY_URL : 위에서 설명한 프록시 서버의 주소를 입력해준다.


## history


## License

[ISC](../LICENSE) © 2019 Im-D <seonhyung.jo@gmail.com>

