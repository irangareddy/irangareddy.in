export const profile = {
  name: 'ranga reddy nukala',
  email: 'sairangareddy22@gmail.com',
  emailLabel: 'sairangareddy22@gmail[dot]com',
}

export const intro = [
  [
    { text: "i'm a product engineer: jack of all trades, master of apple platforms. i ship across ios, web, backend, and ai, and go deepest on apple. two-time apple swift student challenge winner." },
  ],
  [
    { text: 'i build things for the internet and keep returning to ideas that feel a little too ambitious at first.' },
  ],
  [
    { text: 'most of my work lives somewhere between software, research, and curiosity, usually with a bias toward shipping.' },
  ],
]

// Every fact here must match ~/Career/Resume/Format/master.tex (verified 2026-10-06).
export const now = [
  {
    name: 'stealth startup',
    detail: 'co-founding. a consumer app, 35 app store releases in.',
  },
  {
    name: 'wishper',
    href: 'https://github.com/irangareddy/wishper-app',
    detail: 'on-device dictation for mac. ~26× faster than real time on an m4.',
  },
  {
    name: 'go2-sparky',
    href: 'https://pypi.org/project/go2-sparky/',
    detail: 'control library for the unitree go2 robot dog, driven by vision pro hand tracking.',
  },
  {
    name: 'boreas',
    detail: 'neural surrogates for data-center cooling. semi-therm 2027 submission.',
  },
  {
    name: 'dew',
    href: 'https://apps.apple.com/app/id6470129770',
    detail: 'a daily wisdom app, on the app store since 2023.',
  },
]

export const outro = [
  [
    { text: 'some ideas turn into products. some turn into experiments. some stay as notes until the right version of them shows up later.' },
  ],
  [
    { text: 'this site is a small record of what i am building, what i am thinking about, and what keeps pulling me back in. longer notes live on the ' },
    { text: 'blog', underline: true, href: 'https://blog.irangareddy.in' },
    { text: '.' },
  ],
]

export const contactLinks = [
  {
    href: 'https://github.com/irangareddy',
    label: 'github',
    detail: 'life monorepository',
  },
  {
    href: 'https://linkedin.com/in/irangareddy',
    label: 'linkedin',
    detail: 'the formal version',
  },
  {
    href: 'https://x.com/irangareddy',
    label: 'x [dot] com',
    detail: "updates, builds, whatever i'm thinking about that day",
  },
  {
    href: 'https://doi.org/10.1109/SOSE71128.2026.00017',
    label: 'paper',
    detail: 'ieee sose 2026, recipe retrieval',
  },
]

export const learningWall = {
  route: '/wall',
  aliases: ['/learning'],
  title: 'wall',
  items: [
    { label: 'evals', href: 'https://blog.irangareddy.in/archive.html', emphasis: true },
    { label: 'tokenization & embeddings', disabled: true },
    { label: 'positional embeddings', disabled: true },
    { label: 'self-attention', disabled: true },
    { label: 'multihead attention', disabled: true },
    { label: 'transformers + qkv', disabled: true },
    { label: 'sampling params', disabled: true },
    { label: 'kv cache', disabled: true },
    { label: 'long context', disabled: true },
    { label: 'mixture of experts', disabled: true },
    { label: 'grouped query attention', disabled: true },
    { label: 'normalization + activations', disabled: true },
    { label: 'pretraining objectives', disabled: true },
    { label: 'finetuning', disabled: true },
    { label: 'instruction tuning', disabled: true },
    { label: 'rlhf', disabled: true },
    { label: 'scaling laws', disabled: true },
    { label: 'quantization', disabled: true },
    { label: 'inference stacks', disabled: true },
    { label: 'training stacks', disabled: true },
    { label: 'synthetic data', disabled: true },
  ],
}
