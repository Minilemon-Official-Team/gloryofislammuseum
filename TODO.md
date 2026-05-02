# Task: Fix TTS split error for long Japanese text in runTranslation.js

## Plan
1. [x] Review and patch only `generateTTS` in `worker/scripts/runTranslation.js` (minimal safe fix)
2. [x] Add `cleanText` preprocessing before `googleTTS.getAllAudioUrls(...)`
3. [x] Update `splitPunct` to `',.!?;:،。！？；：、।|॥'`
4. [ ] Run `cd worker && node scripts/runTranslation.js`
5. [ ] Verify only previously failed zones regenerate and no unrelated behavior changes

