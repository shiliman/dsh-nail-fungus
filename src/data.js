export const DATA = {
  id: 'dsh-nail-fungus',
  name: '灰指甲',
  prefix: 'nail',
  label: '灰指甲',
  defaultEeriness: 2,
  gain: 0.22,
  flareChance: 0.12,
  flareGain: 12,
  triggerWeight: 0.6,
  flareWeight: 0.7,
  reliefs: [
    { id: 'medicate', label: '涂药、包起来', relief: 16, minutes: 60, calm: 4 },
    { id: 'trim', label: '剪短磨薄', relief: 10, minutes: 40, calm: 3 },
  ],
  body: {
    stiff: '手指在桌沿上敲了两下，又收回去。',
    ache: '右手拇指那片指甲又黄又厚，边缘翘起来一点，打字时会刮到键帽。',
    flare: '刚才递东西的时候是用的左手。有人盯着看的话，会先把那只手揣进兜里。',
  },
  voice: {
    base: '不要主动提这件事；被问到就轻描淡写地带过，别解释细节。涉及"伸手、拿、递、拍"的动作时，能绕就绕。',
    flare: '允许有一次回避：把话题从手、照片、指甲上挪开。别自嘲过度，也别反复强调。',
  },
}
