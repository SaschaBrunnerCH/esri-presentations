---
layout: none
title: 'Put several models to work together doing handoffs'
clicks: 5
---

<NativeAiSlide :original="37" :step="$clicks">

<div data-original-paragraph="11:0" data-text-shape="11" class="ai-paragraph ai-s37-11-p0">

# Put several models to work together doing handoffs

</div>

<div data-original-paragraph="12:0" data-text-shape="12" class="ai-paragraph ai-s37-12-p0">

1\. The prompt: what to type

</div>

<div data-original-paragraph="605:0" data-text-shape="605" class="ai-paragraph ai-s37-605-p0">

Claude Code   ~/arcgis-map-app

</div>

<div data-original-paragraph="607:0" data-text-shape="607" class="ai-paragraph ai-s37-607-p0">

<pre><span style="color: #FFFFFF">? for shortcuts</span>          ● codex plugin connected</pre>

</div>

<div data-original-paragraph="608:0" data-text-shape="608" class="ai-paragraph ai-s37-608-p0" v-show="$clicks >= 1">

<pre><span style="color: #00B9F2"><strong>&gt;</strong></span> Use the <span style="color: #FFFF00"><strong>Codex plugin</strong></span> (openai/codex-plugin-cc) to work
  with Codex <span style="color: #FFFF00"><strong>in turns</strong></span>. Create CLAUDE.md, AGENTS.md
  and <span style="color: #FFFF00"><strong>CHANGES.log</strong></span> to coordinate</pre>

</div>

<div data-original-paragraph="609:0" data-text-shape="609" class="ai-paragraph ai-s37-609-p0" v-show="$clicks >= 1">

1

</div>

<div class="ai-text-shape" data-text-shape="610" v-show="$clicks >= 1">

<div data-original-paragraph="610:0" class="ai-paragraph ai-s37-610-p0">

Tool and shared files

</div>

<div data-original-paragraph="610:1" class="ai-paragraph ai-s37-610-p1">

Claude can call Codex

</div>

</div>

<div data-original-paragraph="611:0" data-text-shape="611" class="ai-paragraph ai-s37-611-p0" v-show="$clicks >= 2">

<pre>  <span style="color: #FFFF00"><span style="opacity: 0.9"><strong>Goal:</strong></span></span><span style="opacity: 0.9"> build a store locator web map app with the ArcGIS Maps SDK</span>
<span style="opacity: 0.9">  for JavaScript, read SPEC.md</span></pre>

</div>

<div data-original-paragraph="612:0" data-text-shape="612" class="ai-paragraph ai-s37-612-p0" v-show="$clicks >= 2">

2

</div>

<div class="ai-text-shape" data-text-shape="613" v-show="$clicks >= 2">

<div data-original-paragraph="613:0" class="ai-paragraph ai-s37-613-p0">

Goal

</div>

<div data-original-paragraph="613:1" class="ai-paragraph ai-s37-613-p1">

What to build

</div>

</div>

<div data-original-paragraph="614:0" data-text-shape="614" class="ai-paragraph ai-s37-614-p0" v-show="$clicks >= 3">

<pre><span style="opacity: 0.6667">  Roles:</span>
  · <span style="color: #FFFF00"><strong>Codex = Developer</strong></span>: proposes, writes code
  · <span style="color: #FFFF00"><strong>Claude = Architect &amp; Reviewer</strong></span>: challenges, checks 5.x patterns use</pre>

</div>

<div data-original-paragraph="615:0" data-text-shape="615" class="ai-paragraph ai-s37-615-p0" v-show="$clicks >= 3">

3

</div>

<div class="ai-text-shape" data-text-shape="616" v-show="$clicks >= 3">

<div data-original-paragraph="616:0" class="ai-paragraph ai-s37-616-p0">

Roles

</div>

<div data-original-paragraph="616:1" class="ai-paragraph ai-s37-616-p1">

Who proposes, who reviews

</div>

</div>

<div data-original-paragraph="617:0" data-text-shape="617" class="ai-paragraph ai-s37-617-p0" v-show="$clicks >= 4">

<pre><span style="opacity: 0.6667">  Turns:</span>
  1. Codex proposes → Claude reviews → <span style="color: #FFFF00"><strong>repeat until agreed</strong></span>
  2. Log every turn in <span style="color: #FFFF00"><strong>CHANGES.log</strong></span>
  3. <span style="color: #FFFF00"><strong>One proposal at a time</strong></span></pre>

</div>

<div data-original-paragraph="618:0" data-text-shape="618" class="ai-paragraph ai-s37-618-p0" v-show="$clicks >= 4">

4

</div>

<div class="ai-text-shape" data-text-shape="619" v-show="$clicks >= 4">

<div data-original-paragraph="619:0" class="ai-paragraph ai-s37-619-p0">

Turns and hand-off

</div>

<div data-original-paragraph="619:1" class="ai-paragraph ai-s37-619-p1">

Every turn goes through <br>
CHANGES.log

</div>

</div>

<div data-original-paragraph="620:0" data-text-shape="620" class="ai-paragraph ai-s37-620-p0" v-show="$clicks === 5">

<pre><span style="color: #FFFFFF">  4. </span><strong>Never implement changes without my explicit approval</strong></pre>

</div>

<div data-original-paragraph="621:0" data-text-shape="621" class="ai-paragraph ai-s37-621-p0" v-show="$clicks === 5">

5

</div>

<div class="ai-text-shape" data-text-shape="622" v-show="$clicks === 5">

<div data-original-paragraph="622:0" class="ai-paragraph ai-s37-622-p0">

Human in the loop

</div>

<div data-original-paragraph="622:1" class="ai-paragraph ai-s37-622-p1">

Agents stop until you approve

</div>

</div>

</NativeAiSlide>

<!--
Original PowerPoint slide 37.
-->

---
layout: none
title: "Put several models to work together doing handoffs"
clicks: 8
---

<NativeAiSlide :original="38" :step="$clicks">

<div data-original-paragraph="11:0" data-text-shape="11" class="ai-paragraph ai-s38-11-p0">

# Put several models to work together doing handoffs

</div>

<div data-original-paragraph="12:0" data-text-shape="12" class="ai-paragraph ai-s38-12-p0">

2\. What happens next: turns, hand-offs and your approval

</div>

<div class="ai-text-shape" data-text-shape="800">

<div data-original-paragraph="800:0" class="ai-paragraph ai-s38-800-p0">

CLAUDE CODE

</div>

<div data-original-paragraph="800:1" class="ai-paragraph ai-s38-800-p1">

Architect &amp; Reviewer

</div>

<div data-original-paragraph="800:2" class="ai-paragraph ai-s38-800-p2">

Checks every proposal <br>
against 5.x patterns

</div>

</div>

<div data-original-paragraph="802:0" data-text-shape="802" class="ai-paragraph ai-s38-802-p0" v-show="$clicks === 2 || $clicks === 4">

writing…

</div>

<div class="ai-text-shape" data-text-shape="803">

<div data-original-paragraph="803:0" class="ai-paragraph ai-s38-803-p0">

CODEX

</div>

<div data-original-paragraph="803:1" class="ai-paragraph ai-s38-803-p1">

Developer

</div>

<div data-original-paragraph="803:2" class="ai-paragraph ai-s38-803-p2">

Proposes and writes <br>
the code

</div>

</div>

<div data-original-paragraph="805:0" data-text-shape="805" class="ai-paragraph ai-s38-805-p0" v-show="$clicks === 1 || $clicks === 3 || $clicks === 7">

writing…

</div>

<div data-original-paragraph="811:0" data-text-shape="811" class="ai-paragraph ai-s38-811-p0">

```text
CHANGES.log
```

</div>

<div data-original-paragraph="812:0" data-text-shape="812" class="ai-paragraph ai-s38-812-p0" v-show="$clicks >= 1">

<pre><span style="color: #00B9F2"><strong>## CODEX — PROPOSAL #1</strong></span>
<span style="opacity: 0.9">- Done: phase 1, map + Search widget</span></pre>

</div>

<div data-original-paragraph="813:0" data-text-shape="813" class="ai-paragraph ai-s38-813-p0" v-show="$clicks >= 2">

