---
titleTemplate: '%s'
title: 'AI Across the Development Cycle — Sascha Brunner'
author: Sascha Brunner
mdc: true
colorSchema: light
layout: intro
duration: 20min
timer: countdown
# HTML image paths are bundled by Vite; Slidev's raw-path preloader cannot resolve them.
preloadImages: false
---

# AI across the development cycle

<div class="intro-author">Sascha Brunner</div>

<!--
- Timing: 0:30.
- AI can help across the development cycle.
- Show real work and possible workflows.
- Decide who leads at each step.
-->

---

<div class="native-kicker">CYCLE / OVERVIEW</div>

# AI support at each development stage

<div class="native-subtitle">At each stage, choose who leads and who helps.</div>
<figure class="external-cycle-figure">
  <img src="./assets/diagrams/software-development-cycle.svg" alt="Circular software development cycle: plan, analyze, design, build, test, deploy and maintain" />
  <figcaption>Illustrative SDLC cycle · stages overlap and repeat</figcaption>
</figure>

<!--
- Timing: 0:50.
- The cycle repeats as we learn from tests and feedback.
- Lead with AI advice, or guide an agent drafting a solution.
- Keep the key decisions with the person.
- Source cue: SYNTHESIS — ArcGIS GeoBIM / ArcGIS Pro: agreed intent and human engineering judgment guide AI work.
-->

---

<div class="native-kicker">PLAN / FROM OBSERVATION</div>

# Planning: from observation to PRD

<div class="native-subtitle">PRD = Product Requirements Document</div>
<div class="native-grid prd-grid">
  <div class="prd-stages" aria-label="Planning steps: observe, agree, define the test">
    <div v-click="1" class="prd-stage"><svg viewBox="0 0 64 64" aria-hidden="true"><path d="M5 32c7-11 16-17 27-17s20 6 27 17c-7 11-16 17-27 17S12 43 5 32z" fill="none" stroke="currentColor" stroke-width="3"/><circle cx="32" cy="32" r="10" fill="none" stroke="currentColor" stroke-width="3"/><circle cx="32" cy="32" r="4" fill="currentColor"/></svg><strong>Observe</strong></div>
    <div v-click="2" class="prd-stage"><svg viewBox="0 0 64 64" aria-hidden="true"><path d="M9 12h35a7 7 0 0 1 7 7v22a7 7 0 0 1-7 7H26L13 57v-9H9a7 7 0 0 1-7-7V19a7 7 0 0 1 7-7z" fill="none" stroke="currentColor" stroke-width="3"/><path d="m19 31 8 8 17-18" fill="none" stroke="currentColor" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/></svg><strong>Agree</strong></div>
    <div v-click="3" class="prd-stage"><svg viewBox="0 0 64 64" aria-hidden="true"><rect x="12" y="9" width="40" height="48" rx="4" fill="none" stroke="currentColor" stroke-width="3"/><path d="M23 20h19M23 32h19M23 44h12" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round"/><path d="m16 42 3 3 5-6" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/></svg><strong>Test</strong></div>
    <img v-click="1" class="prd-map" src="./assets/diagrams/prd-map.svg" alt="Illustrative map with a selected feature and an incomplete details panel" />
  </div>
  <div v-click="4" class="native-document">
    <div class="native-document-header">SHORT PRD / ILLUSTRATIVE</div>
    <div><span>User task</span><strong>Select a feature</strong></div>
    <div><span>Success</span><strong>Details appear</strong></div>
    <div><span>Check</span><strong>Test + screenshot</strong></div>
    <div><span>Open</span><strong>Who can access it?</strong></div>
  </div>
</div>

<div class="cycle-step stage-plan" aria-label="Current development stage: 01 PLAN">01 PLAN</div>

<!--
- Timing: 1:10.
- Start with a user task and a problem you have seen.
- Agree on the expected result, access rules and errors.
- Use a short PRD; AI can draft it or help find gaps.
- Product and engineering owners agree on the goal.
- Source cue: SYNTHESIS — ArcGIS GeoBIM: agree user needs and testable requirements before building; the PRD is illustrative.
-->

---

<div class="native-kicker">PLAN / PRD TO SDD</div>

# Spec-driven development

<div class="native-subtitle">Agree on testable requirements before AI writes code.</div>
<div class="lesson-pair spec-pair">
  <div v-click="1" class="lesson-panel">
    <span class="lesson-label">APPROVED SCENARIOS</span>
    <strong>Agree → approve → build</strong>
    <div class="native-code-wrap"><div class="native-code-label">ILLUSTRATIVE SCENARIO</div><pre class="native-code"><span>Given</span> an accessible Web Scene
