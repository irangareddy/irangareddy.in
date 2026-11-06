"""Regenerate the static biography with OpenAI tiktoken; no tokenizer ships to the browser."""

import importlib.metadata
import json
from pathlib import Path
import subprocess

import tiktoken

root = Path(__file__).resolve().parent.parent
source = json.loads(subprocess.check_output([
    "node", "--input-type=module", "-e",
    "import { intro } from './src/content.js'; console.log(JSON.stringify(intro.map(p => p.map(part => part.text).join('')).join('\\n\\n')))",
], cwd=root, text=True))
encoding = tiktoken.get_encoding("o200k_base")
ids = encoding.encode(source)
tokens = []
offset = 0
for token_id in ids:
    # Fail rather than silently corrupt a token that splits a UTF-8 character.
    text = encoding.decode_single_token_bytes(token_id).decode("utf-8", errors="strict")
    end = offset + len(text.encode("utf-16-le")) // 2
    tokens.append({"id": token_id, "text": text, "start": offset, "end": end})
    offset = end
assert encoding.decode(ids) == source
assert "".join(token["text"] for token in tokens) == source
result = {
    "encoding": encoding.name,
    "generator": f"OpenAI tiktoken {importlib.metadata.version('tiktoken')}",
    "source": source,
    "tokens": tokens,
}
(root / "src/bio-tokens.json").write_text(json.dumps(result, ensure_ascii=False, indent=2) + "\n")
print(f"Generated {len(tokens)} verified {encoding.name} biography tokens.")