<pre><span style="color: #F89927"><strong>## CLAUDE — REVIEW #1</strong></span>
<span style="opacity: 0.9">- Verdict: </span><span style="color: #FF6B6B"><span style="opacity: 0.9"><strong>CHANGES_REQUESTED</strong></span></span>
<span style="opacity: 0.9">- Why: Search widget is 4.x; use arcgis-search</span></pre>

</div>

<div data-original-paragraph="814:0" data-text-shape="814" class="ai-paragraph ai-s38-814-p0" v-show="$clicks >= 3">

<pre><span style="color: #00B9F2"><strong>## CODEX — REVISION #1</strong></span>
<span style="opacity: 0.9">- Fix: widget → arcgis-search</span></pre>

</div>

<div data-original-paragraph="815:0" data-text-shape="815" class="ai-paragraph ai-s38-815-p0" v-show="$clicks >= 4">

<pre><strong>## CLAUDE — REVIEW #2</strong>
<span style="color: #FFFFFF"><span style="opacity: 0.9">- Verdict: </span></span><span style="color: #35AC46"><span style="opacity: 0.9"><strong>OK</strong></span></span><span style="color: #FFFFFF"><span style="opacity: 0.9">. Waiting for user</span></span></pre>

</div>

<div data-original-paragraph="816:0" data-text-shape="816" class="ai-paragraph ai-s38-816-p0" v-show="$clicks >= 6">

<pre><span style="color: #FFFF00"><strong>## YOU — APPROVED</strong></span>
<span style="opacity: 0.9">- Go ahead with phase 2</span></pre>

</div>

<div data-original-paragraph="817:0" data-text-shape="817" class="ai-paragraph ai-s38-817-p0" v-show="$clicks >= 7">

<pre><span style="color: #00B9F2"><strong>## CODEX — PROPOSAL #2</strong></span>
<span style="opacity: 0.9">- Working: phase 2, store list + directions…</span></pre>

</div>

<div data-original-paragraph="819:0" data-text-shape="819" class="ai-paragraph ai-s38-819-p0">

<span style="color: #FFFF00; font-size: 16px"><strong>YOU</strong></span>   human in the loop

</div>

<div data-original-paragraph="820:0" data-text-shape="820" class="ai-paragraph ai-s38-820-p0" v-show="$clicks === 5">

Waiting for you

</div>

<div data-original-paragraph="821:0" data-text-shape="821" class="ai-paragraph ai-s38-821-p0" v-show="$clicks >= 6">

Approved

</div>

</NativeAiSlide>

<!--
Original PowerPoint slide 38.
-->

---
layout: none
title: "Real example: it worked, and still got it slower"
clicks: 5
---

<NativeAiSlide :original="39" :step="$clicks">

<div data-original-paragraph="2:0" data-text-shape="2" class="ai-paragraph ai-s39-2-p0">

# Real example: it worked, and still got it slower

</div>

<div data-original-paragraph="3:0" data-text-shape="3" class="ai-paragraph ai-s39-3-p0">

René Rubalcava built an ArcGIS app with Claude and Codex, then read the diff

</div>

<div class="ai-text-shape" data-text-shape="4" v-show="$clicks >= 1">

<div data-original-paragraph="4:0" class="ai-paragraph ai-s39-4-p0">

01 · FIX

</div>

<div data-original-paragraph="4:1" class="ai-paragraph ai-s39-4-p1">

Codex fixes a <br>
bug

</div>

<div data-original-paragraph="4:2" class="ai-paragraph ai-s39-4-p2">

- Widens the layer's <br>
<strong>outFields</strong> so the <br>
sidebar can list <br>
addresses

</div>

</div>

<div class="ai-text-shape" data-text-shape="5" v-show="$clicks >= 2">

<div data-original-paragraph="5:0" class="ai-paragraph ai-s39-5-p0">

02 · SIDE EFFECT

</div>

<div data-original-paragraph="5:1" class="ai-paragraph ai-s39-5-p1">

Panning gets <br>
slow

</div>

<div data-original-paragraph="5:2" class="ai-paragraph ai-s39-5-p2">

- Every feature drawn <br>
on the map now <br>
carries <strong>extra fields</strong>

</div>

<div data-original-paragraph="5:3" class="ai-paragraph ai-s39-5-p3">

- The app still "works"

</div>

</div>

<div class="ai-text-shape" data-text-shape="6" v-show="$clicks >= 3">

<div data-original-paragraph="6:0" class="ai-paragraph ai-s39-6-p0">

03 · AI REVIEW

</div>

<div data-original-paragraph="6:1" class="ai-paragraph ai-s39-6-p1">

Claude reviews <br>
Codex

</div>

<div data-original-paragraph="6:2" class="ai-paragraph ai-s39-6-p2">

- Finds <strong>real issues</strong>: UI <br>
flicker, orphaned <br>
watch handles

</div>

<div data-original-paragraph="6:3" class="ai-paragraph ai-s39-6-p3">

- Some findings <br>
<strong>refuted</strong> against SDK <br>
typings

</div>

</div>

<div class="ai-text-shape" data-text-shape="7" v-show="$clicks >= 4">

<div data-original-paragraph="7:0" class="ai-paragraph ai-s39-7-p0">

04 · HUMAN

</div>

<div data-original-paragraph="7:1" class="ai-paragraph ai-s39-7-p1">

René reads the <br>
diff

</div>

<div data-original-paragraph="7:2" class="ai-paragraph ai-s39-7-p2">

- Queries the feature <br>
layer instead

</div>

<div data-original-paragraph="7:3" class="ai-paragraph ai-s39-7-p3">

- <strong>One-line fix</strong>, panning <br>
is instant again

</div>

</div>

<div data-original-paragraph="8:0" data-text-shape="8" class="ai-paragraph ai-s39-8-p0" v-show="$clicks === 5">

“These tools are good at writing code fast. They are not a substitute for reading it.”

</div>

<div data-original-paragraph="9:0" data-text-shape="9" class="ai-paragraph ai-s39-9-p0" v-show="$clicks === 5">

Source: René Rubalcava, “ArcGIS Online, Maps SDK for JavaScript &amp; AI”, odoe.net/blog/ago-to-comps

</div>

</NativeAiSlide>

<!--
Original PowerPoint slide 39.
-->

---
layout: none
title: "Raul Jimenez Ortega"
clicks: 0
---

<NativeAiSlide :original="40" :step="$clicks">

<div data-original-paragraph="4:0" data-text-shape="4" class="ai-paragraph ai-s40-4-p0">

Raul Jimenez Ortega

</div>

<div data-original-paragraph="49:0" data-text-shape="49" class="ai-paragraph ai-s40-49-p0">

# Risks and limitations

</div>

</NativeAiSlide>

<!--
Original PowerPoint slide 40.
-->

---
layout: none
title: "Powerful, but not limitless"
clicks: 8
---

<NativeAiSlide :original="41" :step="$clicks">

<div data-original-paragraph="42:0" data-text-shape="42" class="ai-paragraph ai-s41-42-p0">

# Powerful, but not limitless

</div>

<div data-original-paragraph="43:0" data-text-shape="43" class="ai-paragraph ai-s41-43-p0">

Before we move on: the risks and limits we all need to know

</div>

<div class="ai-text-shape" data-text-shape="44" v-show="$clicks >= 1">

<div data-original-paragraph="44:0" class="ai-paragraph ai-s41-44-p0">

Security &amp; privacy

</div>

<div data-original-paragraph="44:1" class="ai-paragraph ai-s41-44-p1">

Secrets · MCPs · prompts  <br>
injection · malicious pkgs

</div>

</div>

<div class="ai-text-shape" data-text-shape="45" v-show="$clicks >= 2">

<div data-original-paragraph="45:0" class="ai-paragraph ai-s41-45-p0">

Code quality

</div>

<div data-original-paragraph="45:1" class="ai-paragraph ai-s41-45-p1">

Hidden bugs · missing <br>
use cases ·over-engineer

</div>

</div>

<div class="ai-text-shape" data-text-shape="46" v-show="$clicks >= 3">