<span>When</span> I select a feature
<span>Then</span> its details appear</pre></div>
    <small>Small phases: build → test → review → repeat.</small>
  </div>
  <div v-click="2" class="lesson-panel lesson-caution">
    <span class="lesson-label">ARCHITECTURE OPTIONS</span>
    <strong>Faster prototypes. More options.</strong>
    <p>Compare approaches and agree together.</p>
  </div>
</div>
<div class="cycle-step stage-plan" aria-label="Current development stage: 01 PLAN">01 PLAN</div>

<!--
- Timing: 1:20.
- Requirement: the user goal. Specification: behavior we can build and test.
- Developer and product engineer approve scenarios; reuse them in tests and review.
- Build one small phase, test it against the scenario, review the result, then continue.
- Ask AI to propose edge cases and test data: empty selection, inaccessible layers and missing attributes. Review the proposals before using them.
- Quick prototypes let us compare more architecture options.
- Agreement takes time; choose the approach together and write it down.
- Source cue: SYNTHESIS — ArcGIS GeoBIM: approved scenarios for QA and review; Native SDK deck: small phases and test design; architecture agreement is presenter experience.
-->

---

<div class="native-kicker">ANALYZE / CODEBASE</div>

# Codebase exploration

<div class="native-subtitle">Give context: SDK version, Online/Enterprise, schema and constraints.</div>
<div class="native-grid prd-grid">
  <div v-click="1" class="prd-stages" aria-label="Investigate user tasks, code and project rules">
    <div class="prd-stage"><svg viewBox="0 0 64 64" aria-hidden="true"><rect x="5" y="10" width="54" height="44" rx="4" fill="none" stroke="currentColor" stroke-width="3"/><path d="M5 21h54M22 40l7 7 14-17" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/></svg><strong>User tasks</strong></div>
    <div class="prd-stage"><svg viewBox="0 0 64 64" aria-hidden="true"><path d="m23 17-15 15 15 15m18-30 15 15-15 15m-5-36-8 42" fill="none" stroke="currentColor" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round"/></svg><strong>Code</strong></div>
    <div class="prd-stage"><svg viewBox="0 0 64 64" aria-hidden="true"><path d="M8 12c11-4 20-2 24 2 4-4 13-6 24-2v39c-11-4-20-2-24 2-4-4-13-6-24-2zM32 14v39M15 23h10M39 23h10M15 32h10M39 32h10" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/></svg><strong>Project rules</strong></div>
  </div>
  <div v-click="3" class="native-document codebase-overview">
    <div class="native-document-header">SHARED REPOSITORY / EXAMPLE</div>
    <div><span>AGENTS.md</span><strong>Project instructions</strong></div>
    <div><span>docs/decisions/</span><strong>Why we chose this approach</strong></div>
    <div><span>examples/</span><strong>Working reference patterns</strong></div>
    <div><span>skills/</span><strong>Task-specific guidance</strong></div>
  </div>
</div>
<div class="code-inspector-strip" role="img" aria-label="Robot, magnifying glass and code results revealed in three steps">
  <img v-click="1" src="./assets/diagrams/code-inspector-robot.svg" alt="Robot" />
  <img v-click="2" src="./assets/diagrams/code-inspector-lens.svg" alt="Magnifying glass" />
  <img v-click="3" src="./assets/diagrams/code-inspector-results.svg" alt="Code results" />
</div>

<div class="cycle-step stage-analyze" aria-label="Current development stage: 02 ANALYZE">02 ANALYZE</div>

<!--
- Timing: 1:05.
- Ask about user tasks, code and project rules.
- Brief the agent with SDK and platform versions, layer schema, deployment constraints and a reference example. Ask it to identify missing context.
- Save team knowledge in shared instructions, decisions, examples and skills.
- Keep core guidance short. Search docs for details and share verified lessons.
- Ask for an explanation, code links and open questions.
- Check it in the running app and against current SDK guidance.
- Source cue: SYNTHESIS — ArcGIS Pro / Web GIS SDK: code discovery and project guidance; Hudson Miears and Paul Sturm / Runtime feedback: persistent shared context; Native SDK deck: concrete technical context. Repository layout is illustrative.
-->

---

<div class="native-kicker">ANALYZE / ISSUE</div>

# From bug report to actionable issue

