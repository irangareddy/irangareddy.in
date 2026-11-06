// Descriptions are grounded in the career master, owned project READMEs, and public repository metadata.
// Preserve team attribution, prototype status, the approved Beet naming, and client confidentiality.
export const workGroups = [
  {
    "id": "apps",
    "title": "apps & apple platforms",
    "items": [
      {
        "id": "wishper",
        "name": "wishper",
        "detail": "on-device dictation for mac. 26 seconds of audio in about a second on an m4 macbook air.",
        "href": "https://github.com/irangareddy/wishper-app",
        "openSource": true,
        "license": "MIT",
        "summary": "dictation that runs on your mac",
        "technologies": [
          "Swift",
          "MLX",
          "Qwen3"
        ]
      },
      {
        "id": "dew",
        "name": "dew",
        "detail": "daily eastern wisdom, on the app store since 2023. widgets, app intents, and five languages; maintained solo.",
        "href": "https://apps.apple.com/app/id6470129770",
        "openSource": false,
        "summary": "a little daily wisdom, since 2023",
        "technologies": [
          "SwiftUI",
          "WidgetKit",
          "App Intents"
        ]
      },
      {
        "id": "moodmap",
        "name": "moood map",
        "detail": "mood journaling with image and voice notes, insights, and personalization.",
        "href": "https://github.com/irangareddy/Mood-Map",
        "status": "app / hackathon project",
        "openSource": true,
        "license": "MIT",
        "summary": "a place to keep your moods · hackathon project"
      },
      {
        "id": "edgemind",
        "name": "edgemind",
        "detail": "fastvit core ml vision, foundation models reasoning, and voice, running on-device.",
        "status": "swift student challenge 2026 entry",
        "openSource": false,
        "summary": "on-device vision & reasoning · ssc 2026 entry",
        "technologies": [
          "Core ML",
          "Foundation Models",
          "FastViT"
        ]
      },
      {
        "id": "aegis",
        "name": "aegis",
        "detail": "routine timers, emotion check-ins, and caregiver dashboards, with core ml predictors trained on simulated wearable data.",
        "href": "https://youtu.be/0ZX5t-1Hxic",
        "status": "swift student challenge 2025 entry",
        "openSource": false,
        "summary": "an autism care companion · ssc 2025 entry",
        "technologies": [
          "SwiftUI",
          "Core ML",
          "Charts"
        ]
      },
      {
        "id": "carbon",
        "name": "carbon footprint",
        "detail": "my accepted wwdc21 swift student challenge submission.",
        "href": "https://github.com/irangareddy/Carbon-Footprint",
        "status": "2021",
        "openSource": false,
        "summary": "a winning swift student challenge entry · 2021",
        "technologies": [
          "Swift"
        ]
      },
      {
        "id": "scout",
        "name": "scout",
        "detail": "a camera-first field notebook exploring real-world missions, vision-based evidence, and foundation models.",
        "status": "prototype",
        "openSource": false,
        "summary": "a camera-first field notebook · prototype",
        "technologies": [
          "Foundation Models"
        ]
      },
      {
        "id": "omni",
        "name": "omni",
        "detail": "a macos voice workspace for live transcripts, generated notes, and questions about conversations. uses cloud audio processing.",
        "status": "experimental; not publicly released",
        "openSource": false,
        "summary": "a macos voice workspace · prototype"
      },
      {
        "id": "voxa",
        "name": "voxa",
        "detail": "an experiment with apple speechanalyzer, on-device transcription, and swift concurrency.",
        "status": "experiment",
        "openSource": false,
        "summary": "on-device speech experiments",
        "technologies": [
          "SpeechAnalyzer",
          "Swift Concurrency"
        ]
      }
    ]
  },
  {
    "id": "ai",
    "title": "models, agents & research",
    "items": [
      {
        "id": "voxe",
        "name": "vo-xe",
        "detail": "emotional speech. fine-tuned f5-tts on 18,940 clips and built the training pipeline with early stopping and w&b.",
        "href": "https://voxe.irangareddy.in",
        "status": "team project",
        "openSource": false,
        "summary": "emotional speech through fine-tuning · team project",
        "technologies": [
          "PyTorch",
          "F5-TTS",
          "W&B"
        ]
      },
      {
        "id": "boreas",
        "name": "boreas",
        "detail": "neural surrogates for data-center cooling, with hash-verified evaluation, paired bootstrap statistics, and experiments on nvidia gb10.",
        "status": "research",
        "openSource": false,
        "summary": "machine learning for data-center cooling",
        "technologies": [
          "PyTorch",
          "U-Net",
          "FNO"
        ]
      },
      {
        "id": "plateplanner",
        "name": "plateplanner",
        "detail": "pantry-aware recipe retrieval using faiss and re-ranking. co-authored the ieee sose 2026 paper.",
        "href": "https://doi.org/10.1109/SOSE71128.2026.00017",
        "status": "published research",
        "openSource": false,
        "summary": "pantry-aware recipe retrieval · ieee sose 2026",
        "technologies": [
          "Python",
          "FAISS"
        ]
      },
      {
        "id": "bargenet",
        "name": "bargenet",
        "detail": "an on-device classifier for voice-agent interruptions, backchannels, and noise. 0.95 macro f1 on validation.",
        "status": "research prototype",
        "openSource": false,
        "summary": "detecting interruptions in voice conversations · prototype"
      },
      {
        "id": "wagent",
        "name": "wagent",
        "detail": "a tool-call firewall for coding agents, built at the flower hackathon at stanford and published on flower hub.",
        "href": "https://github.com/irangareddy/wagent",
        "status": "hackathon project",
        "openSource": true,
        "license": "Apache-2.0",
        "summary": "a firewall for coding agents · hackathon project",
        "technologies": [
          "Flower"
        ]
      },
      {
        "id": "memosynth",
        "name": "memosynth-lite",
        "detail": "agent-memory experiments with qdrant, duckdb, neo4j, and apis for storing and retrieving memories.",
        "status": "prototype",
        "openSource": false,
        "summary": "memory for ai agents · prototype",
        "technologies": [
          "Qdrant",
          "DuckDB",
          "Neo4j"
        ]
      },
      {
        "id": "agmail",
        "name": "agmail",
        "detail": "a personal gmail-agent experiment.",
        "href": "https://github.com/irangareddy/agmail",
        "status": "experiment",
        "openSource": false,
        "summary": "a personal gmail agent · experiment"
      },
      {
        "id": "gemma",
        "name": "teaching gemma to code",
        "detail": "a handbook, coding agent, and local evaluation loop for a kaggle developer-agent competition.",
        "href": "https://github.com/irangareddy/teaching-gemma-to-code",
        "status": "work in progress",
        "openSource": true,
        "license": "MIT",
        "summary": "teaching a model to code · work in progress"
      },
      {
        "id": "frontier",
        "name": "frontier challenges",
        "detail": "hands-on exercises in compact models, evaluation, fine-tuning, and practical ai systems.",
        "href": "https://github.com/irangareddy/frontier-challenges",
        "status": "learning projects",
        "openSource": false,
        "summary": "compact models & evals · learning projects"
      }
    ]
  },
  {
    "id": "libraries",
    "title": "libraries & developer tools",
    "items": [
      {
        "id": "tiptapswift",
        "name": "tiptap-swift",
        "detail": "a swift package that brings tiptap rich-text editing and html rendering to ios through wkwebview.",
        "href": "https://github.com/irangareddy/tiptap-swift",
        "openSource": true,
        "license": "MIT",
        "summary": "rich-text editing for ios",
        "technologies": [
          "Swift",
          "Tiptap",
          "WKWebView"
        ]
      },
      {
        "id": "tiptapcompose",
        "name": "tiptap-compose",
        "detail": "a read-only jetpack compose renderer for tiptap html, with sanitization, theme controls, and line clamping.",
        "href": "https://github.com/irangareddy/tiptap-compose",
        "openSource": false,
        "summary": "rich-text rendering for android",
        "technologies": [
          "Jetpack Compose",
          "HTML"
        ]
      },
      {
        "id": "petdex",
        "name": "petdex-swift",
        "detail": "typed swift models, an api client, tests, and an ios example for the public petdex api. the original petdex is by railly hugo.",
        "href": "https://github.com/irangareddy/petdex-swift",
        "openSource": false,
        "summary": "a swift client for the petdex api",
        "technologies": [
          "Swift"
        ]
      },
      {
        "id": "dvword",
        "name": "dvwordkit",
        "detail": "a swift package for word-based games such as pictionary, with ai-powered word generation and hints.",
        "href": "https://github.com/irangareddy/DVWordKit",
        "openSource": false,
        "summary": "word generation for word games",
        "technologies": [
          "Swift"
        ]
      },
      {
        "id": "moodkit",
        "name": "mood-map-kit",
        "detail": "a package for generating mood insights for the mood map app.",
        "href": "https://github.com/irangareddy/mood-map-kit",
        "openSource": true,
        "license": "MIT",
        "summary": "mood insights, as a package"
      },
      {
        "id": "datasets",
        "name": "datasets-genie",
        "detail": "a package for generating placeholder datasets in csv, json, and xml.",
        "href": "https://github.com/irangareddy/datasets-genie",
        "openSource": true,
        "license": "Apache-2.0",
        "summary": "placeholder datasets in csv, json & xml"
      },
      {
        "id": "mobileevidence",
        "name": "mobile before & after",
        "detail": "an agent skill for reproducible ios and android before-and-after evidence.",
        "href": "https://github.com/irangareddy/mobile-before-and-after",
        "openSource": true,
        "license": "MIT",
        "summary": "repeatable before-and-after evidence for apps"
      },
      {
        "id": "ghboard",
        "name": "gh project board",
        "detail": "an agent skill for managing work with github projects v2.",
        "href": "https://github.com/irangareddy/gh-project-board",
        "openSource": true,
        "license": "MIT",
        "summary": "github projects, for agents",
        "technologies": [
          "GitHub Projects"
        ]
      },
      {
        "id": "openclaw",
        "name": "openclaw essentials",
        "detail": "agent-builder and cli skills for openclaw.",
        "href": "https://github.com/irangareddy/openclaw-essentials",
        "openSource": true,
        "license": "MIT",
        "summary": "agent-builder & cli skills",
        "technologies": [
          "OpenClaw"
        ]
      }
    ]
  },
  {
    "id": "systems",
    "title": "robotics & data systems",
    "items": [
      {
        "id": "go2",
        "name": "go2-sparky",
        "detail": "vision pro hand-tracking control for a unitree robot dog. a 20 hz loop, rate-limited command queue, and 40+ robot actions.",
        "href": "https://pypi.org/project/go2-sparky/",
        "openSource": false,
        "summary": "vision pro meets a robot dog",
        "technologies": [
          "Python",
          "visionOS"
        ]
      },
      {
        "id": "physicalai",
        "name": "physical-ai lab",
        "detail": "evaluated unitree g1, xarm 7, and rokoko motion capture, and joined an exploratory digital-twin engagement with cadence.",
        "status": "sjsu research work",
        "openSource": false,
        "summary": "physical ai & digital-twin exploration · sjsu"
      },
      {
        "id": "hpc",
        "name": "hpc lab tooling",
        "detail": "co-administered the sjsu gpu lab; wrote documentation and provisioning scripts, and prototyped a gpu-reservation agent.",
        "href": "https://github.com/irangareddy/HPC-Lab-Scripts",
        "status": "research infrastructure",
        "openSource": false,
        "summary": "scripts, docs & tools for a gpu lab"
      },
      {
        "id": "retail",
        "name": "retail analytics",
        "detail": "an airflow-to-snowflake elt pipeline over census, fred, and weather data, with dbt and superset.",
        "href": "https://github.com/irangareddy/retail-detail-sources",
        "status": "team coursework project",
        "openSource": false,
        "summary": "an airflow-to-snowflake pipeline · team project",
        "technologies": [
          "Airflow",
          "Snowflake",
          "dbt"
        ]
      },
      {
        "id": "forecasting",
        "name": "demand forecasting",
        "detail": "coursework and experiments in retail demand forecasting and big-data methods.",
        "href": "https://github.com/irangareddy/demand-forecasting-bigdata",
        "status": "coursework",
        "openSource": false,
        "summary": "retail demand forecasting · coursework"
      }
    ]
  },
  {
    "id": "professional",
    "title": "professional work",
    "items": [
      {
        "id": "startup",
        "name": "beet",
        "href": "https://www.gobeet.app/",
        "detail": "co-founder and founding engineer. own consumer apps, backend apis, payments, llm pipelines, and releases; 35 app store releases in 19 months.",
        "status": "2024—present",
        "openSource": false,
        "summary": "events, films & culture",
        "technologies": [
          "SwiftUI",
          "GraphQL",
          "Stripe"
        ]
      },
      {
        "id": "voiceagent",
        "name": "voice form-filling agent",
        "detail": "a multilingual client tool with a next.js frontend, fastapi backend, realtime speech, and automated evaluation gates. client identity withheld.",
        "status": "client project / nda",
        "openSource": false,
        "summary": "multilingual voice intake · client project",
        "technologies": [
          "Next.js",
          "FastAPI"
        ]
      },
      {
        "id": "growthpanda",
        "name": "online growthpanda",
        "detail": "senior software engineer. owned a social and chat app, real-time messaging, release automation, and team development standards.",
        "status": "2023—2024",
        "openSource": false,
        "summary": "real-time apps & release tooling · 2023–24",
        "technologies": [
          "SwiftUI",
          "UIKit",
          "Firebase"
        ]
      },
      {
        "id": "aarth",
        "name": "aarth software",
        "detail": "analytics architect, previously software engineer. python platform integrations, knowledge graphs, and semantic search for enterprise data.",
        "status": "2021—2023",
        "openSource": false,
        "summary": "knowledge graphs & python integrations · 2021–23",
        "technologies": [
          "Python"
        ]
      },
      {
        "id": "sastra",
        "name": "sastra innovations",
        "detail": "part-time mobile app developer.",
        "status": "2020—2021",
        "openSource": false,
        "summary": "mobile app development · 2020–21"
      }
    ]
  },
  {
    "id": "community",
    "title": "community & earlier work",
    "items": [
      {
        "id": "pycon",
        "name": "pycon india app",
        "detail": "work on a conference app for pycon india.",
        "href": "https://github.com/irangareddy/PyCon_India_App",
        "status": "community project",
        "openSource": true,
        "license": "MIT",
        "summary": "a conference app for pycon india"
      },
      {
        "id": "wwdc",
        "name": "wwdc community events",
        "detail": "a public index of community events, gatherings, and watch parties around wwdc.",
        "href": "https://github.com/irangareddy/wwdc-community-events",
        "openSource": true,
        "license": "MIT",
        "summary": "a home for community events around wwdc"
      },
      {
        "id": "swifthyd",
        "name": "swift hyderabad",
        "detail": "community organizer; also volunteered at pycon hyderabad and pycon india in 2023.",
        "status": "community work",
        "openSource": false,
        "summary": "bringing the swift community together"
      },
      {
        "id": "bookclub",
        "name": "book club",
        "detail": "an earlier app for tracking reading progress.",
        "href": "https://github.com/irangareddy/Book-Club",
        "status": "earlier app",
        "openSource": true,
        "license": "MIT",
        "summary": "keeping track of what you read · early work"
      },
      {
        "id": "movies",
        "name": "movie suggester",
        "detail": "an earlier app exploring movie suggestions based on user interests.",
        "href": "https://github.com/irangareddy/Movie-Suggester",
        "status": "earlier app",
        "openSource": false,
        "summary": "finding something to watch · early work"
      }
    ]
  }
]