<div data-original-paragraph="46:0" class="ai-paragraph ai-s41-46-p0">

Trained on public, <br>
older code

</div>

<div data-original-paragraph="46:1" class="ai-paragraph ai-s41-46-p1">

Cutoff · deprecated APIs

</div>

</div>

<div class="ai-text-shape" data-text-shape="47" v-show="$clicks >= 4">

<div data-original-paragraph="47:0" class="ai-paragraph ai-s41-47-p0">

Still makes <br>
mistakes

</div>

<div data-original-paragraph="47:1" class="ai-paragraph ai-s41-47-p1">

Hallucinated APIs

</div>

</div>

<div class="ai-text-shape" data-text-shape="48" v-show="$clicks >= 5">

<div data-original-paragraph="48:0" class="ai-paragraph ai-s41-48-p0">

Not deterministic

</div>

<div data-original-paragraph="48:1" class="ai-paragraph ai-s41-48-p1">

Varies run to run

</div>

</div>

<div class="ai-text-shape" data-text-shape="49" v-show="$clicks >= 6">

<div data-original-paragraph="49:0" class="ai-paragraph ai-s41-49-p0">

Limited context <br>
window

</div>

<div data-original-paragraph="49:1" class="ai-paragraph ai-s41-49-p1">

Compaction · token limits

</div>

</div>

<div class="ai-text-shape" data-text-shape="50" v-show="$clicks >= 7">

<div data-original-paragraph="50:0" class="ai-paragraph ai-s41-50-p0">

Doesn't know our <br>
team rules

</div>

<div data-original-paragraph="50:1" class="ai-paragraph ai-s41-50-p1">

Conventions · history

</div>

</div>

<div class="ai-text-shape" data-text-shape="51" v-show="$clicks === 8">

<div data-original-paragraph="51:0" class="ai-paragraph ai-s41-51-p0">

ArcGIS pitfalls &amp; <br>
gaps

</div>

<div data-original-paragraph="51:1" class="ai-paragraph ai-s41-51-p1">

Arcade · ArcPy · Calcite

</div>

</div>

</NativeAiSlide>

<!--
Original PowerPoint slide 41.
-->

---
layout: none
title: "The elephant in the room: AI comes with a real cost to us"
clicks: 3
---

<NativeAiSlide :original="42" :step="$clicks">

<div data-original-paragraph="11:0" data-text-shape="11" class="ai-paragraph ai-s42-11-p0">

# The elephant in the room: AI comes with a real cost to us

</div>

<div data-original-paragraph="15:0" data-text-shape="15" class="ai-paragraph ai-s42-15-p0">

It feel productive <span style="font-size: 14px">(for some, addictive)</span>, but can quietly drain our skills, focus and joy.

</div>

<div data-original-paragraph="19:0" data-text-shape="19" class="ai-paragraph ai-s42-19-p0" v-show="$clicks >= 2">

Video: The struggle is real

</div>

<div class="ai-text-shape" data-text-shape="40" v-show="$clicks >= 1">

<div data-original-paragraph="40:0" class="ai-paragraph ai-s42-40-p0">

AI fatigue

</div>

<div data-original-paragraph="40:1" class="ai-paragraph ai-s42-40-p1">

Re-prompting, micro-decisions and <br>
context switching drain focus

</div>

<div data-original-paragraph="40:2" class="ai-paragraph ai-s42-40-p2">

<strong>Tip: </strong>Cap loops at ~3 rounds, then <br>
review in a separate pass

</div>

</div>

<div class="ai-text-shape" data-text-shape="41" v-show="$clicks >= 1">

<div data-original-paragraph="41:0" class="ai-paragraph ai-s42-41-p0">

Tech debt → cognitive debt

</div>

<div data-original-paragraph="41:1" class="ai-paragraph ai-s42-41-p1">

<span style="font-weight: 400">The code works, </span>but nobody <br>
knows why anymore

</div>

<div data-original-paragraph="41:2" class="ai-paragraph ai-s42-41-p2">

<strong>Tip: </strong>Carefully review; update design <br>
docs; code without AI regularly

</div>

</div>

<div class="ai-text-shape" data-text-shape="42" v-show="$clicks >= 1">

<div data-original-paragraph="42:0" class="ai-paragraph ai-s42-42-p0">

Juniors skip the foundations

</div>

<div data-original-paragraph="42:1" class="ai-paragraph ai-s42-42-p1">

Senior-speed output without the <br>
practice that builds seniors

</div>

<div data-original-paragraph="42:2" class="ai-paragraph ai-s42-42-p2">

<strong>Tip: </strong>Ask juniors to explain every line <br>
of their PR

</div>

</div>

<div class="ai-text-shape" data-text-shape="43" v-show="$clicks >= 1">

<div data-original-paragraph="43:0" class="ai-paragraph ai-s42-43-p0">

Loss of ownership and joy

</div>

<div data-original-paragraph="43:1" class="ai-paragraph ai-s42-43-p1">

From craftsperson to full-time <br>
reviewer of AI output

</div>

<div data-original-paragraph="43:2" class="ai-paragraph ai-s42-43-p2">

<strong>Tip: </strong>Keep people in design; tag AI <br>
commits

</div>

</div>

<div data-original-paragraph="50:0" data-text-shape="50" class="ai-paragraph ai-s42-50-p0" v-show="$clicks >= 1">

<span style="color: #00B9F2"><strong>FOR TEAMS  </strong></span>Measure comprehension and review quality, not lines of code

</div>

<div class="ai-text-shape" data-text-shape="51" v-show="$clicks >= 2">

<div data-original-paragraph="51:0" class="ai-paragraph ai-s42-51-p0">

“We used to call it an engineer, <br>
now it is like a reviewer.”

</div>

<div data-original-paragraph="51:1" class="ai-paragraph ai-s42-51-p1">

Siddhant Khare, software engineer, on <br>
burning out from AI-driven work¹

</div>

</div>

<div data-original-paragraph="52:0" data-text-shape="52" class="ai-paragraph ai-s42-52-p0" v-show="$clicks >= 2">

¹ Business Insider, Feb 2026. Cognitive debt: M.-A. Storey, “From Technical Debt to Cognitive and Intent Debt”, 2026

</div>

<a class="ai-hotspot" href="https://www.youtube.com/watch?v=FlWII9xFabo&amp;t=175s" aria-label="https://www.youtube.com/watch?v=FlWII9xFabo&amp;t=175s" style="top: 91.1111%; width: 12.3573%; height: 3.1111%; left: 80.1335%" target="_blank" rel="noopener noreferrer" @click.stop @keydown.stop />

<div class="ai-dim-overlay" data-shape="60" aria-hidden="true" v-show="($clicks >= 1 && $clicks <= 2)" style="left: 365px; top: 149px; width: 253px; height: 128px; background: rgba(11, 21, 56, 0.58)" />

<div class="ai-dim-overlay" data-shape="61" aria-hidden="true" v-show="($clicks >= 1 && $clicks <= 2)" style="left: 365px; top: 295px; width: 253px; height: 128px; background: rgba(11, 21, 56, 0.58)" />

<div class="ai-dim-overlay" data-shape="62" aria-hidden="true" v-show="($clicks >= 1 && $clicks <= 2)" style="left: 636px; top: 295px; width: 253px; height: 128px; background: rgba(11, 21, 56, 0.58)" />

<div class="ai-dim-overlay" data-shape="63" aria-hidden="true" v-show="($clicks >= 1 && $clicks <= 2)" style="left: 365px; top: 441px; width: 524px; height: 36px; background: rgba(11, 21, 56, 0.58)" />

</NativeAiSlide>

<!--
Original PowerPoint slide 42.
-->

---
layout: none
title: "AI Sentiment and Usage"
clicks: 0
disabled: true
---

<NativeAiSlide :original="43" :step="$clicks">

<div data-original-paragraph="2:0" data-text-shape="2" class="ai-paragraph ai-s43-2-p0">

# AI Sentiment and Usage

</div>

<div data-original-paragraph="5:0" data-text-shape="5" class="ai-paragraph ai-s43-5-p0">

What’s happening... From StackOverflow Survey 2025

</div>