<div class="native-subtitle">Record the facts before asking an agent to fix it.</div>
<div class="native-grid prd-grid">
  <div v-click="1" class="prd-stages" aria-label="Reproduce the problem, describe observed and expected behavior, and define success">
    <div class="prd-stage"><svg viewBox="0 0 64 64" aria-hidden="true"><path d="M12 31a20 20 0 1 1 6 16M12 31V17m0 14h14" fill="none" stroke="currentColor" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round"/><circle cx="33" cy="31" r="5" fill="currentColor"/></svg><strong>Reproduce</strong></div>
    <div class="prd-stage"><svg viewBox="0 0 64 64" aria-hidden="true"><rect x="5" y="11" width="54" height="42" rx="3" fill="none" stroke="currentColor" stroke-width="3"/><path d="M32 11v42M15 28h9m-9 8h9m16-8h9m-9 8h9" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round"/></svg><strong>Describe</strong></div>
    <div class="prd-stage"><svg viewBox="0 0 64 64" aria-hidden="true"><rect x="10" y="9" width="44" height="46" rx="4" fill="none" stroke="currentColor" stroke-width="3"/><path d="m20 34 9 9 17-20" fill="none" stroke="currentColor" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/></svg><strong>Define success</strong></div>
  </div>
  <div v-click="3" class="native-document issue-example">
    <div class="native-document-header">EXAMPLE ISSUE</div>
    <div><span>Problem</span><strong>Details stay after clearing selection</strong></div>
    <div><span>Expected</span><strong>Details disappear</strong></div>
    <div><span>Evidence</span><strong>Steps + screenshot</strong></div>
    <div><span>Test</span><strong>Select a feature, then clear it</strong></div>
  </div>
</div>
<div class="issue-agent-strip" role="img" aria-label="Observed app failure, agent and draft issue revealed in three steps">
  <img v-click="1" src="./assets/diagrams/issue-agent-observation.svg" alt="Observed app failure" />
  <img v-click="2" src="./assets/diagrams/issue-agent-robot.svg" alt="Agent reads the report" />
  <img v-click="3" src="./assets/diagrams/issue-agent-issue.svg" alt="Draft issue" />
</div>

<div class="cycle-step stage-analyze" aria-label="Current development stage: 02 ANALYZE">02 ANALYZE</div>

<!--
- Timing: 0:45.
- Find the steps that show the problem.
- Describe what happens and what should happen; include the environment and screenshot.
- Define the check; an agent can draft the issue from these facts.
- Source cue: ILLUSTRATION — ArcGIS GeoBIM practice: reproduce defects and agree expected behavior; this issue is fictional.
-->

---

<div class="native-kicker">DESIGN / UI OPTIONS</div>

# UI prototyping: compare alternatives

<div class="native-subtitle">Illustrative alternatives based on a team's prototyping practice.</div>
<div class="ui-options">
  <div v-click class="ui-option"><div class="ui-option-label">A · MINIMAL</div><div class="ui-frame"><div class="ui-bar"></div><div class="ui-map"><i></i></div></div><p>Fast path to the main task</p></div>
  <div v-click class="ui-option"><div class="ui-option-label">B · GUIDED</div><div class="ui-frame"><div class="ui-bar"></div><div class="ui-map"><i></i></div><div class="ui-hint">Select a feature</div></div><p>More cues for a first visit</p></div>
  <div v-click class="ui-option"><div class="ui-option-label">C · POWER USER</div><div class="ui-frame"><div class="ui-bar"></div><div class="ui-map"><i></i></div><div class="ui-controls"><b></b><b></b><b></b></div></div><p>More control, more complexity</p></div>
</div>
<div v-click="-1" class="native-close">Ask AI: “What assumptions could make each option fail?”<br />Choose by observed behavior.</div>

<div class="cycle-step stage-design" aria-label="Current development stage: 03 DESIGN">03 DESIGN</div>

<!--
- Timing: 0:55.
- Web GIS SDK engineers report making more UI prototypes with AI.
- The three flows are examples; compare the same user task.
- Ask AI to challenge each option's assumptions. Check its critique against the user task and observed behavior.
- Choose useful behavior and add it to the plan.
- Source cue: SYNTHESIS — Web GIS SDK: compare quick UI prototypes; Native SDK deck: ask AI to challenge a proposal.
-->

---

<div class="native-kicker">DESIGN / MODERNIZATION</div>

# Migration: update or rebuild?

<div class="native-subtitle">Web GIS SDK engineers reported an AI-assisted Vitest migration.</div>
<div class="modernization-choice">
  <div v-click="1" class="modernization-start">
    <span>ILLUSTRATIVE DECISION</span><strong>App on outdated technology</strong><small>Revisit deferred migration work.</small>
  </div>
  <div class="modernization-fork" aria-hidden="true"><span v-click="2">↗</span><span v-click="3">↘</span></div>
  <div class="modernization-options">
    <div v-click="2"><span>PATH A</span><strong>Migrate in place</strong><small>Update the existing code.</small></div>
    <div v-click="3"><span>PATH B</span><strong>Rebuild from scratch</strong><small>Create a new codebase.</small></div>
  </div>
</div>
<div v-click="3" class="native-close">When rebuilding, use the old codebase to find edge cases. Improve the new app.</div>

<div class="cycle-step stage-design" aria-label="Current development stage: 03 DESIGN">03 DESIGN</div>

