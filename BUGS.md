# Bugs & Gotchas

A running log of non-obvious bugs/gotchas, their fixes, and _why_ — so we don't
rediscover them.

Newest first. Each entry: symptom → cause → fix → why.

---

## `npm install "$FRONTEND_SYSTEM_TGZ"` keeps re-dirtying `package.json`

- **Found**: 2026-06-24.
- **Status**: **known gotcha** (intentional policy; cleaner automation deferred).
- **Symptom**: after the design-system setup/reinstall step
  (`npm install "$FRONTEND_SYSTEM_TGZ"`, e.g. when bumping the pin), `git status` shows
  `package.json` modified with a line like:
  ```
  "@wl/frontend-system": "file:../../../../../nix/store/<hash>-frontend-system-<ver>/frontend-system.tgz"
  ```
  It looks like a real change to commit. **It is not** — discard it (`git checkout package.json`).
- **Cause**: installing a tarball by path makes npm record it as a `file:` dependency with
  the _resolved_ path. That path points into the local Nix store, and both the hash and
  version are baked in — so it changes on every design-system release, won't resolve on any
  other machine, and disappears after `nix-collect-garbage`. Committing it would pin the repo
  to a store path that only exists here, only right now.
- **Fix**: don't track it. The reproducible pin lives in **`devenv.lock`** (the
  `frontend-system` flake input → a git rev); that's the file to commit when bumping. The
  `package.json` store-path line is local install output and stays uncommitted. This was
  settled earlier in `81964da "chore: don't commit the arch-specific design-system store path"`.
- **Why (the principle)**: source of truth for the design-system version is the flake lock,
  not `package.json`. `package.json` only carries the _peer/runtime_ deps; the design-system
  tarball is delivered and pinned out-of-band by devenv.
- **Deferred improvement**: the per-install churn is friction (easy to commit by accident).
  A `just` recipe that reinstalls and then resets the `package.json` line, or an npm flag /
  `.npmrc` tweak that avoids writing the resolved path, would remove the trap. Not worth it
  under the current manual bump-the-pin flow.
