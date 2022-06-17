# 🍦 A Little Vanilla : Frontend

> 👉🏻 Summary <br />
> 이 프로젝트는 스프링부트와 리액트로 회원가입, 로그인, 카카오로그인, 상품 등록/조회/수정/삭제/좋아요/장바구니/구매 등 <br />
> 다양한 쇼핑몰 서비스를 제공하기 위해 만들어졌습니다. <br />
> 현재 [I am port](https://www.iamport.kr/?gclid=CjwKCAjws8yUBhA1EiwAi_tpEawr0NbpwdG_4bW9KRPVRXXVEdwQ32yO8SyXEhMBfxiqHIml3c8uxhoC2nYQAvD_BwE, "Iamport link") 결제 API를 연동하여 실제 거래까지 이루어지지만, 현재 배포된 사이트에서는 당일 자정에 모두 환불됩니다.<br />
> 안심하고 테스트 해보세요!
> <br />

## 사용 기술 스택

- **React**
  - Spring Framework에서 클래스패스의 라이브러리를 자동으로 인식하여 설정해주고 내장 서버를 제공하는 등 많은 편의성을 제공하기 때문에 빠른 개발이 가능하다고 생각하여 Spring Boot를 사용했습니다.
    서비스에서 회원 기능을 지원하기 때문에 이에 필수적인 인증, 인가 기능을 적용하기 위해 사용했습니다.
- JWT
  - 토큰 기반 인증을 구현하기 위해 사용하였습니다. Session 방식보다 확장성이 높고, 자원낭비가 덜하다고 생각해 (세션 클러스터링 등) 로그인 방식으로 JWT를 사용했습니다. [JWT](https://blog.naver.com/ghdalswl77/222517833354)
- **MySQL 8.0.26**
  - 상품 검색 기능을 지원하기 때문에 보다 편리한 검색을 위해 문자열 비교에서 대소 문자를 구분하지 않는다는 장점이 있는 MySQL을 사용했습니다.

<br />

## API 설계 및 진행상황

### 🎩 로그인/회원가입 및 회원 정보

일반 회원가입 <br />
![회원가입](https://user-images.githubusercontent.com/68539040/174229163-87deaa3e-713b-428f-8bce-c2c0478e492d.gif) <br />  <br />

회원 정보변경 <br />
![정보변경](https://user-images.githubusercontent.com/68539040/174230527-aedc5dc0-8883-4a3e-bac6-e682ff4d28fc.gif)  <br />  <br />


### 🛍 상품

| Feature    | Request | API                   | 설명                                                                                                                                                              | 체크 |
| ---------- | ------- | --------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---- |
| 상품작성   | POST    | /product/create       | 상품 1개 작성. 일반 회원이 아닌, 판매자 회원만 글 작성 가능.                                                                                                      | ☑️   |
| 상품조회   | GET     | /product/{idx}        | 상품 idx를 통한 상품 1개 조회. 본인이 작성한 글만 수정 가능.                                                                                                      | ☑️   |
| 상품삭제   | PATCH   | /product/delete/{idx} | 상품 idx를 통한 상품 1개 삭제. delete 문으로 글을 삭제하는 방식 대신 update 문으로 글의 status를 변경하여 비공개 처리 합니다. 본인이 작성한 글만 삭제 가능.       | ☑️   |
| 상품수정   | PATCH   | /product/{idx}        | 상품 정보 수정                                                                                                                                                    | ☑️   |
| 상품목록   | GET     | /product/list         | 모든 상품 목록 조회. 상품명, 판매자, 상품 사진 등 정보 포함.                                                                                                      | ☑️   |
| 상품검색   | GET     | /product/search       | 상품 검색. 가격대, 배송타입, 이미지만 보기 등 정렬 검색 기능. 상품명, 판매자, 상품 사진 등 정보 포함. [검색 기능](https://blog.naver.com/ghdalswl77/222661721733) | ☑️   |
| 좋아요     | GET     | /product/like/{idx}   | 상품 idx를 통한 상품 좋아요/좋아요 취소 기능. [Spring Boot 게시글 좋아요 기능](https://blog.naver.com/ghdalswl77/222686567891)                                    | ☑️   |
| 좋아요목록 | GET     | /product/likelist     | 회원 idx를 통한 상품 좋아요 목록 조회                                                                                                                             | ☑️   |

<br />

### 🧺 서랍

['서랍' 기능이란?](https://blog.naver.com/ghdalswl77/222695713878, "link")
| Feature | Request | API | 설명 | 체크 |
| ------ | -- | -- | -- | ----------- |
| 서랍 추가 | GET | /cabinet/add/{cbn_name} | 상품 1개 장바구니 담기 | ☑️ |
| 서랍 상품 추가 | PATCH | /cabinet/update/{product_idx}/{cbn_idx} | 서랍에 상품 추가. | ☑️ |
| 서랍 목록 | GET | /cabinet/cbnlist | 내 서랍 목록 조회 | ☑️ |
| 서랍 내 상품 목록 | GET | /cabinet/{cabinet_idx} | 서랍idx를 통한 서랍 내 상품 조회 | ☑️ |

<br />

### 🛒 장바구니

| Feature       | Request | API                | 설명                               | 체크 |
| ------------- | ------- | ------------------ | ---------------------------------- | ---- |
| 장바구니 추가 | POST    | /cart/in           | 상품 1개 장바구니 담기             | ☑️   |
| 장바구니 취소 | PATCH   | /cart/cancel/{idx} | 상품 idx를 통한 상품 장바구니 취소 | ☑️   |
| 장바구니 목록 | GET     | /cart/list         | 내 장바구니 목록 조회              | ☑️   |

<br />

### 📝 상품주문

| Feature  | Request | API | 설명      | 체크 |
| -------- | ------- | --- | --------- | ---- |
| 상품주문 | POST    | /   | 상품 주문 | ☑️   |
| 상품     | PATCH   | /   | 상품      | ☑️   |
| 상품     | GET     | /   | 상품      | ☑️   |

<br />

### 💳 결제

| Feature  | Request | API | 설명      | 체크 |
| -------- | ------- | --- | --------- | ---- |
| 상품결제 | POST    | /   | 상품 결제 | ☑️   |
| 상품     | PATCH   | /   | 상품      | ☑️   |
| 상품     | GET     | /   | 상품      | ☑️   |

<hr />