<!--
- Timing: 1:05.
- Web GIS SDK: AI helped make the Vitest migration feasible.
- Revisit deferred modernization; the diagram shows my separate app migration example.
- Update the old code step by step, or build a new app.
- Use the old code to find unusual cases, errors and access rules.
- Decide what to keep, fix or improve.
- Write down the agreed behavior and test the new app against it.
- Source cue: ESRI FEEDBACK — Hugo Campos / Web GIS SDK: AI-assisted Vitest migration. MY EXAMPLE — Separate app migration/rebuild decision; no Vitest implementation or measured outcome is shown.
-->

---
clicks: 1
---

<div class="native-kicker">BUILD / SCENE AUTHORING</div>

# Scene authoring with a browser agent

<div class="native-subtitle">An agent uses Scene Viewer to create a 3D scene from an existing Web Map.</div>
<div class="scene-demo-grid">
  <ol class="native-steps">
    <li><span>01</span><div><strong>Author</strong><small>Choose data, styling, pop-ups and the opening view.</small></div></li>
    <li><span>02</span><div><strong>Save</strong><small>Check the Web Scene item and its access.</small></div></li>
    <li><span>03</span><div><strong>Verify</strong><small>Check pop-ups, layers, sharing and attribution.</small></div></li>
  </ol>
  <figure class="scene-demo">
    <div class="scene-demo-player">
      <img v-if="$clicks < 1" class="scene-demo-poster" src="/media/glowing-3d-hiking-scene-poster.jpg" alt="Still frame from the agent's Scene Viewer recording" />
      <video v-if="$clicks >= 1" autoplay controls muted playsinline poster="/media/glowing-3d-hiking-scene-poster.jpg" aria-label="Accelerated recording of an agent authoring a hiking Web Scene in Scene Viewer">
        <source src="/media/glowing-3d-hiking-scene.mp4" type="video/mp4" />
      </video>
    </div>
  </figure>
</div>

<div class="cycle-step stage-build" aria-label="Current development stage: 04 BUILD">04 BUILD</div>

<!--
- Timing: 1:05.
- The recording shows browser control, not an AI feature inside Scene Viewer.
- Recreate a Web Map in Scene Viewer with help from an agent.
- Check layers, pop-ups, sharing and attribution before reuse.
- Build and test the app around the scene.
- Source cue: MY EXAMPLE — Scene Viewer: recorded browser-agent scene authoring; separate from the email.
-->

---

<div class="native-kicker">BUILD / CROSS-SDK</div>

# Cross-SDK sample adaptation

<div class="native-subtitle">A working source behavior helps explore an equivalent in another language.</div>
<div class="sample-comparison">
  <figure><img src="./assets/native-sdk/swift-samples.png" alt="Public GitHub repository for ArcGIS Maps SDK for Swift samples" /><figcaption>Swift samples · source behavior</figcaption></figure>
  <span v-click>→</span>
  <figure v-click="-1"><img src="./assets/native-sdk/kotlin-samples.png" alt="Public GitHub repository for ArcGIS Maps SDK for Kotlin samples" /><figcaption>Kotlin samples · target pattern</figcaption></figure>
</div>
<div class="native-close">Adapt the pattern, then build, run and review the target result.</div>

<div class="cycle-step stage-build" aria-label="Current development stage: 04 BUILD">04 BUILD</div>

<!--
- Timing: 0:30.
- Use a Swift SDK sample to draft a similar Kotlin sample.
- The repositories are starting points; no completed conversion is shown.
- Check the APIs, then build, run and review the target sample.
- Source cue: ILLUSTRATION — ArcGIS Maps SDK for Swift / Kotlin: cross-SDK sample adaptation; no completed conversion reported.
-->

---

<div class="native-kicker">BUILD / CODE QUALITY</div>

# Code quality: lint and type errors

<div class="native-subtitle">Business Analyst used agents for lint and TypeScript cleanup.</div>
<div class="native-process cleanup-process" aria-label="Divide code cleanup into tasks, let agents make changes, then run checks and review">
  <div v-click="1"><span>01 / SMALL TASKS</span><strong>Isolate each task</strong><small>One worktree + clear scope</small></div>
  <b v-click="2" aria-hidden="true">→</b>
  <div v-click="2"><span>02 / AI HELP</span><strong>Draft the fixes</strong><small>Separate parts of the code</small></div>
  <b v-click="3" aria-hidden="true">→</b>
  <div v-click="3"><span>03 / CHECK</span><strong>Run checks and review</strong><small>Types, lint and app behavior</small></div>
</div>
<div class="lesson-source">Suggested workflow</div>
<div v-click="3" class="native-close">Fewer errors do not prove the app works.</div>
<div class="cycle-step stage-build" aria-label="Current development stage: 04 BUILD">04 BUILD</div>

