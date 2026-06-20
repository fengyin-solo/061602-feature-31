import type { Weather, WeatherEffect, BerryType, GrowthStage, Personality, PairingPreference } from '@/types/game'

export const ATTR_MIN = 0
export const ATTR_MAX = 100
export const DEATH_THRESHOLD = 10

export const STAGE_DURATION: Record<Exclude<GrowthStage, 'adult'>, number> = {
  egg: 1,
  chick: 2,
  juvenile: 2,
  subadult: 1,
}

export const STAGE_NAMES: Record<GrowthStage, string> = {
  egg: '🥚 蛋',
  chick: '🐣 雏鸟',
  juvenile: '🐥 幼鸟',
  subadult: '🦜 亚成鸟',
  adult: '🐦 成鸟',
}

export const STAGE_EMOJI: Record<GrowthStage, string> = {
  egg: '🥚',
  chick: '🐣',
  juvenile: '🐥',
  subadult: '🦜',
  adult: '🐦',
}

export const FOOD_NEED_MULTIPLIER: Record<Exclude<GrowthStage, 'egg'>, number> = {
  chick: 1.5,
  juvenile: 1.2,
  subadult: 1.0,
  adult: 0.8,
}

export const HUNGER_DECAY_RATE = 1.5
export const FEAR_DECAY_RATE = 0.8
export const HEALTH_RECOVERY_RATE = 0.5

export const BERRY_SPAWN_INTERVAL = 4000
export const BERRY_MAX_COUNT = 8
export const BERRY_LIFETIME = 20000

export const BERRY_VALUES: Record<BerryType, number> = {
  red: 10,
  blue: 15,
  golden: 25,
}

export const BERRY_COLORS: Record<BerryType, string> = {
  red: '#C41E3A',
  blue: '#4169E1',
  golden: '#FFD700',
}

export const BERRY_EMOJI: Record<BerryType, string> = {
  red: '🍒',
  blue: '🫐',
  golden: '✨',
}

export const WEATHER_CHANGE_INTERVAL = 25000

export const WEATHER_EFFECTS: Record<Weather, WeatherEffect> = {
  sunny: { hungerMod: 1.0, fearMod: 0.8, healthMod: 1.0 },
  rainy: { hungerMod: 1.3, fearMod: 1.5, healthMod: 0.9, awayChance: 0.08 },
  snowy: { hungerMod: 1.5, fearMod: 1.2, healthMod: 0.7, sickChance: 0.12 },
  stormy: { hungerMod: 1.2, fearMod: 2.0, healthMod: 0.6, awayChance: 0.2, sickChance: 0.18 },
}

export const WEATHER_NAMES: Record<Weather, string> = {
  sunny: '☀️ 晴天',
  rainy: '🌧️ 雨天',
  snowy: '❄️ 雪天',
  stormy: '🌪️ 暴风',
}

export const WEATHER_COLORS: Record<Weather, string> = {
  sunny: 'from-amber-300/30 to-yellow-200/20',
  rainy: 'from-blue-400/40 to-gray-500/30',
  snowy: 'from-blue-100/40 to-white/30',
  stormy: 'from-gray-600/50 to-purple-800/40',
}

export const PERSONALITY_NAMES: Record<Personality, string> = {
  bold: '勇敢大胆',
  shy: '胆小害羞',
  gentle: '温柔恬静',
  curious: '好奇活泼',
  stubborn: '倔强独立',
}

export const PERSONALITY_EMOJI: Record<Personality, string> = {
  bold: '💪',
  shy: '🥺',
  gentle: '🌸',
  curious: '🌟',
  stubborn: '😤',
}

export const DAY_DURATION = 60000
export const INITIAL_FOOD = 30
export const MIN_EGGS = 2
export const MAX_EGGS = 4
export const MAX_BREEDING_ROUNDS = 2

export const BIRD_NAMES = [
  '毛毛', '豆豆', '啾啾', '喳喳', '花花', '点点', '果果', '泡泡',
  '糖糖', '圆圆', '小米', '小麦', '云朵', '星星', '月亮', '太阳',
  '小橘', '小蓝', '小绿', '小红', '阿黄', '阿白', '阿黑', '阿灰',
]

export const PAIRING_NAMES: Record<PairingPreference, string> = {
  brave: '勇猛果敢',
  gentle: '温婉柔和',
  energetic: '活力四射',
  natural: '顺其自然',
}

export const PAIRING_EMOJI: Record<PairingPreference, string> = {
  brave: '🦅',
  gentle: '🌸',
  energetic: '⚡',
  natural: '🌿',
}

export const PAIRING_DESCRIPTIONS: Record<PairingPreference, string> = {
  brave: '后代倾向勇敢大胆和好奇活泼，更容易探索外界但也不怕风险',
  gentle: '后代倾向温柔恬静和胆小害羞，更注重健康与安全感',
  energetic: '后代倾向好奇活泼和倔强独立，精力旺盛但偶尔倔强难管',
  natural: '不刻意引导，后代性格随机呈现，一切交给命运',
}

export const PAIRING_PERSONALITY_WEIGHTS: Record<PairingPreference, Personality[]> = {
  brave: ['bold', 'bold', 'bold', 'curious', 'curious', 'bold', 'stubborn'],
  gentle: ['gentle', 'gentle', 'shy', 'shy', 'gentle', 'bold', 'curious'],
  energetic: ['curious', 'curious', 'stubborn', 'bold', 'curious', 'stubborn', 'gentle'],
  natural: ['bold', 'shy', 'gentle', 'curious', 'stubborn'],
}

export const PAIRING_EVENTS: Record<PairingPreference, { message: string; type: string }[]> = {
  brave: [
    { message: '🦅 小鸟们在巢边练习展翅，勇敢地迎风而立！', type: 'success' },
    { message: '💪 一只胆大的小鸟试图飞出巢穴探险，被同伴叫了回来', type: 'warning' },
    { message: '🌟 勇敢的基因在血脉中流淌，幼鸟们格外好奇外面的世界', type: 'info' },
  ],
  gentle: [
    { message: '🌸 小鸟们依偎在一起，互相梳理羽毛，温馨极了', type: 'success' },
    { message: '💧 温柔的幼鸟们对下雨有些害怕，紧紧挤在一起取暖', type: 'info' },
    { message: '🪶 柔和的性格让它们更善于互相关照，健康恢复加快', type: 'success' },
  ],
  energetic: [
    { message: '⚡ 小鸟们在巢里蹦蹦跳跳，精力旺盛得停不下来！', type: 'success' },
    { message: '😤 一只倔强的幼鸟拒绝进食，坚持了好一会儿才妥协', type: 'warning' },
    { message: '🌟 活力满满的基因让幼鸟们成长速度似乎更快了', type: 'info' },
  ],
  natural: [
    { message: '🌿 大自然自有安排，小鸟们随性地成长着', type: 'info' },
    { message: '🍀 顺应天性的方式让每一只幼鸟都独一无二', type: 'success' },
  ],
}
