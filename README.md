## 원티드 프론트엔드 챌린지 과제 1
1. [과제 설명](#과제-설명)   
2. [과제 고민사항](#과제-고민사항)   

<br/>

## 과제 설명

<br/>

✔ <u>React와 History API 사용하여 SPA Router 기능 구현하기</u>

<br/>


**1) 해당 주소로 진입했을 때 아래 주소에 맞는 페이지가 렌더링 되어야 한다.**

- `/` → `root` 페이지
- `/about` → `about` 페이지

**2) 버튼을 클릭하면 해당 페이지로, 뒤로 가기 버튼을 눌렀을 때 이전 페이지로 이동해야 한다.**

- 힌트) `window.onpopstate`, `window.location.pathname` History API(`pushState`)

**3) Router, Route 컴포넌트를 구현해야 하며, 형태는 아래와 같아야 한다.**

```tsx
ReactDOM.createRoot(container).render(
  <Router>
    <Route path="/" component={<Root />} />
    <Route path="/about" component={<About />} />
  </Router>
);
```


**4) 최소한의 push 기능을 가진 useRouter Hook을 작성한다.**

```tsx
const { push } = useRouter();
```
<br/>

## 과제 고민사항

**1) 컴포넌트를 import 없이 props로 보냈을 때 화면에 그려줄까?**

( 컴포넌트를 return 하면 화면이 자동으로 그려짐 )

<br/>

**2) Route 위의 컴포넌트 Router가 어떻게 아래 정보들을 보여줄까?**

 ( {childre} )

<br/>

**3) 커스텀 훅을 어떻게 만들어야 return 되어 사용이 가능할까?**

 ( 그동안 만들어진 걸 당연시 생각하며 사용했었다… )

<br/>

**4) dispatchEvent, History API 등 다양한 기본 문법들이 있었다라는 점.**