<!--
- Timing: 0:45.
- Business Analyst used several agents for lint and TypeScript cleanup.
- The small-task workflow is a suggestion; run checks and review changes.
- My starter uses one Git worktree per task so agents do not edit the same checkout.
- Fewer errors do not prove correct app behavior; check that too.
- Source cue: ESRI FEEDBACK — Business Analyst: agents addressed ESLint and TypeScript errors; the task split is illustrative.
-->

---

<div class="native-kicker">TEST / PERFORMANCE</div>

# Rendering performance experiments

<div class="native-subtitle">Meet the visual target within CPU, GPU and memory budgets.</div>
<div class="performance-experiment" aria-label="Illustrative comparison of three AI-assisted rendering variants">
  <div class="performance-flow"><span>AI drafts variants</span><b>→</b><span>Run the same scene</span><b>→</b><span>Compare visual + resources</span></div>
  <div class="performance-columns"><span>APPROACH</span><span>VISUAL TARGET</span><span>CPU</span><span>GPU</span><span>MEMORY</span><span>DECISION</span></div>
  <div v-click class="performance-variant"><strong>A · Full detail</strong><span class="metric-pass">MEETS</span><span class="metric-pass">OK</span><span class="metric-miss">OVER</span><span class="metric-miss">OVER</span><span>Revise</span></div>
  <div v-click class="performance-variant"><strong>B · Fewer details</strong><span class="metric-miss">MISSES</span><span class="metric-pass">OK</span><span class="metric-pass">OK</span><span class="metric-pass">OK</span><span>Revise</span></div>
  <div v-click class="performance-variant performance-shortlist"><strong>C · Adaptive detail</strong><span class="metric-pass">MEETS</span><span class="metric-pass">OK</span><span class="metric-pass">OK</span><span class="metric-pass">OK</span><span>SHORTLIST</span></div>
  <div class="performance-caption">Illustrative runs · fixed scene, camera, data and device · shortlist still needs validation</div>
</div>

<div class="cycle-step stage-test" aria-label="Current development stage: 05 TEST">05 TEST</div>

<!--
- Timing: 1:10.
- Define the visual goal and CPU, GPU and memory limits.
- Keep the scene, camera, data and device the same.
- A, B and C are examples; test the chosen candidate on harder scenes.
- Give each parallel variant its own worktree and output; compare the same inputs.
- Compare the image, frame time and resource use.
- Source cue: ESRI FEEDBACK — ArcGIS Maps SDK for JavaScript: agents and performance tests explored Gaussian Splats and Accessor; the comparison rows are illustrative.
-->

---

<div class="native-kicker">TEST / VISUAL EVIDENCE</div>

# Visual testing: diagnose differences

<figure class="sample-test-composite"><img src="./assets/sample-test/screenshot-testing.png" alt="Visual-test report with accepted and actual JavaScript SDK sample images, plus a dark comparison panel highlighting the temporary alert-state difference in red" /></figure>
<div class="sample-cause-list" aria-label="Three possible sources of a visual-test difference">
  <div v-click><span>UI / COMPONENTS</span><strong>Sample code, Calcite alert or component change?</strong></div>
  <div v-click><span>SCENE / MAP PIXELS</span><strong>SDK rendering or view-state change?</strong></div>
  <div v-click><span>DATA</span><strong>Missing layers or changed layer appearance?</strong></div>
</div>
<div v-click class="sample-agent-handoff"><span>AI-ASSISTED TRIAGE</span><strong>Screenshots + logs + code history → likely cause → fix → rerun</strong></div>

<div class="cycle-step stage-test" aria-label="Current development stage: 05 TEST">05 TEST</div>

<!--
- Timing: 1:45.
- The real report shows a temporary alert difference.
- Check three possible causes: UI, scene and data.
- AI investigation is proposed; this CI run did not use AI.
- Understand the alert timing before changing the reference image.
- Source cue: MY EXAMPLE — ArcGIS Maps SDK for JavaScript sample testing: real alert difference; AI diagnosis is proposed.
-->

---

<div class="native-kicker">TEST / WAITING FOR THE VIEW</div>

# Testing: wait for the view state

<div class="native-subtitle">Copilot helped find dependencies on fixed delays.</div>
<div class="lesson-pair readiness-pair">
  <div v-click="1" class="lesson-panel">
    <span class="lesson-label">BEFORE / FIXED DELAY</span>
    <strong>Wait a fixed time</strong>
    <div class="readiness-track"><span class="readiness-time">Start</span><b aria-hidden="true">············</b><span class="readiness-time">Check</span></div>
    <p>Elapsed time does not prove readiness.</p>
  </div>
  <div v-click="2" class="lesson-panel lesson-positive">
    <span class="lesson-label">AFTER / VIEW STATE</span>
    <strong>Wait for the required state</strong>
    <div class="readiness-track"><span class="readiness-time">Start</span><b aria-hidden="true">→</b><span class="readiness-state">View state</span><b aria-hidden="true">→</b><span class="readiness-time">Check</span></div>
    <p>Tests now use <code>view.updating</code>.</p>
  </div>
