export const profile = {
  name: 'Ranga Reddy Nukala',
  shortName: 'RR',
  role: 'Product-minded AI engineer',
  location: 'California',
  email: 'sairangareddy22@gmail.com',
  status: 'building at the edge of agents, Apple platforms, and applied AI',
}

export const socialLinks = [
  { label: 'GitHub', href: 'https://github.com/irangareddy' },
  { label: 'Journal', href: 'https://blog.irangareddy.in' },
  { label: 'X / Twitter', href: 'https://x.com/irangareddy' },
  { label: 'Email', href: `mailto:${profile.email}` },
]

export const practiceAreas = [
  {
    number: '01',
    title: 'On-device intelligence',
    description: 'Speech, compact models, and private AI experiences designed to run where the user is.',
  },
  {
    number: '02',
    title: 'Agent systems',
    description: 'Tools and workflows that help agents remember context, coordinate work, and ship products.',
  },
  {
    number: '03',
    title: 'Apple + spatial',
    description: 'Native Swift interfaces, reusable packages, and experiments where software meets the physical world.',
  },
  {
    number: '04',
    title: 'Applied ML systems',
    description: 'Evaluation, data pipelines, forecasting, and practical infrastructure for turning models into useful systems.',
  },
]

export const featuredProjects = [
  {
    name: 'Wishper',
    eyebrow: 'On-device voice · macOS',
    description: 'Private voice-to-text with local transcription and LLM cleanup. Hold a key, speak, and polished text lands in any Mac app.',
    year: '2026',
    href: 'https://github.com/irangareddy/wishper-app',
    liveHref: 'https://wishper.irangareddy.in',
    signal: 'local first',
    tone: 'lime',
  },
  {
    name: 'Frontier Challenges',
    eyebrow: 'AI engineering · research',
    description: 'Hands-on experiments with compact models, evaluation, fine-tuning, transcription, and full-duplex voice.',
    year: '2026',
    href: 'https://github.com/irangareddy/frontier-challenges',
    signal: 'in progress',
    tone: 'amber',
  },
  {
    name: 'TipTap Swift',
    eyebrow: 'Developer tool · Swift',
    description: 'A native Swift package that brings TipTap’s rich-text editing model to iOS with compatible HTML in and out.',
    year: '2026',
    href: 'https://github.com/irangareddy/tiptap-swift',
    signal: 'open source',
    tone: 'blue',
  },
  {
    name: 'Sparky',
    eyebrow: 'Robotics · spatial computing',
    description: 'A lightweight Python control layer for responsive Go2 robot experiments and Apple Vision Pro interaction.',
    year: '2025',
    href: 'https://github.com/irangareddy/sparky',
    signal: 'physical AI',
    tone: 'coral',
  },
]

export const projectFilters = [
  { key: 'all', label: 'Everything' },
  { key: 'ai', label: 'AI + voice' },
  { key: 'agents', label: 'Agents + tools' },
  { key: 'apple', label: 'Apple + spatial' },
  { key: 'data', label: 'Data + systems' },
]

