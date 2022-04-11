# README 문서

```markdown
# 프로젝트 소개 
가구 전문 온라인 마켓인 '데코뷰'의 클론 사이트 프로젝트,
<위코뷰>입니다. 커머스 서비스의 기본적인 기능인 로그인, 회원가입, 상품 장바구니 기능을 실제 DB와 연결해 구현했습니다.

# 개발 인원 및 기간
### 개발기간 
2022/03/28 ~ 2022/04/08

### 개발 인원  
프론트엔드 1명, 백엔드 2명 , 프론트+백 2명

# github 링크 
[프론트엔드](https://github.com/wecode-bootcamp-korea/justcode-4-1st-win2mac3-front.git)
[백엔드](https://github.com/wecode-bootcamp-korea/justcode-4-1st-win2mac3-back.git)

# 프로젝트 선정이유
실제로 운영되고 있는 커머스 사이트이며, 쇼핑몰에서 자주 이용될만한 이미지 슬라이드 디자인과 레이아웃을 지니고 있었습니다.
상품의 다양한 옵션과 카테고리들을 어떻게 다루게 될지, 어떤 식으로 데이터가 이동하는지를 탐구하기 위해 이 사이트를 선정했습니다.

# 데모 화면

# 적용 기술 및 구현 기능
### 적용 기술 
- Front-End : React, js, sass, fontawesome
- Back-End :Node.js, express, Bcrypt, jsonwebtoken, My SQL 

### 구현 기능 
- Front-End
1. 메인 페이지 :  이미지 슬라이드, 상품 리스트 슬라이드
2. 서브 페이지 : (DB 연동)신상품, 베스트, 카테고리별 상품리스트 페이지
3. 로그인/회원가입 페이지 : 화면 구현 및 유효성 검사, 데이터 전송
4. 상품 페이지 : (DB 연동)상품 옵션 선택 후 장바구니 담기

- Back-End
1. 메인 페이지 : DB의 상품 리스트를 불러오는 API
2. 서브 페이지 : 상품을 신상품, 베스트 별로 분류하여 불러오는 API
3. 로그인/회원가입 : 가입한 회원을 DB에서 관리 후 웹토큰 발급
4. 상품 페이지 : 선택된 옵션을 장바구니에 담으면 해당 정보를 DB에 저장
5. 회원/비회원 인가 : 구매 및 장바구니 이용 시, 해당 유저가 회원인지 비회원인지 구분
6. 장바구니 페이지 : 로그인 여부에따라 장바구니의 물품 추가 삭제 수량 변경

_이 프로젝트는 주식회사 데코뷰 사이트를 참조하여 학습목적으로 만들었습니다._
_실무수준의 프로젝트이지만 학습용으로 만들었기 때문에 이 코드를 활용하여 이득을 취하거나 무단 배포할 경우 법적으로 문제될 수 있습니다._ 
_이 프로젝트에서 사용하고 있는 모든 이미지들은 무료 이미지 및 자가제작 이미지들입니다._
```