<div data-original-paragraph="13:0" data-text-shape="13" class="ai-paragraph ai-s43-13-p0">

survey.stackoverflow.co/2025/ai\#sentiment-and-usage-ai-sent-ai-sent-prof-mid

</div>

<a class="ai-hotspot" href="https://survey.stackoverflow.co/2025/ai" aria-label="https://survey.stackoverflow.co/2025/ai" style="top: 23.5254%; width: 84.7102%; height: 68.9746%; left: 7.7898%" target="_blank" rel="noopener noreferrer" @click.stop @keydown.stop />

<a class="ai-hotspot" href="https://survey.stackoverflow.co/2025/ai" aria-label="https://survey.stackoverflow.co/2025/ai" style="top: 93.1667%; width: 65.2089%; height: 4%; left: 17.3708%" target="_blank" rel="noopener noreferrer" @click.stop @keydown.stop />

</NativeAiSlide>

<!--
Original PowerPoint slide 43.
-->

---
layout: none
title: "Time to take your phones 😉"
clicks: 0
---

<NativeAiSlide :original="44" :step="$clicks">

<div data-original-paragraph="4:0" data-text-shape="4" class="ai-paragraph ai-s44-4-p0">

Time to take your phones 😉

</div>

<div data-original-paragraph="49:0" data-text-shape="49" class="ai-paragraph ai-s44-49-p0">

# Tips to mitigate

</div>

</NativeAiSlide>

<!--
Original PowerPoint slide 44.
-->

---
layout: none
title: "Tips to mitigate: Security and privacy issues"
clicks: 4
---

<NativeAiSlide :original="45" :step="$clicks">

<div data-original-paragraph="6:0" data-text-shape="6" class="ai-paragraph ai-s45-6-p0">

# Tips to mitigate: Security and privacy issues

</div>

<div data-original-paragraph="9:0" data-text-shape="9" class="ai-paragraph ai-s45-9-p0">

Start with the basics, add layers as agents do more

</div>

<div class="ai-text-shape" data-text-shape="10" v-show="$clicks >= 1">

<div data-original-paragraph="10:0" class="ai-paragraph ai-s45-10-p0">

STEP 1

</div>

<div data-original-paragraph="10:1" class="ai-paragraph ai-s45-10-p1">

Basic hygiene

</div>

<div data-original-paragraph="10:2" class="ai-paragraph ai-s45-10-p2">

- Use <strong>synthetic</strong> or anonymized <br>
data only

</div>

<div data-original-paragraph="10:3" class="ai-paragraph ai-s45-10-p3">

- <strong>Least privilege</strong>: fine-grained <br>
tokens, no full GitHub CLI

</div>

<div data-original-paragraph="10:4" class="ai-paragraph ai-s45-10-p4">

- <strong>Deny list</strong> for sensitive paths

</div>

<div data-original-paragraph="10:5" class="ai-paragraph ai-s45-10-p5">

- <strong>Human in the loop</strong>: review <br>
security code, audit agent <br>
actions

</div>

</div>

<div class="ai-text-shape" data-text-shape="11" v-show="$clicks >= 2">

<div data-original-paragraph="11:0" class="ai-paragraph ai-s45-11-p0">

STEP 2

</div>

<div data-original-paragraph="11:1" class="ai-paragraph ai-s45-11-p1">

Supply chain

</div>

<div data-original-paragraph="11:2" class="ai-paragraph ai-s45-11-p2">

- Verify package names<span style="font-weight: 400"> before </span><br>
<span style="font-weight: 400">installing</span>

</div>

<div data-original-paragraph="11:3" class="ai-paragraph ai-s45-11-p3">

- Commit and use <strong>lockfiles</strong>

</div>

<div data-original-paragraph="11:4" class="ai-paragraph ai-s45-11-p4">

- <span style="font-weight: 400">Run </span>npm audit<span style="font-weight: 400"> / </span>pip audit

</div>

<div data-original-paragraph="11:5" class="ai-paragraph ai-s45-11-p5">

- <strong>Lock down pnpm</strong> config <br>
(pnpm-workspace.yaml)

</div>

<div data-original-paragraph="11:6" class="ai-paragraph ai-s45-11-p6">

- <span style="font-weight: 400">Use </span>mock servers<span style="font-weight: 400">, not real </span><br>
<span style="font-weight: 400">services</span>

</div>

</div>

<div class="ai-text-shape" data-text-shape="12" v-show="$clicks >= 3">

<div data-original-paragraph="12:0" class="ai-paragraph ai-s45-12-p0">

STEP 3

</div>

<div data-original-paragraph="12:1" class="ai-paragraph ai-s45-12-p1">

Isolation and control

</div>

<div data-original-paragraph="12:2" class="ai-paragraph ai-s45-12-p2">

- Run agents in an <strong>isolated </strong><br>
<strong>sandbox</strong>: dev container or <br>
ephemeral cloud VM

</div>

<div data-original-paragraph="12:3" class="ai-paragraph ai-s45-12-p3">

- <strong>Dependency firewall</strong>, registry <br>
proxy or local CLI defender

</div>

<div data-original-paragraph="12:4" class="ai-paragraph ai-s45-12-p4">

- Customize an <strong>open-source </strong><br>
<strong>harness</strong>

</div>

<div data-original-paragraph="12:5" class="ai-paragraph ai-s45-12-p5">

- <span style="font-weight: 400">Use </span>open-weight models

</div>

<div data-original-paragraph="12:6" class="ai-paragraph ai-s45-12-p6">

- Add <strong>evals</strong> for agent behavior

</div>

</div>

<div class="ai-dim-overlay" data-shape="60" aria-hidden="true" v-show="($clicks >= 2 && $clicks <= 3)" style="left: 353px; top: 300px; width: 254px; height: 204px; background: rgba(11, 21, 56, 0.58)" />

<div class="ai-dim-overlay" data-shape="61" aria-hidden="true" v-show="$clicks === 3" style="left: 633px; top: 222px; width: 254px; height: 282px; background: rgba(11, 21, 56, 0.58)" />

</NativeAiSlide>

<!--
Original PowerPoint slide 45.
-->

---
layout: none
title: "Tips to mitigate: technical limitations"
clicks: 5
---

<NativeAiSlide :original="46" :step="$clicks">

<div data-original-paragraph="2:0" data-text-shape="2" class="ai-paragraph ai-s46-2-p0">

# Tips to mitigate: technical limitations

</div>

<div data-original-paragraph="3:0" data-text-shape="3" class="ai-paragraph ai-s46-3-p0">

Know what limits the agent, then give it the context it's missing

</div>

<div class="ai-text-shape" data-text-shape="20" v-show="$clicks >= 1">

<div data-original-paragraph="20:0" class="ai-paragraph ai-s46-20-p0">

1 · THE AGENT

</div>

<div data-original-paragraph="20:1" class="ai-paragraph ai-s46-20-p1">

Limited memory (fills up <br>
with each prompt)

</div>

<div data-original-paragraph="20:2" class="ai-paragraph ai-s46-20-p2">

HOW TO MITIGATE

</div>

<div data-original-paragraph="20:3" class="ai-paragraph ai-s46-20-p3">

- Handover notes<span style="font-weight: 400"> and fresh </span><br>
<span style="font-weight: 400">sessions</span>

</div>

<div data-original-paragraph="20:4" class="ai-paragraph ai-s46-20-p4">

- Token savers<span style="font-weight: 400"> (Ponytail, </span><br>
<span style="font-weight: 400">Caveman)</span>

</div>

<div data-original-paragraph="20:5" class="ai-paragraph ai-s46-20-p5">

- Specs and tests<span style="font-weight: 400"> keep results </span><br>
<span style="font-weight: 400">repeatable</span>

</div>

</div>

<div class="ai-text-shape" data-text-shape="21" v-show="$clicks >= 2">

<div data-original-paragraph="21:0" class="ai-paragraph ai-s46-21-p0">

2 · YOUR PROJECT &amp; TEAM

</div>

<div data-original-paragraph="21:1" class="ai-paragraph ai-s46-21-p1">

Doesn't know your code <br>
or decisions

</div>

<div data-original-paragraph="21:2" class="ai-paragraph ai-s46-21-p2">

