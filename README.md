# 🎨 이은솔 포트폴리오 웹사이트 (Portfolio)

Figma 디자인 시스템(`node-id: 7062-2571`)을 1:1로 정밀하게 반영하여 제작된 **이은솔 디자이너 웹 포트폴리오**입니다.
VS Code(Visual Studio Code)에서 바로 열어 실시간으로 수정하고 브라우저로 확인할 수 있습니다.

---

## 📁 프로젝트 폴더 구조

```text
portfolio/
├── index.html          # 메인 HTML 마크업 (시맨틱 구조, 피그마 레이아웃 반영)
├── css/
│   └── style.css       # 피그마 디자인 시스템 토큰 및 정밀 스타일시트
├── js/
│   └── main.js         # 네비게이션, 모바일 메뉴, 탭 필터링, 스크롤 인터랙션
├── images/             # 이미지 및 SVG 그래픽 파일 폴더
│   ├── logo.svg / logo.png
│   ├── hero.svg / hero.png
│   ├── ikea1.svg, ikea2.svg
│   ├── apple1.svg, apple2.svg
│   └── card1.svg ~ card4.svg
└── README.md           # 설명서 및 수정 가이드
```

---

## 🚀 VS Code에서 열고 실행하는 방법

1. **VS Code 실행**
2. 메뉴에서 `파일(File)` > `폴더 열기(Open Folder...)` 선택
3. 바탕화면의 **`portfolio`** 폴더를 선택하여 엽니다.
4. `index.html` 파일을 더블 클릭하여 엽니다.
5. **실시간 미리보기 방법**:
   - **방법 1 (추천)**: VS Code 확장 프로그램에서 **'Live Server'** 설치 후, `index.html` 파일 우클릭 > **'Open with Live Server'** 클릭
   - **방법 2**: `index.html` 파일을 크롬(Chrome)이나 엣지(Edge) 브라우저로 드래그 앤 드롭하여 바로 확인

---

## 🛠️ 피그마 디자인 시스템 수정 가이드

### 1. 색상 및 디자인 토큰 (`css/style.css`)
```css
:root {
  --gray-bg: rgb(136, 135, 137);      /* #888789 - 배경(About, 스킬박스, 푸터) */
  --dark: rgb(17, 16, 19);            /* #111013 - 강조 텍스트, 타이틀 */
  --text: rgb(22, 21, 24);            /* #161518 - 본문 텍스트 */
  --light-gray: rgb(243, 244, 246);   /* #F3F4F6 - 액션 버튼 배경 */
  --divider: rgb(100, 100, 102);      /* #646466 - 구분선 색상 */
}
```

### 2. 피그마 컴포넌트 구조
- **Hero Section**: 인터랙티브 3D 그라디언트 블롭(Blob) 오브제 + 3단계 서브타이틀(`What matters → How it's refined → How it looks.`)
- **About Me**: 좌측 소개글 + 우측 4단 인포 블록(PROFILE, EDUCATION, CONTACT, Certificate)
- **Project Section**:
  - `IKEA 웹사이트 리디자인`: 모니터 브라우저 프레임 목업
  - `Apple Music 앱 리디자인`: `Mu [Disc] sic` 타이포그래피 배너 목업
  - `카드뉴스`: 2x2 정사각 그리드 목업
- **Action Buttons**: 둥근 알약형(`border-radius: 22px`) 액션 버튼(Github, 기획서, 사이트)
- **My Skill**: 2열 그리드 + 퍼센트 스킬 게이지 바 애니메이션
- **Footer**: `LET'S WORK TOGETHER` 대형 볼드 타이틀 + 알약형 `Let's Talk →` CTA 버튼

### 3. 실제 이미지 넣기 (`images/`)
준비된 이미지 파일들을 `images/` 폴더 안에 아래 파일명으로 넣어주시면 자동으로 실제 이미지로 표시됩니다:
- `logo.png`, `hero.png`
- `ikea1.png`, `ikea2.png`
- `apple1.png`, `apple2.png`
- `card1.png`, `card2.png`, `card3.png`, `card4.png`
