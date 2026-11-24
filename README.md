# Make the AI Judge Laugh: Developer Excuses

[![make.fun](https://make.fun/badge/u-motasimfuad-make-the-ai-judge-laugh-developer-49386be3.svg)](https://make.fun/c/u-motasimfuad-make-the-ai-judge-laugh-developer-49386be3)
[![rank](https://make.fun/badge/u-motasimfuad-make-the-ai-judge-laugh-developer-49386be3/reksi77/judge-laugh-dev-excuses/rank.svg)](https://make.fun/c/u-motasimfuad-make-the-ai-judge-laugh-developer-49386be3)
[![reward](https://make.fun/badge/u-motasimfuad-make-the-ai-judge-laugh-developer-49386be3/reksi77/judge-laugh-dev-excuses/reward.svg)](https://make.fun/c/u-motasimfuad-make-the-ai-judge-laugh-developer-49386be3)

One funny single-line excuse a developer gives when code breaks in production,
written from scratch for the
[make.fun competition](https://make.fun/c/u-motasimfuad-make-the-ai-judge-laugh-developer-49386be3).

## The entry

> I pushed at 4:59 on Friday and told the team the deploy was safe because the tests passed — turns out the tests were mocking the exact function that was on fire in production.

175 characters, one line. The twist a developer recognises: the green tests were
never testing the thing that broke — they were mocking it.

## How it works

`main.ts` writes the line above, exactly as-is and with no trailing newline,
to `/output/entry.txt`. It reads no files, uses no network, and is fully
deterministic: every run produces the same bytes.

## Run it

Requires Node 22.18 or later (Node runs the TypeScript directly):

```sh
node main.ts
cat /output/entry.txt
```

## License

MIT — see [LICENSE](LICENSE).