HOW TO MITIGATE

</div>

<div data-original-paragraph="21:3" class="ai-paragraph ai-s46-21-p3">

- <strong>AGENTS.md</strong> with gotchas, <br>
pitfalls, arquitectural doc …

</div>

<div data-original-paragraph="21:4" class="ai-paragraph ai-s46-21-p4">

- <strong>Hierarchical context</strong>: shared <br>
across projects, specific down <br>
to folder or file type

</div>

<div data-original-paragraph="21:5" class="ai-paragraph ai-s46-21-p5">

- Team knowledge base<span style="font-weight: 400"> via </span><br>
<span style="font-weight: 400">your own MCP server</span>

</div>

</div>

<div class="ai-text-shape" data-text-shape="22" v-show="$clicks >= 3">

<div data-original-paragraph="22:0" class="ai-paragraph ai-s46-22-p0">

3 · ARCGIS

</div>

<div data-original-paragraph="22:1" class="ai-paragraph ai-s46-22-p1">

Learned from mixed public <br>
samples

</div>

<div data-original-paragraph="22:2" class="ai-paragraph ai-s46-22-p2">

HOW TO MITIGATE

</div>

<div data-original-paragraph="22:3" class="ai-paragraph ai-s46-22-p3">

- <span style="font-weight: 400">State </span>product, version, <br>
license, user type and auth

</div>

<div data-original-paragraph="22:4" class="ai-paragraph ai-s46-22-p4">

- Known pitfalls<span style="font-weight: 400"> (+next slide)</span>

</div>

</div>

<div class="ai-text-shape" data-text-shape="30" v-show="$clicks >= 4">

<div data-original-paragraph="30:0" class="ai-paragraph ai-s46-30-p0">

COMING SOON · <span style="color: #FFFFFF; font-size: 15px">ArcGIS</span>

</div>

<div data-original-paragraph="30:1" class="ai-paragraph ai-s46-30-p1">

Agentic Developer Toolkit

</div>

<div data-original-paragraph="30:2" class="ai-paragraph ai-s46-30-p2">

Skills + MCP for coding agents

</div>

</div>

<div class="ai-dim-overlay" data-shape="70" aria-hidden="true" v-show="($clicks >= 1 && $clicks <= 4)" style="left: 73px; top: 366px; width: 254px; height: 133px; background: rgba(11, 21, 56, 0.58)" />

<div class="ai-dim-overlay" data-shape="71" aria-hidden="true" v-show="($clicks >= 2 && $clicks <= 4)" style="left: 353px; top: 364px; width: 254px; height: 135px; background: rgba(11, 21, 56, 0.58)" />

<div class="ai-dim-overlay" data-shape="72" aria-hidden="true" v-show="($clicks >= 3 && $clicks <= 4)" style="left: 633px; top: 366px; width: 254px; height: 28px; background: rgba(11, 21, 56, 0.58)" />

</NativeAiSlide>

<!--
Original PowerPoint slide 46.
-->

---
layout: none
title: "ArcGIS: where AI makes mistakes"
clicks: 3
---

<NativeAiSlide :original="47" :step="$clicks">

<div data-original-paragraph="32:0" data-text-shape="32" class="ai-paragraph ai-s47-32-p0">

# ArcGIS: where AI makes mistakes

</div>

<div data-original-paragraph="33:0" data-text-shape="33" class="ai-paragraph ai-s47-33-p0">

Recurring pitfalls from years of public samples, across versions and products

</div>

<div class="ai-text-shape" data-text-shape="34" v-show="$clicks >= 1">

<div data-original-paragraph="34:0" class="ai-paragraph ai-s47-34-p0">

ARCADE

</div>

<div data-original-paragraph="34:1" class="ai-paragraph ai-s47-34-p1">

Uses variables <br>
from the wrong <br>
profile

</div>

<div data-original-paragraph="34:2" class="ai-paragraph ai-s47-34-p2">

<strong>Fix: </strong>Name the <br>
profile: pop-up, <br>
label, field calc

</div>

</div>

<div class="ai-text-shape" data-text-shape="35" v-show="$clicks >= 1">

<div data-original-paragraph="35:0" class="ai-paragraph ai-s47-35-p0">

ARCPY

</div>

<div data-original-paragraph="35:1" class="ai-paragraph ai-s47-35-p1">

Deprecated <br>
calls, wrong <br>
version or <br>
license

</div>

<div data-original-paragraph="35:2" class="ai-paragraph ai-s47-35-p2">

<strong>Fix: </strong>State the Pro <br>
version and <br>
license level

</div>

</div>

<div class="ai-text-shape" data-text-shape="36" v-show="$clicks >= 1">

<div data-original-paragraph="36:0" class="ai-paragraph ai-s47-36-p0">

JS MAPS SDK

</div>

<div data-original-paragraph="36:1" class="ai-paragraph ai-s47-36-p1">

Mixes widgets <br>
with <br>
components

</div>

<div data-original-paragraph="36:2" class="ai-paragraph ai-s47-36-p2">

<strong>Fix: </strong>Pin the SDK <br>
version; link the <br>
component docs

</div>

</div>

<div class="ai-text-shape" data-text-shape="37" v-show="$clicks >= 1">

<div data-original-paragraph="37:0" class="ai-paragraph ai-s47-37-p0">

CALCITE

</div>

<div data-original-paragraph="37:1" class="ai-paragraph ai-s47-37-p1">

Overrides the <br>
design system <br>
with custom <br>
CSS

</div>

<div data-original-paragraph="37:2" class="ai-paragraph ai-s47-37-p2">

<strong>Fix: </strong>Slots and <br>
CSS variables, no <br>
shadow DOM <br>
hacks

</div>

</div>

<div class="ai-text-shape" data-text-shape="38" v-show="$clicks >= 1">

<div data-original-paragraph="38:0" class="ai-paragraph ai-s47-38-p0">

LAYER VIEWS

</div>

<div data-original-paragraph="38:1" class="ai-paragraph ai-s47-38-p1">

Assumes every <br>
field is already <br>
loaded

</div>

<div data-original-paragraph="38:2" class="ai-paragraph ai-s47-38-p2">

<strong>Fix: </strong>Query the <br>
layer for extra <br>
fields

</div>

</div>

<div data-original-paragraph="39:0" data-text-shape="39" class="ai-paragraph ai-s47-39-p0" v-show="$clicks >= 2">

Write &amp; keep updating context <span style="color: #00B9F2">(AGENTS.md) </span>and skills so it get better on each session

</div>

<div class="ai-dim-overlay" data-shape="80" aria-hidden="true" v-show="($clicks >= 1 && $clicks <= 2)" style="left: 239px; top: 159px; width: 148px; height: 222px; background: rgba(11, 21, 56, 0.58)" />

<div class="ai-dim-overlay" data-shape="81" aria-hidden="true" v-show="($clicks >= 1 && $clicks <= 2)" style="left: 406px; top: 159px; width: 148px; height: 222px; background: rgba(11, 21, 56, 0.58)" />

<div class="ai-dim-overlay" data-shape="82" aria-hidden="true" v-show="($clicks >= 1 && $clicks <= 2)" style="left: 574px; top: 159px; width: 148px; height: 222px; background: rgba(11, 21, 56, 0.58)" />

</NativeAiSlide>

<!--
Original PowerPoint slide 47.
-->

---
layout: none
title: "Raul Jimenez Ortega"
clicks: 0
---

<NativeAiSlide :original="48" :step="$clicks">

<div data-original-paragraph="4:0" data-text-shape="4" class="ai-paragraph ai-s48-4-p0">

Raul Jimenez Ortega

</div>

<div data-original-paragraph="49:0" data-text-shape="49" class="ai-paragraph ai-s48-49-p0">

# Wrap up

</div>

</NativeAiSlide>

<!--
Original PowerPoint slide 48.
-->

---
layout: none
title: "AI is here to stay"
clicks: 5
---

<NativeAiSlide :original="49" :step="$clicks">

<div data-original-paragraph="11:0" data-text-shape="11" class="ai-paragraph ai-s49-11-p0">

# AI is here to stay

</div>

