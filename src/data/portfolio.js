// ──────────────────────────────────────────────────────────────────
// 포트폴리오 이미지 관리
// - 이미지는 public/images/portfolio/ 폴더에 추가하세요
// - size: 'large' → 가로 2칸 (대표 작품), 'small' → 1칸
// ──────────────────────────────────────────────────────────────────

const img = (filename) =>
  `/images/portfolio/${encodeURIComponent(filename)}`

export const portfolioItems = [
  // ── 독도 ─────────────────────────────────────────────────────────
  {
    id: 1,
    title: '독도를 담다',
    category: '독도',
    image: img('박성빈 그는 감히 독도를 다녀왔다 (박감독).jpg'),
    size: 'large',
  },
  {
    id: 2,
    title: '독도의 파도',
    category: '독도',
    image: img('DJI_20251009163638_0029_D_BSB.JPG'),
    size: 'small',
  },
  {
    id: 3,
    title: '파도의 경계',
    category: '독도',
    image: img('DJI_20251009164140_0033_D_BSB.JPG'),
    size: 'small',
  },
  {
    id: 4,
    title: '독도 선착장',
    category: '독도',
    image: img('DJI_20251105093108_0062_D_BSB.JPG'),
    size: 'small',
  },
  // ── 울릉도 ────────────────────────────────────────────────────────
  {
    id: 5,
    title: '울릉도 공암',
    category: '울릉도',
    image: img('DJI_20251104150006_0007_D_BSB.JPG'),
    size: 'small',
  },
  {
    id: 6,
    title: '울릉도 해안 절경',
    category: '울릉도',
    image: img('DJI_20251104150042_0010_D_BSB.JPG'),
    size: 'small',
  },
  {
    id: 7,
    title: '울릉도 송곳산',
    category: '울릉도',
    image: img('DJI_20251104150702_0025_D_BSB.JPG'),
    size: 'small',
  },
  {
    id: 8,
    title: '울릉도 출렁다리',
    category: '울릉도',
    image: img('DJI_20251104153559_0047_D_BSB.JPG'),
    size: 'small',
  },
  // ── 자연 ─────────────────────────────────────────────────────────
  {
    id: 9,
    title: '자연이 머무는 곳, 두물머리의 숨결',
    category: '자연 촬영',
    image: img('자연이 머무는 곳, 두물머리의 숨결.JPG'),
    size: 'small',
  },
  {
    id: 10,
    title: '시간을 잇는 선로, 양수의 기억',
    category: '자연 촬영',
    image: img('시간을 잇는 선로, 양수의 기억.JPG'),
    size: 'small',
  },
  {
    id: 11,
    title: '노을과 갯벌의 어울림, 오이도',
    category: '자연 촬영',
    image: img('노을과 갯벌의 어울림 오이도.JPG'),
    size: 'large',
  },
  {
    id: 12,
    title: '가을, 노을 진 갯골생태공원',
    category: '자연 촬영',
    image: img('가을... 노을 진 갯골생태공원_박성빈1594.JPG'),
    size: 'small',
  },
  {
    id: 13,
    title: '수도권에서 만난 갯벌의 노을',
    category: '자연 촬영',
    image: img('수도권에서 만난 갯벌의 노을.JPG'),
    size: 'small',
  },
  {
    id: 14,
    title: '갯벌과 물의 흐름',
    category: '자연 촬영',
    image: img('DJI_20251025102404_0023_D_BSB.JPG'),
    size: 'small',
  },
  {
    id: 15,
    title: '서울로 흐르기 전, 양평의 숨결',
    category: '자연 촬영',
    image: img('서울로 흐르기 전, 양평의 숨결.JPG'),
    size: 'small',
  },
  {
    id: 16,
    title: '자연 속 출렁다리',
    category: '자연 촬영',
    image: img('자연 속 출렁다리.JPG'),
    size: 'small',
  },
  {
    id: 17,
    title: '드르니항의 아침과 꽃게다리',
    category: '항구 촬영',
    image: img('드르니항의 아침과 꽃게다리.JPG'),
    size: 'large',
  },
  {
    id: 18,
    title: '도심 속 푸른 텃밭의 일상',
    category: '도시 촬영',
    image: img('도심 속 푸른 텃밭의 일상.JPG'),
    size: 'small',
  },
]

// ──────────────────────────────────────────────────────────────────
// 서비스 항목
// ──────────────────────────────────────────────────────────────────

export const services = [
  {
    id: 1,
    num: '01',
    title: '항공 사진 촬영',
    description:
      '고해상도 드론 카메라로 어디서도 볼 수 없었던 시각으로 순간을 담아냅니다. 풍경, 건축, 자연 모두 가능합니다.',
  },
  {
    id: 2,
    num: '02',
    title: '항공 영상 촬영',
    description:
      '4K·8K 고화질 항공 영상으로 압도적인 시각적 경험을 전달합니다. 광고, 다큐멘터리, 뮤직비디오에 적합합니다.',
  },
  {
    id: 3,
    num: '03',
    title: '부동산 촬영',
    description:
      '건물과 단지의 가치를 극대화하는 전문 항공 촬영 서비스입니다. 분양 자료, 소개 영상 제작을 지원합니다.',
  },
  {
    id: 4,
    num: '04',
    title: '행사·이벤트 촬영',
    description:
      '야외 행사, 콘서트, 스포츠, 웨딩을 하늘 위에서 생동감 있게 기록합니다. 라이브 스트리밍 연동도 가능합니다.',
  },
]
