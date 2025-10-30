# Design System

Vite + Storybook 기반 디자인 시스템 모노레포

## 구조

```
design-system/
├── apps/
│   └── storybook/          # 스토리북 문서
└── packages/
    └── ui/                 # UI 컴포넌트 패키지
```

## 시작하기

### 설치

```bash
pnpm install
```

### 개발

```bash
# Storybook 실행
pnpm dev

# UI 패키지 빌드
pnpm build:ui

# 전체 빌드
pnpm build
```

## 스크립트

- `pnpm dev` - Storybook 개발 서버 실행
- `pnpm build` - 모든 패키지 빌드
- `pnpm build:ui` - UI 패키지만 빌드
- `pnpm build:storybook` - Storybook 빌드
- `pnpm storybook` - Storybook 실행 (dev와 동일)

## 새 컴포넌트 추가하기

1. `packages/ui/src/components/`에 새 컴포넌트 폴더 생성
2. 컴포넌트와 스타일 작성
3. `packages/ui/src/index.ts`에서 export
4. `apps/storybook/stories/`에 스토리 파일 작성

## 기술 스택

- ⚡️ **Vite** - 빌드 도구
- ⚛️ **React 19** - UI 프레임워크
- 📚 **Storybook 8** - 컴포넌트 문서화
- 📦 **pnpm** - 패키지 매니저
- 🔷 **TypeScript** - 타입 시스템