export const projects = [
  {
    name: 'Wishper', year: '2026', category: 'ai', stack: 'Swift · MLX · macOS',
    description: 'Native, local-first dictation with on-device transcription and language cleanup.',
    href: 'https://github.com/irangareddy/wishper-app', liveHref: 'https://wishper.irangareddy.in', featured: true,
  },
  {
    name: 'Frontier Challenges', year: '2026', category: 'ai', stack: 'Python · notebooks · evals',
    description: 'Practical model experiments run under meaningful compute and product constraints.',
    href: 'https://github.com/irangareddy/frontier-challenges', featured: true,
  },
  {
    name: 'AGmail', year: '2026', category: 'agents', stack: 'Python · agents · Gmail',
    description: 'A personal agent for turning email into a calmer, more actionable workflow.',
    href: 'https://github.com/irangareddy/agmail',
  },
  {
    name: 'TipTap Swift', year: '2026', category: 'apple', stack: 'Swift 6 · SwiftUI · WKWebView',
    description: 'Rich-text editing for iOS with portable HTML and zero runtime dependencies.',
    href: 'https://github.com/irangareddy/tiptap-swift', featured: true,
  },
  {
    name: 'Petdex Swift', year: '2026', category: 'apple', stack: 'Swift · SwiftPM · iOS',
    description: 'A typed Swift client and example app for the public Petdex API.',
    href: 'https://github.com/irangareddy/petdex-swift',
  },
  {
    name: 'GitHub Project Board Skill', year: '2026', category: 'agents', stack: 'Agent Skills · Shell · Python',
    description: 'A claim, lock, execute, and handoff workflow for autonomous coding agents.',
    href: 'https://github.com/irangareddy/gh-project-board',
  },
  {
    name: 'OpenClaw Essentials', year: '2026', category: 'agents', stack: 'Python · CLI · agent memory',
    description: 'Reusable skills for creating agents, mastering the CLI, and curating long-term memory.',
    href: 'https://github.com/irangareddy/openclaw-essentials',
  },
  {
    name: 'ElevenLabs Agents', year: '2026', category: 'ai', stack: 'Python · conversational AI',
    description: 'Experiments with real-time conversational voice agents and expressive interfaces.',
    href: 'https://github.com/irangareddy/agents-elevenlabs',
  },
  {
    name: 'VLM From Scratch', year: '2026', category: 'ai', stack: 'Vision-language models',
    description: 'A ground-up study of the components and training ideas behind multimodal models.',
    href: 'https://github.com/irangareddy/VLM-from-scratch',
  },
  {
    name: 'Mood Map', year: '2026', category: 'apple', stack: 'Swift · iOS · Appwrite',
    description: 'A mood journal that turns emotion, voice, and image entries into personal patterns.',
    href: 'https://github.com/irangareddy/Mood-Map',
  },
  {
    name: 'Sparky', year: '2025', category: 'apple', stack: 'Python · Vision Pro · robotics',
    description: 'Responsive Go2 robot control designed for spatial and gesture-based interfaces.',
    href: 'https://github.com/irangareddy/sparky', featured: true,
  },
  {
    name: 'Physical AI Data Pipeline', year: '2025', category: 'data', stack: 'Python · notebooks · multimodal data',
    description: 'Data preparation and experimentation for edge intelligence and physical AI.',
    href: 'https://github.com/irangareddy/phyai-data-pipeline',
  },
  {
    name: 'ML Project Template', year: '2025', category: 'data', stack: 'Python · Docker · MLOps',
    description: 'A practical starting point for reproducible machine-learning projects.',
    href: 'https://github.com/irangareddy/ml-project-template',
  },
  {
    name: 'Demand Forecasting', year: '2025', category: 'data', stack: 'Python · forecasting · big data',
    description: 'Retail demand modeling and data-system experiments across multiple implementations.',
    href: 'https://github.com/irangareddy/demand-forecasting-bigdata',
  },
  {
    name: 'WWDC Community Events', year: '2025', category: 'data', stack: 'Python · open data · community',
    description: 'A centralized, inclusive directory of community-led WWDC gatherings worldwide.',
    href: 'https://github.com/irangareddy/wwdc-community-events',
  },
  {
    name: 'DVWordKit', year: '2024', category: 'apple', stack: 'Swift · SwiftPM · generative AI',
    description: 'A reusable package for word games with category, difficulty, hints, and AI generation.',
    href: 'https://github.com/irangareddy/DVWordKit',
  },
  {
    name: 'Datasets Genie', year: '2023', category: 'data', stack: 'Python · package · synthetic data',
    description: 'A small package for generating realistic placeholder datasets in CSV, JSON, and XML.',
    href: 'https://github.com/irangareddy/datasets-genie',
  },
  {
    name: 'PyCon India App', year: '2023', category: 'apple', stack: 'Flutter · Dart · mobile',
    description: 'A production-structured conference companion app with tested build flavors.',
    href: 'https://github.com/irangareddy/PyCon_India_App',
  },
  {
    name: 'Carbon Footprint', year: '2021', category: 'apple', stack: 'Swift · SwiftUI · Core ML',
    description: 'An accepted WWDC21 Swift Student Challenge project for understanding personal impact.',
    href: 'https://github.com/irangareddy/Carbon-Footprint',
  },
  {
    name: 'Flutter Developer Checklist', year: '2020', category: 'agents', stack: 'Flutter · learning resource',
    description: 'An open checklist that maps the concepts and practice needed to grow as a Flutter developer.',
    href: 'https://github.com/irangareddy/FlutterDeveloper-CheckList',
  },
]

export const milestones = [
  { year: '2020', text: 'Started shipping mobile experiments in SwiftUI and Flutter.' },
  { year: '2021', text: 'Accepted into Apple’s WWDC Swift Student Challenge.' },
  { year: '2023', text: 'Moved from app prototypes into reusable packages and Python tooling.' },
  { year: '2025', text: 'Connected applied ML with spatial computing, robotics, and data systems.' },
  { year: '2026', text: 'Focused the work on agents, compact models, and private on-device products.' },
]

export const learningWall = {
  route: '/wall', aliases: ['/learning'], title: 'Learning wall',
  description: 'A living map of the ideas I am unpacking in public. Dark ink means there is something to read; pencil means it is still taking shape.',
  items: [
    { label: 'evals', href: 'https://blog.irangareddy.in/archive.html', emphasis: true },
    { label: 'tokenization & embeddings' }, { label: 'positional embeddings' }, { label: 'self-attention' },
    { label: 'multihead attention' }, { label: 'transformers + qkv' }, { label: 'sampling parameters' },
    { label: 'kv cache' }, { label: 'long context' }, { label: 'mixture of experts' },
    { label: 'grouped query attention' }, { label: 'normalization + activations' },
    { label: 'pretraining objectives' }, { label: 'fine-tuning' }, { label: 'instruction tuning' },
    { label: 'rlhf' }, { label: 'scaling laws' }, { label: 'quantization' }, { label: 'inference stacks' },
    { label: 'training stacks' }, { label: 'synthetic data' },
  ],
}
