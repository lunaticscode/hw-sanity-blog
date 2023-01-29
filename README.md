## File Structure

```
├── _types
│   └── atomTypes.ts
├── components // 페이지 컴포넌트를 제외한 UI 컴포넌트
│   ├── common // 공통 UI 컴포넌트
│   │   ├── AppError.tsx
│   │   ├── AppCustomHead.tsx
│   │   ├── AppHeader.tsx
│   │   ├── AppLayout.tsx
│   │   ├── AppLoading.tsx
│   │   ├── AppLogo.tsx
│   │   └── AppNav.tsx
│   └── page // 각 페이지에서 쓸 UI 컴포넌트
├── next.config.js
├── package-lock.json
├── package.json
├── pages
│   ├── _app.tsx
│   ├── _document.tsx
│   ├── api
│   │   └── hello.ts
│   ├── index.tsx
│   ├── post
│   │   ├── [id].tsx
│   │   └── index.tsx
│   └── profile.tsx
├── public
│   ├── favicon.ico
│   ├── hw-blog-logo.png
│   ├── next.svg
│   ├── thirteen.svg
│   └── vercel.svg
├── hocs // 고차 컴포넌트
│   └── withGetServerSideProps.ts
├── recoil // 상태관리
│   └── atoms.ts
├── styles // 스타일링 코드
│   ├── Home.module.css
│   ├── common // 스타일 생성에 필요한 믹스인, 변수 등 관리
│   │   ├── _mixin.scss
│   │   ├── _variables.scss
│   │   └── index.scss
│   ├── components // 각 컴포넌트 스타일링
│   │   ├── _appHeader.scss
│   │   ├── _appLogo.scss
│   │   ├── _appMain.scss
│   │   ├── _appNav.scss
│   │   └── index.scss
│   ├── globals.css
│   └── index.scss
├── tsconfig.json
├── utils // 전역으로 쓸 함수 및 변수 관리
│   └── sanityClient.ts
```

##