<div data-original-paragraph="15:0" data-text-shape="15" class="ai-paragraph ai-s49-15-p0">

Habits that keep AI responsible, effective and secure

</div>

<div data-original-paragraph="102:0" data-text-shape="102" class="ai-paragraph ai-s49-102-p0" v-show="$clicks >= 2">

<span style="color: #00B9F2; font-size: 18px"><strong>TEAM</strong></span>  how you work together

</div>

<div class="ai-text-shape" data-text-shape="103" v-show="$clicks >= 2">

<div data-original-paragraph="103:0" class="ai-paragraph ai-s49-103-p0">

Share context as code

</div>

<div data-original-paragraph="103:1" class="ai-paragraph ai-s49-103-p1">

Common AGENTS.md, skills and <br>
hierarchical context

</div>

<div data-original-paragraph="103:2" class="ai-paragraph ai-s49-103-p2">

AI assists, humans approve

</div>

<div data-original-paragraph="103:3" class="ai-paragraph ai-s49-103-p3">

Let AI review AI; a person decides <br>
and merges

</div>

<div data-original-paragraph="103:4" class="ai-paragraph ai-s49-103-p4">

Grow juniors on purpose

</div>

<div data-original-paragraph="103:5" class="ai-paragraph ai-s49-103-p5">

They explain every line of their PR

</div>

<div data-original-paragraph="103:6" class="ai-paragraph ai-s49-103-p6">

Measure understanding

</div>

<div data-original-paragraph="103:7" class="ai-paragraph ai-s49-103-p7">

Comprehension and review quality, <br>
not lines of code

</div>

</div>

<div data-original-paragraph="104:0" data-text-shape="104" class="ai-paragraph ai-s49-104-p0" v-show="$clicks >= 1">

<span style="color: #00B9F2; font-size: 18px"><strong>ORGANIZATION</strong></span>  what you allow

</div>

<div class="ai-text-shape" data-text-shape="105" v-show="$clicks >= 1">

<div data-original-paragraph="105:0" class="ai-paragraph ai-s49-105-p0">

Set policy before rollout

</div>

<div data-original-paragraph="105:1" class="ai-paragraph ai-s49-105-p1">

Approved tools, use cases and data <br>
handling

</div>

<div data-original-paragraph="105:2" class="ai-paragraph ai-s49-105-p2">

Vet the vendor

</div>

<div data-original-paragraph="105:3" class="ai-paragraph ai-s49-105-p3">

Data retention, IP ownership, long-<br>
term alignment

</div>

<div data-original-paragraph="105:4" class="ai-paragraph ai-s49-105-p4">

Harden in layers

</div>

<div data-original-paragraph="105:5" class="ai-paragraph ai-s49-105-p5">

Least privilege, sandboxes, <br>
dependency firewall

</div>

<div data-original-paragraph="105:6" class="ai-paragraph ai-s49-105-p6">

Stay free to switch

</div>

<div data-original-paragraph="105:7" class="ai-paragraph ai-s49-105-p7">

Pick model and harness separately

</div>

</div>

<div data-original-paragraph="106:0" data-text-shape="106" class="ai-paragraph ai-s49-106-p0" v-show="$clicks >= 4">

<span style="color: #00B9F2; font-size: 14px"><strong>BOTTOM LINE  </strong></span>AI writes code fast. Understanding, owning and securing it is still on us.

</div>

<div data-original-paragraph="2:0" data-text-shape="2" class="ai-paragraph ai-s49-2-p0" v-show="$clicks >= 3">

<span style="color: #00B9F2; font-size: 18px"><strong>YOU</strong></span>  the developer

</div>

<div class="ai-text-shape" data-text-shape="3" v-show="$clicks >= 3">

<div data-original-paragraph="3:0" class="ai-paragraph ai-s49-3-p0">

Give it your context

</div>

<div data-original-paragraph="3:1" class="ai-paragraph ai-s49-3-p1">

Spec, AGENTS.md, product and <br>
version up front

</div>

<div data-original-paragraph="3:2" class="ai-paragraph ai-s49-3-p2">

Work in small steps

</div>

<div data-original-paragraph="3:3" class="ai-paragraph ai-s49-3-p3">

Phase the work, stay in the loop, cap <br>
retries at ~3

</div>

<div data-original-paragraph="3:4" class="ai-paragraph ai-s49-3-p4">

Read the diff, test every phase

</div>

<div data-original-paragraph="3:5" class="ai-paragraph ai-s49-3-p5">

Verify API claims; add a test per bug

</div>

<div data-original-paragraph="3:6" class="ai-paragraph ai-s49-3-p6">

Keep your own skills sharp

</div>

<div data-original-paragraph="3:7" class="ai-paragraph ai-s49-3-p7">

Write down intent; code without AI <br>
regularly

</div>

</div>

<div class="ai-dim-overlay" data-shape="90" aria-hidden="true" v-show="($clicks >= 1 && $clicks <= 4)" style="left: 73px; top: 254px; width: 254px; height: 187px; background: rgba(11, 21, 56, 0.58)" />

<div class="ai-dim-overlay" data-shape="91" aria-hidden="true" v-show="($clicks >= 2 && $clicks <= 4)" style="left: 353px; top: 185px; width: 254px; height: 73px; background: rgba(11, 21, 56, 0.58)" />

<div class="ai-dim-overlay" data-shape="92" aria-hidden="true" v-show="($clicks >= 2 && $clicks <= 4)" style="left: 353px; top: 322px; width: 254px; height: 119px; background: rgba(11, 21, 56, 0.58)" />

<div class="ai-dim-overlay" data-shape="93" aria-hidden="true" v-show="($clicks >= 3 && $clicks <= 4)" style="left: 633px; top: 185px; width: 254px; height: 141px; background: rgba(11, 21, 56, 0.58)" />

<div class="ai-dim-overlay" data-shape="94" aria-hidden="true" v-show="($clicks >= 3 && $clicks <= 4)" style="left: 633px; top: 372px; width: 254px; height: 69px; background: rgba(11, 21, 56, 0.58)" />

</NativeAiSlide>

<!--
Original PowerPoint slide 49.
-->

---
layout: none
title: "“🌍 AI is reshaping how we work - and it’s blurring the lines between professions.”"
clicks: 1
---

<NativeAiSlide :original="50" :step="$clicks">

<div data-original-paragraph="2:0" data-text-shape="2" class="ai-paragraph ai-s50-2-p0">

# <span style="font-style: normal">“</span>🌍 AI is reshaping how we work - and it’s <br>blurring the lines between professions.<span style="font-style: normal">”</span>

</div>

<div class="ai-text-shape" data-text-shape="3">

<div data-original-paragraph="3:0" class="ai-paragraph ai-s50-3-p0">

Vinay Viswambharan,

</div>

<div data-original-paragraph="3:1" class="ai-paragraph ai-s50-3-p1">

Principal Product Manager at Esri

</div>

</div>

<div data-original-paragraph="5:0" data-text-shape="5" class="ai-paragraph ai-s50-5-p0" v-show="$clicks === 1">

Whether we like it or not, use it or not… this is already happening

</div>

<a class="ai-hotspot" href="https://www.linkedin.com/posts/vinayviswambharan_over-the-more-recent-past-ive-partnered-activity-7365654583412469760-yrNe/" aria-label="https://www.linkedin.com/posts/vinayviswambharan_over-the-more-recent-past-ive-partnered-activity-7365654583412469760-yrNe/" style="top: 29.6659%; width: 18.4674%; height: 32.8309%; left: 73.8688%" target="_blank" rel="noopener noreferrer" @click.stop @keydown.stop />

</NativeAiSlide>

<!--
Original PowerPoint slide 50.
-->

---
layout: none
title: "Docs & Resources"
clicks: 0
---

<NativeAiSlide :original="51" :step="$clicks">

<div data-original-paragraph="2:0" data-text-shape="2" class="ai-paragraph ai-s51-2-p0">

# Docs &amp; Resources

</div>

<div class="ai-static-list ai-s51-3" data-text-shape="3">

