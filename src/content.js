import { workGroups } from './work'

export const profile = {
  name: 'ranga reddy nukala',
  email: 'sairangareddy22@gmail.com',
  emailLabel: 'sairangareddy22@gmail[dot]com',
}

export const intro = [
  [
    { text: "i'm a founding engineer in san francisco, working across ai, apps, and backend systems. my roots are in apple platforms." },
  ],
  [
    { text: "currently co-founding beet, where i own the apps, backend api, llm event pipeline, and releases. elsewhere, i work on speech models, on-device inference, and interfaces that connect people to robots." },
  ],
  [
    { text: 'two-time apple swift student challenge winner. m.s. in applied data intelligence from san josé state, 2026.' },
  ],
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