</div>
<div class="lesson-source">The ready state depends on the test.</div>
<div class="native-close">Understand the delay before removing it.</div>
<div class="cycle-step stage-test" aria-label="Current development stage: 05 TEST">05 TEST</div>

<!--
- Timing: 0:50.
- Fixed waits hid code dependencies and slowed the tests down.
- Copilot helped find those dependencies; tests changed to use view.updating.
- Understand why the delay exists, then wait for the required state.
- This is separate from the alert case; no measured speedup was reported.
- Source cue: ESRI FEEDBACK — Web GIS SDK: Copilot traced fixed-delay dependencies; tests changed to use view.updating.
-->

---

<div class="native-kicker">TEST / COVERAGE</div>

<script setup>
const deviceVideoPoster = `${import.meta.env.BASE_URL}media/browser-device-testing-poster.png`;
</script>

# Browser and device testing

<div class="native-subtitle">Record where the browser runs and what the result proves.</div>
<div class="coverage-demo-grid">
  <div>
    <div class="coverage-workstation" aria-label="Possible coverage: Windows browsers, WSL, connected devices and external providers">
      <img v-click="1" src="/diagrams/test-coverage-laptop.svg" alt="Windows laptop running Chrome" />
      <img v-click="2" src="/diagrams/test-coverage-firefox.svg" alt="Firefox added on the Windows laptop" />
      <img v-click="3" src="/diagrams/test-coverage-wsl.svg" alt="WSL Linux checks added on the same laptop" />
      <img v-click="4" src="/diagrams/test-coverage-devices.svg" alt="Android phone and iPad connected by USB or Wi-Fi" />
      <img v-click="5" src="/diagrams/test-coverage-providers.svg" alt="BrowserStack and TestingBot added as external test providers" />
      <div v-click="6" class="coverage-playwright"><img src="./assets/brand/playwright-logo.svg" alt="Playwright" /><span>Playwright</span></div>
    </div>
    <div v-click="4" class="coverage-evidence">
      <strong>Emulation ≠ a real device</strong>
      <span>Browser + OS + device + result</span>
      <span>Graphics work: verify the renderer too.</span>
    </div>
  </div>
  <figure v-click="7" class="device-demo">
    <div class="device-demo-player">
      <SlidevVideo v-if="$clicks >= 7" autoplay="once" autoreset="slide" controls muted playsinline preload="metadata" :poster="deviceVideoPoster" aria-label="Browser and device testing setup">
        <source src="/media/browser-device-testing.mp4" type="video/mp4" />
      </SlidevVideo>
    </div>
  </figure>
</div>

<div class="cycle-step stage-test" aria-label="Current development stage: 05 TEST">05 TEST</div>

<!--
- Timing: 1:25.
- Reveal the coverage diagram in six clicks. The seventh and final click reveals and starts the video beside it.
- The recording shows browser and device testing with agentic-starter-ts. Desktop browsers are visible for the demonstration; routine desktop automation is headless.
- Built-in local browser automation, documented real-device setup and separate provider integrations are different paths.
- A phone-sized desktop viewport is emulation; it does not prove a real phone passed. Playwright WebKit is not shipping Safari.
- Record browser, rendering OS, device and result; verify the actual renderer for graphics claims. WSL and native Windows are separate results.
- The clip shows the setup, not a passing suite on every device. Mark untested targets as not run.
- Source cue: MY EXAMPLE — agentic-starter-ts browser/device setup recording, 18 October 2026; the coverage diagram remains illustrative.
-->

---

<div class="native-kicker">TEST + DEPLOY / REPEATABILITY</div>

# Handling non-deterministic AI

<div class="native-subtitle">AI proposals can vary. Make the surrounding workflow repeatable.</div>
<div class="repeatability-workflow">
  <div class="repeatability-grid">
    <div v-click="1" class="repeatability-step">
      <svg viewBox="0 0 64 64" aria-hidden="true"><rect x="12" y="9" width="40" height="48" rx="4"/><path d="M23 20h19M23 32h19M23 44h12m-19-4 4 4 6-7"/></svg>
      <div><span>01 / INPUTS</span><strong>Make requirements explicit</strong><small>Stable task, data and environment</small></div>
    </div>
    <div v-click="2" class="repeatability-step">
      <svg viewBox="0 0 64 64" aria-hidden="true"><rect x="7" y="12" width="50" height="40" rx="4"/><path d="m17 25 9 7-9 7m17 1h13"/></svg>
      <div><span>02 / OPERATIONS</span><strong>Use scripts and tools</strong><small>Repeat the agreed steps</small></div>
    </div>
    <div v-click="3" class="repeatability-step">
      <svg viewBox="0 0 64 64" aria-hidden="true"><circle cx="32" cy="32" r="24"/><path d="m19 32 9 9 18-21"/></svg>
      <div><span>03 / CHECKS</span><strong>Test agreed behavior</strong><small>Automated checks with clear criteria</small></div>
    </div>
    <div v-click="4" class="repeatability-step">
      <svg viewBox="0 0 64 64" aria-hidden="true"><circle cx="27" cy="27" r="17"/><path d="m40 40 16 16M19 26h16m-16 7h10"/></svg>
      <div><span>04 / REVIEW</span><strong>AI review → fix → human review</strong><small>Scenarios + project rules + full diff</small></div>
    </div>
  </div>
  <div v-click="5" class="repeatability-deploy"><span>DEPLOY</span><div><strong>AI advice cannot replace release gates.</strong><small>Reviewed scripts · required checks · approval rules</small></div></div>
