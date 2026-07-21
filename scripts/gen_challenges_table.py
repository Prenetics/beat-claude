#!/usr/bin/env python3
"""Regenerate the 'Open Challenges' table in README.md from the ACTIVE
challenges/ folder (top-level challenges/*.md only).

Anything moved to challenges/archive/ automatically drops off the list — that's
the whole point: archiving a challenge = moving its file into challenges/archive/,
and the README table re-derives itself from what's left.

Each brief carries a hidden marker the table is built from:
    <!-- listing: title="Role Name — IM8"; difficulty="Hard" -->
If a brief has no marker, it falls back to the first '## ' heading for the title
and '—' for difficulty (and prints a warning).

Run locally:  python scripts/gen_challenges_table.py
Also runs in CI (.github/workflows/sync-challenges-readme.yml) on any challenges/ change.
"""
import glob
import os
import re
import sys

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
README = os.path.join(ROOT, "README.md")
START, END = "<!-- CHALLENGES:START -->", "<!-- CHALLENGES:END -->"


def brief_meta(path):
    txt = open(path, encoding="utf-8").read()
    m = re.search(r'<!--\s*listing:\s*title="([^"]+)";\s*difficulty="([^"]+)"\s*-->', txt)
    if m:
        return m.group(1).strip(), m.group(2).strip()
    h = re.search(r'^##\s+(.+)$', txt, re.M)
    title = h.group(1).strip() if h else os.path.basename(path)
    print(f"  WARNING: no listing marker in {os.path.basename(path)} — using '{title}' / '—'")
    return title, "—"


def main():
    files = sorted(glob.glob(os.path.join(ROOT, "challenges", "*.md")))
    rows = []
    for f in files:
        title, diff = brief_meta(f)
        rel = "./challenges/" + os.path.basename(f)
        rows.append((title, diff, rel))
    rows.sort(key=lambda r: r[0].lower())

    table = "| Challenge | Difficulty |\n|---|---|\n" + "\n".join(
        f"| [{t}]({rel}) | {d} |" for t, d, rel in rows
    )
    block = f"{START}\n{table}\n{END}"

    body = open(README, encoding="utf-8").read()
    if START not in body or END not in body:
        sys.exit(f"README.md is missing the {START} / {END} markers — add them around the table first.")
    body = re.sub(re.escape(START) + r".*?" + re.escape(END), block, body, flags=re.S)
    open(README, "w", encoding="utf-8").write(body)
    print(f"Regenerated Open Challenges table: {len(rows)} active challenge(s).")


if __name__ == "__main__":
    main()
