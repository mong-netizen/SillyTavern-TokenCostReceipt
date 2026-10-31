# Token Cost Receipt (SillyTavern)

Marinara Engine 개인 확장 "Token Cost Receipt" 3.0.9를 실리태번으로 옮긴 버전입니다.
가격 프리셋, DeepSeek 시간대 요금, 장문 요금, 원화 환산은 원본 그대로입니다.

## 설치
1. 실리태번을 끕니다.
2. 이 폴더(`SillyTavern-TokenCostReceipt`)를 `SillyTavern/data/default-user/extensions/` 안에 넣습니다.
3. 실리태번을 켜고 Extensions(블록 아이콘) → Manage extensions에서 켜져 있는지 확인합니다.

## 사용
- AI 메시지 버튼 줄의 🧾(receipt) 아이콘 → 영수증 창
- 단가·통화·차감 방식: 영수증 창 아래 "이 모델 단가 설정"
- 시각 형식 토글·환율 갱신: 영수증 창의 ⚙, 또는 Extensions 패널의 Token Cost Receipt

## Marinara와 다른 점
- 실리태번은 API가 보고한 토큰 사용량을 저장하지 않습니다. 그래서 이 확장이 응답을 직접 읽어
  메시지에 기록합니다. **확장을 켠 뒤 새로 생성한 메시지부터** 영수증이 생깁니다.
- 사용량이 잡히는 조건
  - Claude, Gemini: 스트리밍 **켜기**
  - OpenAI 공식: 스트리밍 **끄기**
  - OpenRouter, DeepSeek: 둘 다 가능 (OpenRouter는 실제 청구액도 표시)
  - Custom: 스트리밍이면 Additional Parameters → Include Body에 `stream_options: {include_usage: true}`
- Continue로 이어 쓴 메시지는 요청들을 합산합니다.
- Peek Prompt 조회 방식 설정은 필요 없어서 뺐습니다.
- Marinara에 저장해 둔 단가 프로필은 옮겨지지 않아서 다시 저장해야 합니다.