- JavaScript SDK
- AI Assisted Development
- Intro to building agentic mapping applications
- Experience builder
- Building Custom Experience Builder Widgets with an Agent Skill
- Python API
- Introduction to AI-Powered services in ArcGIS Online
- MCPs
- MCP in ArcGIS Enterprise
- MCP for ArcGIS Location Services
- MCP in ArcGIS Online (coming soon)
- Geoportal 3.1.0 added a Model Context Protocol (MCP) API to its STAC configuration
- ArcGIS Agentic Developer Toolkit (coming soon)
- <span style="font-weight: 400">Agentic AI &gt;</span> Architecture center &gt; Agentic AI

</div>

<div data-original-paragraph="4:0" data-text-shape="4" class="ai-paragraph ai-s51-4-p0">

Habits that keep AI responsible, effective and secure at every level

</div>

<div data-original-paragraph="8:0" data-text-shape="8" class="ai-paragraph ai-s51-8-p0">

Esri DevTech Summit 2026 <br>
(March, Palm Springs)

</div>

<a class="ai-hotspot" href="https://developers.arcgis.com/javascript/latest/ai-assisted-development/" aria-label="https://developers.arcgis.com/javascript/latest/ai-assisted-development/" style="top: 27.4524%; width: 18.6073%; height: 4.6667%; left: 11.5729%" target="_blank" rel="noopener noreferrer" @click.stop @keydown.stop />

<a class="ai-hotspot" href="https://developers.arcgis.com/javascript/latest/agentic-apps/ai-introduction/" aria-label="https://developers.arcgis.com/javascript/latest/agentic-apps/ai-introduction/" style="top: 32.119%; width: 33.3208%; height: 4.6667%; left: 11.5729%" target="_blank" rel="noopener noreferrer" @click.stop @keydown.stop />

<a class="ai-hotspot" href="https://www.esri.com/arcgis-blog/products/experience-builder/geoai/building-custom-experience-builder-widgets-with-an-agent-skill" aria-label="https://www.esri.com/arcgis-blog/products/experience-builder/geoai/building-custom-experience-builder-widgets-with-an-agent-skill" style="top: 36.7857%; width: 47.0839%; height: 10.3333%; left: 11.5729%" target="_blank" rel="noopener noreferrer" @click.stop @keydown.stop />

<a class="ai-hotspot" href="https://developers.arcgis.com/python/latest/guide/introduction-to-ai-powered-services/" aria-label="https://developers.arcgis.com/python/latest/guide/introduction-to-ai-powered-services/" style="top: 52.7857%; width: 39.1932%; height: 4.6667%; left: 11.5729%" target="_blank" rel="noopener noreferrer" @click.stop @keydown.stop />

<a class="ai-hotspot" href="https://earlyadopter.esri.com/key/MCP" aria-label="https://earlyadopter.esri.com/key/MCP" style="top: 63.119%; width: 19.3625%; height: 4.6667%; left: 11.5729%" target="_blank" rel="noopener noreferrer" @click.stop @keydown.stop />

<a class="ai-hotspot" href="https://developers.arcgis.com/ai/mcp-arcgis-location-services/" aria-label="https://developers.arcgis.com/ai/mcp-arcgis-location-services/" style="top: 67.7857%; width: 25.5734%; height: 4.6667%; left: 11.5729%" target="_blank" rel="noopener noreferrer" @click.stop @keydown.stop />

<a class="ai-hotspot" href="https://github.com/Esri/geoportal-server-catalog" aria-label="https://github.com/Esri/geoportal-server-catalog" style="top: 67.7857%; width: 0.4693%; height: 4.6667%; left: 37.1458%" target="_blank" rel="noopener noreferrer" @click.stop @keydown.stop />

<a class="ai-hotspot" href="https://github.com/Esri/geoportal-server-catalog" aria-label="https://github.com/Esri/geoportal-server-catalog" style="top: 77.119%; width: 63.0995%; height: 4.6667%; left: 11.5729%" target="_blank" rel="noopener noreferrer" @click.stop @keydown.stop />

<a class="ai-hotspot" href="https://architecture.arcgis.com/en/industry-and-tech-patterns/ai-lens/agentic-ai.html" aria-label="https://architecture.arcgis.com/en/industry-and-tech-patterns/ai-lens/agentic-ai.html" style="top: 87.4524%; width: 28.5943%; height: 4.5556%; left: 19.8646%" target="_blank" rel="noopener noreferrer" @click.stop @keydown.stop />

<a class="ai-hotspot" href="https://www.youtube.com/watch?v=QlsXxDXEXTY" aria-label="https://www.youtube.com/watch?v=QlsXxDXEXTY" style="top: 30.1782%; width: 27.1267%; height: 27.1267%; left: 65.3733%" target="_blank" rel="noopener noreferrer" @click.stop @keydown.stop />

<a class="ai-hotspot" href="https://www.youtube.com/watch?v=QlsXxDXEXTY" aria-label="https://www.youtube.com/watch?v=QlsXxDXEXTY" style="top: 59.6806%; width: 18.3542%; height: 6.2222%; left: 70.1632%" target="_blank" rel="noopener noreferrer" @click.stop @keydown.stop />

</NativeAiSlide>

<!--
Original PowerPoint slide 51.
-->

---
layout: none
title: "Questions"
clicks: 0
---

<NativeAiSlide :original="52" :step="$clicks">

<div data-original-paragraph="49:0" data-text-shape="49" class="ai-paragraph ai-s52-49-p0">

# Questions

</div>

</NativeAiSlide>

<!--
Original PowerPoint slide 52.
-->

---
layout: none
title: "Please share your feedback in the app"
clicks: 0
---

<NativeAiSlide :original="53" :step="$clicks">

<div data-original-paragraph="2:0" data-text-shape="2" class="ai-paragraph ai-s53-2-p0">

# Please share your feedback in the app

</div>

<div data-original-paragraph="6:0" data-text-shape="6" class="ai-paragraph ai-s53-6-p0">

Select “My Event” in the <br>
event app main menu

</div>

<div data-original-paragraph="7:0" data-text-shape="7" class="ai-paragraph ai-s53-7-p0">

Select “My Surveys”

</div>

<div data-original-paragraph="8:0" data-text-shape="8" class="ai-paragraph ai-s53-8-p0">

Select the desired survey

</div>

<div data-original-paragraph="9:0" data-text-shape="9" class="ai-paragraph ai-s53-9-p0">

Complete the survey

</div>

</NativeAiSlide>

<!--
Original PowerPoint slide 53.
-->

---
layout: none
title: "Join the conversation using #EUDevTech2026"
clicks: 0
---

<NativeAiSlide :original="54" :step="$clicks">

<div data-original-paragraph="28:0" data-text-shape="28" class="ai-paragraph ai-s54-28-p0">

Join the conversation using \#EUDevTech2026

</div>

<div class="ai-text-shape" data-text-shape="23">

<div data-original-paragraph="23:0" class="ai-paragraph ai-s54-23-p0">

linkedin.com/showcase/esri-developers

</div>

<div data-original-paragraph="23:1" class="ai-paragraph ai-s54-23-p1">

linkedin.com/groups/1949564/

</div>

<div data-original-paragraph="23:2" class="ai-paragraph ai-s54-23-p2">

x.com/EsriDevs

</div>

<div data-original-paragraph="23:3" class="ai-paragraph ai-s54-23-p3">

x.com/EsriDevEvents

</div>

<div data-original-paragraph="23:4" class="ai-paragraph ai-s54-23-p4">

youtube.com/@EsriDevs

</div>

<div data-original-paragraph="23:5" class="ai-paragraph ai-s54-23-p5">

links.esri.com/DevVideos

</div>

<div data-original-paragraph="23:6" class="ai-paragraph ai-s54-23-p6">

github.com/Esri

</div>

<div data-original-paragraph="23:7" class="ai-paragraph ai-s54-23-p7">

github.com/EsriDevEvents

</div>

<div data-original-paragraph="23:8" class="ai-paragraph ai-s54-23-p8">

links.esri.com/EsriDevCommunity

</div>

</div>

<div data-original-paragraph="27:0" data-text-shape="27" class="ai-paragraph ai-s54-27-p0">

# Connect with us on social

</div>

