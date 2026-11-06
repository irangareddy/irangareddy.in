import { workGroups } from './work.js'

export const profile = {
  name: 'ranga reddy nukala',
  email: 'sairangareddy22@gmail.com',
  emailLabel: 'sairangareddy22@gmail[dot]com',
}

export const intro = [
  [
    { text: 'i started with apple platforms. ' },
    { text: 'the projects kept getting wider.' },
  ],
  [
    { text: "i'm a co-founder at beet. along the way, i've built on-device dictation for mac, fine-tuned emotional speech models, and used vision pro to control a robot dog." },
  ],
  [
    { text: 'two-time apple swift student challenge winner.\n' },
    { text: "master's in applied data intelligence · san josé state, 2026" },
  ],
]

// Project links layered over the actual GPT token boundaries in the optional bio view.
export const bioProjectLinks = [
  { phrase: 'apple platforms', project: 'dew' },
  { phrase: 'beet', project: 'startup' },
  { phrase: 'speech models', project: 'voxe' },
  { phrase: 'on-device dictation', project: 'wishper' },
  { phrase: 'robot dog', project: 'go2' },
  { phrase: 'swift student challenge', project: 'carbon' },
]

// Selected public facts from the verified career record. Preserve team attribution,
// benchmark conditions and client confidentiality. Beet naming authorized on 2026-11-05.
export const allWork = workGroups.flatMap(group => group.items)
export const now = ["startup", "wishper", "voxe", "boreas", "go2", "plateplanner", "tiptapswift", "dew"].map(id => allWork.find(item => item.id === id))

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
    detail: 'code and experiments',
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
