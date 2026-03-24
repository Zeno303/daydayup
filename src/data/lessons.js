// 示例数据，后续替换为 D1 数据库接口
export const lessons = [
  {
    id: 1,
    book: 1,
    lesson_no: 1,
    title: 'Excuse me!',
    text_en: `Excuse me!\nYes?\nIs this your handbag?\nPardon?\nIs this your handbag?\nYes, it is.\nThank you very much.`,
    text_zh: `对不起，打扰一下！\n什么事？\n这是您的手提包吗？\n对不起，请再说一遍？\n这是您的手提包吗？\n是的，是我的。\n非常感谢。`,
    audio_url: null,
    words: [
      { word: 'excuse', phonetic: '/ɪkˈskjuːz/', meaning: '原谅；打扰', example: 'Excuse me, where is the station?' },
      { word: 'handbag', phonetic: '/ˈhændbæɡ/', meaning: '手提包', example: 'She lost her handbag.' },
      { word: 'pardon', phonetic: '/ˈpɑːrdən/', meaning: '原谅；请再说一遍', example: 'Pardon? I didn\'t hear you.' },
    ],
    questions: [
      {
        id: 1,
        type: 'choice',
        content: 'What does "Excuse me" mean?',
        options: ['再见', '对不起，打扰一下', '谢谢', '是的'],
        answer: '对不起，打扰一下',
        explanation: '"Excuse me" 用于礼貌地打扰别人或引起注意。',
      },
      {
        id: 2,
        type: 'fill',
        content: 'Is this _____ handbag? (your)',
        answer: 'your',
        explanation: '疑问句中用 your 表示"你的"。',
      },
    ],
  },
  {
    id: 2,
    book: 1,
    lesson_no: 2,
    title: 'Is this your...?',
    text_en: `Excuse me!\nYes?\nIs this your umbrella?\nNo, it isn't.\nIs this your umbrella?\nYes, it is.\nThank you very much.`,
    text_zh: `对不起！\n什么事？\n这是您的雨伞吗？\n不，不是。\n这是您的雨伞吗？\n是的，是我的。\n非常感谢。`,
    audio_url: null,
    words: [
      { word: 'umbrella', phonetic: '/ʌmˈbrelə/', meaning: '雨伞', example: 'Take an umbrella, it might rain.' },
    ],
    questions: [
      {
        id: 3,
        type: 'choice',
        content: '"It isn\'t" is the short form of:',
        options: ['It is not', 'It was not', 'It will not', 'It has not'],
        answer: 'It is not',
        explanation: "isn't = is not，是 is not 的缩写形式。",
      },
    ],
  },
]
