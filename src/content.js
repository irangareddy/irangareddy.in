export const profile = {
  name: 'ranga reddy nukala',
  email: 'sairangareddy22@gmail.com',
  emailLabel: 'sairangareddy22@gmail[dot]com',
  buttonLabel: 'wall',
  buttonHref: '/wall',
}

export const intro = [
  [
    { text: 'i build things for the internet and keep returning to ideas that feel a little too ambitious at first.' },
  ],
  [
    { text: 'some turn into products. some turn into experiments. some stay as notes until the right version of them shows up later.' },
  ],
  [
    { text: 'most of my work lives somewhere between software, research, and curiosity, usually with a bias toward shipping.' },
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
    href: 'https://x.com/irangareddy',
    label: 'x [dot] com',
    detail: "updates, builds, whatever i'm thinking about that day",
  },
  {
    href: '',
    label: 'scholar',
    detail: 'coming soon',
    disabled: true,
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