<a class="ai-hotspot" href="https://linkedin.com/showcase/esri-developers" aria-label="https://linkedin.com/showcase/esri-developers" style="top: 30.9745%; width: 32.6047%; height: 5.8519%; left: 12.8003%" target="_blank" rel="noopener noreferrer" @click.stop @keydown.stop />

<a class="ai-hotspot" href="https://linkedin.com/groups/1949564/" aria-label="https://linkedin.com/groups/1949564/" style="top: 36.8263%; width: 25.0005%; height: 6.4074%; left: 12.8003%" target="_blank" rel="noopener noreferrer" @click.stop @keydown.stop />

<a class="ai-hotspot" href="https://x.com/EsriDevs" aria-label="https://x.com/EsriDevs" style="top: 36.8263%; width: 25.5214%; height: 12.8148%; left: 12.8003%" target="_blank" rel="noopener noreferrer" @click.stop @keydown.stop />

<a class="ai-hotspot" href="https://twitter.com/EsriDevs" aria-label="https://twitter.com/EsriDevs" style="top: 43.2337%; width: 0.5214%; height: 6.4074%; left: 25.8211%" target="_blank" rel="noopener noreferrer" @click.stop @keydown.stop />

<a class="ai-hotspot" href="https://x.com/esridevevents" aria-label="https://x.com/esridevevents" style="top: 49.6411%; width: 17.813%; height: 6.4074%; left: 12.8003%" target="_blank" rel="noopener noreferrer" @click.stop @keydown.stop />

<a class="ai-hotspot" href="https://twitter.com/esridevevents" aria-label="https://twitter.com/esridevevents" style="top: 49.6411%; width: 0.5214%; height: 6.4074%; left: 30.6128%" target="_blank" rel="noopener noreferrer" @click.stop @keydown.stop />

<a class="ai-hotspot" href="https://www.youtube.com/@EsriDevs" aria-label="https://www.youtube.com/@EsriDevs" style="top: 56.0485%; width: 21.1719%; height: 6.4074%; left: 12.8003%" target="_blank" rel="noopener noreferrer" @click.stop @keydown.stop />

<a class="ai-hotspot" href="https://mediaspace.esri.com/category/Esri+Developer+%26+Technology+Summit/244321192" aria-label="https://mediaspace.esri.com/category/Esri+Developer+%26+Technology+Summit/244321192" style="top: 62.4559%; width: 20.938%; height: 6.4074%; left: 12.8003%" target="_blank" rel="noopener noreferrer" @click.stop @keydown.stop />

<a class="ai-hotspot" href="https://mediaspace.esri.com/category/ArcGIS+Developers/244548402?rsource=https%3A%2F%2Flinks.esri.com%2FDevVideos" aria-label="https://mediaspace.esri.com/category/ArcGIS+Developers/244548402?rsource=https%3A%2F%2Flinks.esri.com%2FDevVideos" style="top: 62.4559%; width: 0.5214%; height: 6.4074%; left: 33.7378%" target="_blank" rel="noopener noreferrer" @click.stop @keydown.stop />

<a class="ai-hotspot" href="https://github.com/Esri" aria-label="https://github.com/Esri" style="top: 68.8633%; width: 13.4375%; height: 6.4074%; left: 12.8003%" target="_blank" rel="noopener noreferrer" @click.stop @keydown.stop />

<a class="ai-hotspot" href="https://github.com/EsriDevEvents" aria-label="https://github.com/EsriDevEvents" style="top: 75.2707%; width: 22.5%; height: 6.4074%; left: 12.8003%" target="_blank" rel="noopener noreferrer" @click.stop @keydown.stop />

<a class="ai-hotspot" href="https://community.esri.com/en/categories/developers" aria-label="https://community.esri.com/en/categories/developers" style="top: 81.6782%; width: 27.9172%; height: 4.5556%; left: 12.8003%" target="_blank" rel="noopener noreferrer" @click.stop @keydown.stop />

</NativeAiSlide>

<!--
Original PowerPoint slide 54.
-->

---
layout: none
title: "Copyright © 2026 Esri. All rights reserved.Portions of this work may include Adobe Stock images used under license. Copyright © 2026 Adobe Inc. All rights reserved."
clicks: 0
---

<NativeAiSlide :original="55" :step="$clicks">

<div data-original-paragraph="6:0" data-text-shape="6" class="ai-paragraph ai-s55-6-p0">

Copyright © 2026 Esri. All rights reserved.<br>
Portions of this work may include Adobe Stock images used <br>
under license. Copyright © 2026 Adobe Inc. All rights reserved.

</div>

</NativeAiSlide>

<!--
Original PowerPoint slide 55.
-->

---
layout: none
title: "[Add topic]"
clicks: 0
disabled: true
---

<NativeAiSlide :original="56" :step="$clicks">

<div data-original-paragraph="4:0" data-text-shape="4" class="ai-paragraph ai-s56-4-p0">

# \[Add topic\]

</div>

<div data-original-paragraph="7:0" data-text-shape="7" class="ai-paragraph ai-s56-7-p0">

asdasd

</div>

<div class="ai-static-list ai-s56-9" data-text-shape="9">

- \[Add subtopic\]
- \[Add subtopic\]
- \[Add subtopic\]

</div>

</NativeAiSlide>

<!--
Original PowerPoint slide 56.
-->

---
layout: none
title: "[Add topic]"
clicks: 0
disabled: true
---

<NativeAiSlide :original="57" :step="$clicks">

<div data-original-paragraph="4:0" data-text-shape="4" class="ai-paragraph ai-s57-4-p0">

# \[Add topic\]

</div>

</NativeAiSlide>

<!--
Original PowerPoint slide 57.
-->

---
layout: none
title: "[Add big word]"
clicks: 0
disabled: true
---

<NativeAiSlide :original="58" :step="$clicks">

<div data-original-paragraph="4:0" data-text-shape="4" class="ai-paragraph ai-s58-4-p0">

# \[Add big word\]

</div>

<div data-original-paragraph="2:0" data-text-shape="2" class="ai-paragraph ai-s58-2-p0">

# \[Add smaller word\]

</div>

</NativeAiSlide>

<!--
Original PowerPoint slide 58.
-->

---
layout: none
title: "[Add “Quote”]"
clicks: 0
disabled: true
---

<NativeAiSlide :original="59" :step="$clicks">

<div data-original-paragraph="4:0" data-text-shape="4" class="ai-paragraph ai-s59-4-p0">

# \[Add “Quote”\]

</div>

<div data-original-paragraph="2:0" data-text-shape="2" class="ai-paragraph ai-s59-2-p0">

# \[Name\]

</div>

</NativeAiSlide>

<!--
Original PowerPoint slide 59.
-->

---
layout: none
title: "[Add section title]"
clicks: 0
disabled: true
---

<NativeAiSlide :original="60" :step="$clicks">

<div data-original-paragraph="49:0" data-text-shape="49" class="ai-paragraph ai-s60-49-p0">

# \[Add section title\]

</div>

</NativeAiSlide>

<!--
Original PowerPoint slide 60.
-->

---
layout: none
title: "Demo: [Add demo title]"
clicks: 0
disabled: true
---

<NativeAiSlide :original="61" :step="$clicks">

<div data-original-paragraph="2:0" data-text-shape="2" class="ai-paragraph ai-s61-2-p0">

# Demo: \[Add <br>demo title\]

</div>

</NativeAiSlide>

<!--
Original PowerPoint slide 61.
-->

---
layout: none
title: "Acknowledgments"
clicks: 0
disabled: true
---

<NativeAiSlide :original="62" :step="$clicks">

<div data-original-paragraph="2:0" data-text-shape="2" class="ai-paragraph ai-s62-2-p0">

# Acknowledgments

</div>

<div class="ai-static-list ai-s62-7" data-text-shape="7">

- \[Add acknowledgment\]
- \[Add acknowledgment\]
- \[Add acknowledgment\]

</div>

<div data-original-paragraph="5:0" data-text-shape="5" class="ai-paragraph ai-s62-5-p0">

Source: \[add source information\]

</div>

</NativeAiSlide>

<!--
Original PowerPoint slide 62.
-->