</div>

<div class="cycle-step stage-deploy" aria-label="Current development stage: 06 DEPLOY">06 DEPLOY</div>

<!--
- Timing: 1:15.
- AI results can vary; make the work around AI repeatable.
- Use clear requirements, stable inputs, scripts, behavior checks and evidence review.
- An access-rule reminder helps; a regression test checks whether the rules still hold.
- After checks, ask AI to review the complete change against the agreed scenarios, project instructions and documentation. Resolve valid findings before human review of behavior and design.
- Separate correctness and maintainability passes can organize the review. Repeated AI approval is not proof of correctness; humans still judge the result.
- Enforce release gates; AI advice cannot replace them. Check the deployed app as its users.
- Source cue: SYNTHESIS — ArcGIS GeoBIM checks and general engineering guidance on reproducibility; Paul Sturm: AI review before human review; Max Patiiuk / Web GIS SDK: review grounded in project guidance. Review sequence and deployment gates are recommendations.
-->

---

<div class="native-kicker">MAINTAIN / DOCUMENTATION</div>

# Documentation: write and validate

<div class="native-subtitle">Write docs with the change, then check the guide against the running app.</div>
<ProjectGuidance />
<div v-click="5" class="native-close">A mismatch can mean a mistake in the guide or the software.</div>
<div class="cycle-step stage-maintain" aria-label="Current development stage: 07 MAINTAIN">07 MAINTAIN</div>

<!--
- Timing: 0:55.
- Write developer and user docs with the code and tests.
- Documentation search helps the agent find guidance.
- Review the test plan, use test data and set a time limit.
- Follow the guide in the app; fix the guide or software when they differ.
- Keep lasting findings and decisions in tracked documentation so the next checkout can recover the reasons without the chat.
- Source cue: ESRI FEEDBACK — Web GIS SDK documentation search; general engineering guidance recommends writing docs with code and testing their steps.
-->

---

<div class="native-kicker">MAINTAIN / LONG TASKS</div>

# Context management and handoffs

<div class="native-subtitle">An agreed decision can disappear from a long conversation.</div>
<div class="native-grid handover-grid">
  <div v-click="1" class="context-loss-story">
    <span class="lesson-label">WITHOUT A HANDOVER / ILLUSTRATIVE</span>
    <div><small>Agreed earlier</small><strong>Keep the access rules.</strong></div>
    <b>↓ Conversation shortened</b>
    <div class="context-loss-drift"><small>Later continuation</small><strong>Agent changes the access rules.</strong></div>
  </div>
  <div v-click="2" class="native-document context-record">
    <div class="native-document-header">HANDOVER / ILLUSTRATIVE</div>
    <div><span>Goal</span><strong>Feature details appear</strong></div>
    <div><span>Decision</span><strong>Keep access rules</strong></div>
    <div><span>Done</span><strong>Details UI updated</strong></div>
    <div><span>Checks</span><strong>Type check passed</strong></div>
    <div><span>Next</span><strong>Test feature selection</strong></div>
  </div>
</div>
<div v-click="2" class="native-close">Review → correct → save → share.<br /><small>Keep verified lessons in project rules, examples or checks.</small></div>
<div class="cycle-step stage-maintain" aria-label="Current development stage: 07 MAINTAIN">07 MAINTAIN</div>

<!--
- Timing: 0:55.
- Shortening the conversation can make the agent forget an agreed decision.
- Save the goal, decisions, work done, check results and next step.
- Read the record before continuing and check that the decision still holds.
- A handoff is temporary task state. Lasting decisions and their rationale belong in tracked docs or an Architecture Decision Record (ADR).
- After a verified correction, update a shared project rule, example or reusable check. Future sessions can use that guidance; this does not retrain the model.
- Verify the recorded commit, checks and approvals against live state before resuming; a handoff is not fresh evidence.
- The access-rule example is illustrative; the record helps but gives no guarantee.
- Source cue: SYNTHESIS — General engineering experience: resumable progress records; Native SDK deck: review, correct, save and share. The access-rule example is illustrative.
-->

