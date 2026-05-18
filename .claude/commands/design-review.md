---
description: Triage prototype changes — backport to design system, push to Figma, or keep local
---

# /design-review — Triage prototype changes against the design system

You are reviewing a vibe-coding session in the Lia Design System v3 repo. The goal is to look at everything that changed and decide how each change should be propagated.

Read [CLAUDE.md](../../CLAUDE.md) first — the propagation matrix and the "ask before creating components" rule define the rules of the game.

## What to do

1. **Survey the changes** since the last clean state. Default to comparing against `origin/main`. If the user gives you a different base ref, use that.

   ```bash
   git fetch origin
   git diff origin/main...HEAD --stat
   git status --short
   ```

2. **Classify every changed file** into one of these buckets. Be precise — names matter for the next step.

   | Bucket | Path patterns | Meaning |
   | --- | --- | --- |
   | **token** | `src/app/globals.css`, `design/lia-tokens.tokens.json` | Theme value changes |
   | **primitive-edit** | `src/components/ui/<existing>.tsx` | Existing primitive modified (variant added, layout tweaked, behaviour changed) |
   | **primitive-new** | `src/components/ui/<new>.tsx` | New file in `components/ui/` — a brand-new primitive |
   | **story** | `src/components/ui/*.stories.tsx` | Story updates (usually paired with primitive changes) |
   | **prototype** | `src/examples/**` | Prototype surface work |
   | **config** | `components.json`, `figma.config.json`, `.storybook/**`, `vercel.json`, `package.json`, `scripts/**` | System config |
   | **docs** | `*.md`, `CLAUDE.md`, `README.md` | Documentation |
   | **other** | anything else | Flag for individual review |

3. **For each bucket, present a triage proposal:**

   - **token** → "Sync via `pnpm tokens:sync`? Token changes auto-flow to Figma via Tokens Studio after push."
   - **primitive-edit** → Show the diff inline. Ask: "Backport to the design system (commit + push), or revert (was experimental)? If backport, what's the matching Figma update needed?"
   - **primitive-new** → Show the new component. Ask the gate questions from CLAUDE.md: "Is this generally useful or one-off? If generally useful, do we have a matching Figma component? Should I scaffold a Code Connect mapping in `src/figma/` and add the node URL to `figma.config.json`?"
   - **story** → Usually safe; verify it covers Default + the primary variants. Auto-approve unless something looks off.
   - **prototype** → Usually safe — prototype changes stay here. Surface anything that smells like "this should be a primitive" for the user to confirm.
   - **config** → Ask before propagating any system-level config change.
   - **docs** → Usually safe; flag for the user only if it touches CLAUDE.md (governance change).

4. **For Figma-side work** that the triage surfaces, default to *describing* what needs to happen rather than executing — Figma MCP component writes are unreliable per the April 24 learnings. For variable writes that DO work via MCP, offer to do them.

5. **Summarise the session at the end** with a one-paragraph human-readable description of what changed and where it landed:

   - Backported to the design system: …
   - Kept in prototypes: …
   - Needs Figma follow-up: …
   - Tokens synced + auto-flowing: …

   Offer to write this summary into `_meta/inbox/session-YYYY-MM-DD-design-review.md` in the user's personal vault (per their global CLAUDE.md convention).

## Anti-patterns to refuse

- **Promoting one-offs to the system.** If a prototype-only style is being suggested for backport, push back: "this looks specific to the prototype's context — what's the general case it serves?"
- **Adding primitives without asking.** Never auto-create components or new files in `src/components/ui/`. Always confirm with the user first per CLAUDE.md.
- **Pushing component-level changes to Figma via MCP.** Variables work; layouts and variants don't. Surface those as "designer needs to update Figma manually" — don't pretend the MCP will do it.

## When you're done

End with a concise next-actions list:

- [ ] What I committed in this session (with commit SHAs)
- [ ] What the user needs to do in Figma
- [ ] What is intentionally staying as a prototype-only divergence

Keep the report under 300 words unless the diff is unusually large.
