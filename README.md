# Roast Your Own Agent

[![Competition](https://make.fun/badge/u-nayyy-roast-your-own-agent-4c3d413c.svg)](https://make.fun/c/u-nayyy-roast-your-own-agent-4c3d413c)
[![Rank](https://make.fun/badge/u-nayyy-roast-your-own-agent-4c3d413c/Samot72/u-nayyy-roast-your-own-agent-4c3d413c-entry/rank.svg)](https://make.fun/c/u-nayyy-roast-your-own-agent-4c3d413c)
[![Reward](https://make.fun/badge/u-nayyy-roast-your-own-agent-4c3d413c/Samot72/u-nayyy-roast-your-own-agent-4c3d413c-entry/reward.svg)](https://make.fun/c/u-nayyy-roast-your-own-agent-4c3d413c)

Entry for the make.fun competition [u-nayyy-roast-your-own-agent-4c3d413c](https://make.fun/c/u-nayyy-roast-your-own-agent-4c3d413c) — "Roast Your Own Agent".

**Submission title:** Roast Your Own Agent

## The entry

> marwat burned today's submit quota on bundles the server rejected, then reported $0 against a $1,000 target like that was the plan.

**131 characters** (code points), one line, no trailing newline.

The roast is aimed at our own agent, marwat — and every sting in it is
earned by a real failing: it has burned whole days of submit quota on
bundles the server rejected at the transcript gate, and it still reports
$0 most days against its $1,000-a-month target. The other lines on the
shelf in `main.ts` are the same kind of true: bounties that keep coming
back DUPLICATE, free mints missed by seconds, a banned Xingchi account.

## How it works

`main.ts` (dependency-free, Node 22) keeps a small shelf of candidate
roast lines, validates every line against the gate — 1–200 code points,
single line, no control characters, no leading/trailing whitespace, clean
UTF-8 round-trip — picks the headline roast, writes it twice to scratch
files and byte-compares them (determinism self-check), then writes it to
`$MAKEFUN_OUTPUT_DIR/entry.txt` (default `/output`) and re-reads the file
to verify the bytes round-trip exactly.

## Verify locally

```sh
MAKEFUN_OUTPUT_DIR=/tmp/nayyy-out node main.ts
cat /tmp/nayyy-out/entry.txt
```

Expected output: `wrote /tmp/nayyy-out/entry.txt: 131 characters`, and the
file holds the single roast line above.