---

<div class="native-kicker">BEHIND THE DECK</div>

# Creating this deck with AI and Slidev

<div class="native-subtitle">Prompt an agent in VS Code; Slidev renders editable Markdown, HTML and SVG.</div>
<div class="deck-making-grid">
  <div v-click="1" class="deck-making-prompt">
    <div class="deck-making-label">ILLUSTRATIVE PROMPT IN VS CODE</div>
    <blockquote>“Add the SDLC SVG and my Scene Viewer recording to this editable Slidev deck.”</blockquote>
    <div class="deck-making-files"><code>slides.md</code><code>theme.css</code><code>assets/diagrams/*.svg</code><code>public/media/*.mp4</code></div>
  </div>
  <div v-click="2" class="deck-making-output">
    <div class="deck-making-heading"><img src="./assets/brand/slidev-logo.svg" alt="Slidev logo" /><span>PREVIEW IN SLIDEV</span></div>
    <div class="deck-making-assets">
      <figure><img src="./assets/diagrams/software-development-cycle.svg" alt="Editable cycle diagram created for this deck" /><figcaption>Prompted SVG</figcaption></figure>
      <figure><img src="/media/glowing-3d-hiking-scene-poster.jpg" alt="Frame captured from the Scene Viewer recording" /><figcaption>Captured video frame</figcaption></figure>
    </div>
  </div>
</div>
<div v-click="3" class="native-close">Prompt → edit → preview → capture → refine.</div>

<!--
- Timing: 0:45.
- This deck was made in VS Code with an agent and Slidev.
- I supplied the video; the agent added it and made a still frame.
- The files stay editable; preview, improve and review the result.
- Source cue: MY EXAMPLE — Slidev / VS Code: actual deck-authoring workflow; separate from the email.
-->

---

<div class="native-kicker">HANDOVER</div>

# Getting started: one small task

<div class="native-subtitle">Use these five steps on your next development task.</div>
<ol class="first-task-steps" aria-label="Five steps to start using AI on a development task">
  <li v-click="1"><span>1</span><svg viewBox="0 0 64 64" aria-hidden="true"><rect x="12" y="9" width="40" height="48" rx="4" fill="none" stroke="currentColor" stroke-width="3"/><path d="M23 22h18m-18 10h18m-18 10h12" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round"/></svg><strong>Choose a task</strong><small>One useful change</small></li>
  <li v-click="2"><span>2</span><svg viewBox="0 0 64 64" aria-hidden="true"><circle cx="32" cy="32" r="24" fill="none" stroke="currentColor" stroke-width="3"/><path d="m19 33 9 9 18-21" fill="none" stroke="currentColor" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/></svg><strong>Define success</strong><small>Expected behavior</small></li>
  <li v-click="3"><span>3</span><svg viewBox="0 0 64 64" aria-hidden="true"><path d="M8 12c11-4 20-2 24 2 4-4 13-6 24-2v39c-11-4-20-2-24 2-4-4-13-6-24-2zM32 14v39M15 24h10m14 0h10M15 34h10m14 0h10" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/></svg><strong>Give context</strong><small>Versions, schema, constraints</small></li>
  <li v-click="4"><span>4</span><svg viewBox="0 0 64 64" aria-hidden="true"><rect x="5" y="10" width="54" height="44" rx="4" fill="none" stroke="currentColor" stroke-width="3"/><path d="M5 21h54m-39 18 9 8 17-20" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/></svg><strong>Run checks</strong><small>Tests and running app</small></li>
  <li v-click="5"><span>5</span><svg viewBox="0 0 64 64" aria-hidden="true"><circle cx="27" cy="27" r="17" fill="none" stroke="currentColor" stroke-width="3"/><path d="m40 40 16 16m-38-29 6 6 12-14" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/></svg><strong>Review results</strong><small>Save verified lessons</small></li>
</ol>

<div v-click="6" class="starter-resource"><span>MY PRACTICAL STARTING POINT</span><a href="https://github.com/SaschaBrunnerCH/agentic-starter-ts" target="_blank" rel="noopener noreferrer">github.com/SaschaBrunnerCH/agentic-starter-ts ↗</a></div>

<!--
- Timing: 0:45.
- Start with one small task and define success.
- Give SDK and platform versions, layer schema, constraints and reference examples.
- Run tests, check the app and review the results.
- Save verified corrections in shared guidance, examples or checks. Share what works, then hand over to Raul on limits, risks and responsible use.
- The linked starter is my implementation of these patterns, separate from the reported Esri team examples. Reuse the mechanisms that fit your project.
- Reveal the starter link on the sixth and final click, after the five steps.
- Source cue: SYNTHESIS — ArcGIS GeoBIM, ArcGIS Pro and Web GIS SDK: clear tasks and checked results; Native SDK deck: context briefing and shared corrections.
-->
