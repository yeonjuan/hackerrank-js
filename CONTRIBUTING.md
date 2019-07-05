## Contributing

### 공통 사항

- pull request 를 하기전에 `npm run lint` 를 실행해 코드 스타일을 일치 시킵니다.

### 새로운 문제 풀이
[해커 랭크](https://www.hackerrank.com/)의 문제중 현재 **issues**, **README.md**에 없거나, *assignees*가 할당 되지 않은 문제를 풀수 있습니다.
- **issues**에 풀 문제를 **issue**로 등록하고 본인을 **assignees**에 할당합니다.
- **issue** 제목은 `[대분류]: [문제이름]` 형태로 작성합니다.
- 본문에는 해당 문제의 링크를 첨부합니다.
- 해당 **issue** 에 **problem label**을 추가합니다.

### 파일 구조
`./[대분류]/[소분류]/[문제 이름].js` 형태로 파일 구조를 유지합니다.

### 커밋 메시지

- 커밋 메시지는 `[type] [#issue번호]-[커밋 내용]` 형태로 작성합니다.
- `[type]`에는 다음의 키워드가 올 수 있습니다.
    - resolve: 문제를 푼 커밋
    - docs: 오직 문서만 수정한 커밋
    - refactor: 리팩토링 or 코드리뷰 반영
    - chore: 그 밖의 일
    
### Pull Request

- *yeonjuan*, *heeveloper* 를 *reviewers*에 추가한후 *pull request*합니다.
