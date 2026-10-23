---
theme: default
titleTemplate: '%s'
title: 'ArcGIS Online: Developing with Web Maps and Web Scenes'
author: Kristian Kaesinger, Sascha Brunner
layout: none
aspectRatio: 16/9
canvasWidth: 1280
colorSchema: dark
fonts:
  webfonts: []
preloadImages: false
drawings:
  persist: false
clicks: 0
---

<OriginalBuild :pages="[1]" :step="$clicks" />

<!--
Original PowerPoint slide 1 · click 0
-->

---
layout: none
clicks: 0
title: "Please share your feedback in the app"
---

<OriginalBuild :pages="[2]" :step="$clicks" />

<!--
Original PowerPoint slide 2 · click 0
-->

---
layout: none
clicks: 0
title: "Outline"
---

<OriginalBuild :pages="[3]" :step="$clicks" />

<!--
Original PowerPoint slide 3 · click 0

Core concepts (Sascha) (1-33)
Map authoring and consumption (Kristian) (34-64)
Dynamic maps (65 – 102)
Popups (Kristian)
Arcade (Kristian)
Popup
Visual variables
Presentations (Kristian)
Editor(Components) (Kristian)
FeatureForms (Kristian)
Authorization and permissions (102 – 141)
Sharing (Sascha)
App authorization (Oauth) (Sascha)
 Closing remarks and Q&A
-->

---
layout: none
clicks: 0
title: "Core Concepts"
---

<OriginalBuild :pages="[4]" :step="$clicks" />

<!--
Original PowerPoint slide 4 · click 0
-->

---
layout: none
clicks: 2
title: "What is a WebScene/WebMap"
---

<OriginalBuild :pages="[5, 6, 7]" :step="$clicks" />

<!--
Original PowerPoint slide 5 · click 0

Original PowerPoint slide 6 · click 1

Original PowerPoint slide 7 · click 2
-->

---
layout: none
clicks: 2
title: "Web Map vs. Web Scene"
---

<OriginalBuild :pages="[8, 9, 10]" :step="$clicks" />

<!--
Original PowerPoint slide 8 · click 0

Original PowerPoint slide 9 · click 1

Original PowerPoint slide 10 · click 2
-->

---
layout: none
clicks: 8
title: "Bigger picture"
---

<OriginalBuild :pages="[11, 12, 13, 14, 15, 16, 17, 18, 19]" :step="$clicks" />

<!--
Original PowerPoint slide 11 · click 0

Original PowerPoint slide 12 · click 1

Original PowerPoint slide 13 · click 2

Original PowerPoint slide 14 · click 3

Original PowerPoint slide 15 · click 4

Original PowerPoint slide 16 · click 5

Original PowerPoint slide 17 · click 6

Original PowerPoint slide 18 · click 7

Original PowerPoint slide 19 · click 8
-->

---
layout: none
clicks: 12
title: "Purpose of Web Maps and Web Scenes"
---

<OriginalBuild :pages="[20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32]" :step="$clicks" />

<!--
Original PowerPoint slide 20 · click 0

Original PowerPoint slide 21 · click 1

Original PowerPoint slide 22 · click 2

Original PowerPoint slide 23 · click 3

Original PowerPoint slide 24 · click 4

Original PowerPoint slide 25 · click 5

Original PowerPoint slide 26 · click 6

Original PowerPoint slide 27 · click 7

Original PowerPoint slide 28 · click 8

Original PowerPoint slide 29 · click 9

Original PowerPoint slide 30 · click 10

Original PowerPoint slide 31 · click 11

Original PowerPoint slide 32 · click 12
-->

---
layout: none
clicks: 0
title: "Outline"
---

<OriginalBuild :pages="[33]" :step="$clicks" />

<!--
Original PowerPoint slide 33 · click 0
-->

---
layout: none
clicks: 0
title: "Map authoring and consumption"
---

<OriginalBuild :pages="[34]" :step="$clicks" />

<!--
Original PowerPoint slide 34 · click 0

We have now established what Web Maps and Web Scenes are and the role they play within ArcGIS. In this section, I want to look at their practical lifecycle: how we author them, and how they can then be consumed across different parts of the ArcGIS platform.
The important point is that authoring and consumption are not tied to a single application. The same Web Map or Web Scene can move between products and become the foundation for several different experiences.
-->

---
layout: none
clicks: 0
title: "Authoring via ArcGIS Online"
---

<OriginalBuild :pages="[35]" :step="$clicks" />

<!--
Original PowerPoint slide 35 · click 0

Steps:
AGOL start page
Indicate option of opening Map/Scene Viewer
Go to Feature Service Item
Open in Scene Viewer
Symbolise with Turbines
Add Labels
Change basemap
Hit save
Point out ID for future use
-->

---
layout: none
clicks: 4
title: "Authoring via ArcGIS Pro"
---

<OriginalBuild :pages="[36, 37, 38, 39, 40]" :step="$clicks" />

<!--
Original PowerPoint slide 36 · click 0

ArcGIS Online is not the only authoring environment. We can also create maps and scenes in ArcGIS Pro and share them to the portal.

Original PowerPoint slide 37 · click 1

This is useful when the authoring workflow begins on the desktop, perhaps because we are working with an existing Pro project or making use of Pro’s cartographic and data-management capabilities.
Once it has been shared, the result becomes a portal item that can participate in the same wider workflow. We can open it in other ArcGIS applications or load it into our own application.

Original PowerPoint slide 38 · click 2

Original PowerPoint slide 39 · click 3

Original PowerPoint slide 40 · click 4
-->

---
layout: none
clicks: 2
title: "Authoring via ArcGIS Maps SDK for JavaScript"
---

<OriginalBuild :pages="[41, 42, 43]" :step="$clicks" />

<!--
Original PowerPoint slide 41 · click 0

We can also author a Web Map or Web Scene programmatically using the ArcGIS Maps SDK for JavaScript.

Original PowerPoint slide 42 · click 1

In this example, updateFrom captures relevant state from the current view and applies it to the map object. We then use saveAs to create a new portal item, providing information such as the portal, the item title and the destination folder.
The returned item contains its portal item ID. We can use that ID to construct a link back to Scene Viewer, or store it and use it elsewhere in the application
This gives us an authoring workflow inside an application. The user can configure a scene interactively, and the application can persist that configuration as a reusable portal item.

Original PowerPoint slide 43 · click 2
-->

---
layout: none
clicks: 0
title: "Consumption of Web Maps and Scenes"
---

<OriginalBuild :pages="[44]" :step="$clicks" />

<!--
Original PowerPoint slide 44 · click 0

So far, we have looked at three ways to author these items: through ArcGIS Online, through ArcGIS Pro and through code.
Let’s now turn that around. Once we have created a Web Map or Web Scene, where and how can it be consumed.
-->

---
layout: none
clicks: 1
title: "Consumption – ArcGIS Pro"
---

<OriginalBuild :pages="[45, 46]" :step="$clicks" />

<!--
Original PowerPoint slide 45 · click 0

The item is not owned by the environment in which it was originally created. It can be used throughout the platform. A Web Map or Web Scene can be brought back into ArcGIS Pro.

Original PowerPoint slide 46 · click 1

We can pull in a map from Portal through the Catalog pane. This will create a local map in Pro that is still linked to its Online counterpart. We can use that link to make a change in Pro, and then push those local changes back Online.
-->

---
layout: none
clicks: 6
title: "Consumption – ArcGIS Online"
---

<OriginalBuild :pages="[47, 48, 49, 50, 51, 52, 53]" :step="$clicks" />

<!--
Original PowerPoint slide 47 · click 0

Within ArcGIS Online, there is a spectrum of ways to consume a Web Map or Web Scene.

Original PowerPoint slide 48 · click 1

The Web Map or Web Scene provides the common foundation across that spectrum. It allows us to preserve the cartographic decisions and layer configuration while selecting the application approach that best fits our requirements. Let’s go through them one by one

Original PowerPoint slide 49 · click 2

At one end, Scene Viewer provides a ready-made environment for viewing and interacting with a Web Scene. We will see a lot more of Map Viewer and Scene Viewer later.

Original PowerPoint slide 50 · click 3

Instant Apps let us configure a focused application without writing code. Experience Builder gives us a low-code environment with more control over layout, interaction and widgets.

Original PowerPoint slide 51 · click 4

Web Map forms the foundation for many of our configurable apps
From no-code to full-code
Already seen the Scene Viewer
Use them to configure instant apps

Original PowerPoint slide 52 · click 5

Experience Builder gives us a low-code environment with more control over layout, interaction and widgets.

Original PowerPoint slide 53 · click 6

At the other end of the spectrum, the ArcGIS Maps SDK for JavaScript gives us full control through custom code which will be the focus of the rest of our session.
-->

---
layout: none
clicks: 0
title: "Consumption – ArcGIS Online – Maps SDK for JavaScript"
---

<OriginalBuild :pages="[54]" :step="$clicks" />

<!--
Original PowerPoint slide 54 · click 0

Can I have a quick show of hands, who here has worked with the JavaScript SDK before?
Who has used the new web components?
-->

---
layout: none
clicks: 0
title: "Maps SDK for JavaScript"
---

<OriginalBuild :pages="[55]" :step="$clicks" />

<!--
Original PowerPoint slide 55 · click 0

Shortest demo ever, load all the configuration from our web map into the app by appid
Can I have a quick show of hands, who here has worked with the JavaScript SDK before?
Who has used the new web components?
The key takeaway from this section is that Web Maps and Web Scenes are portable, reusable configurations. They can be authored through a viewer, ArcGIS Pro or code, and then consumed through anything from a ready-made viewer to a fully custom application.
-->

---
layout: none
clicks: 0
title: "Outline"
---

<OriginalBuild :pages="[56]" :step="$clicks" />

<!--
Original PowerPoint slide 56 · click 0

Loading a Web Map or Web Scene is only the beginning. In this section, we will look at some of the capabilities stored in, or associated with, those items that help us build richer and more interactive applications.
-->

---
layout: none
clicks: 0
title: "Building interactive apps from Web Maps and Web Scenes"
---

<OriginalBuild :pages="[57]" :step="$clicks" />

<!--
Original PowerPoint slide 57 · click 0

We’ll begin with pop-ups and Arcade, then look at Web Scene presentations, SDK components and feature forms.
-->

---
layout: none
clicks: 3
title: "Popups"
---

<OriginalBuild :pages="[58, 59, 60, 61]" :step="$clicks" />

<!--
Original PowerPoint slide 58 · click 0

Pop-ups are one of the main ways users explore information associated with a feature.
Their configuration can be authored as part of the layer on the Web Map, which means the content and presentation can be reused across applications.

Original PowerPoint slide 59 · click 1

This might include which fields are shown, how they are formatted and any additional content associated with the feature.
Here. we have added a media image to the popup which will appear when selecting a feature.

Original PowerPoint slide 60 · click 2

Again, the same settings are coming through in our custom app as well.

Original PowerPoint slide 61 · click 3

However, applications are not limited to opening pop-ups only in response to a default map click. Within our custom applications, we can control them programmatically as part of a wider application workflow.
Here, view.openPopup allows the application to open a pop-up for a specific set of features. Those features could have been selected through another part of the interface, returned by a query or identified by some custom application logic.
-->

---
layout: none
clicks: 5
title: "Arcade – Expression language for WebGIS"
---

<OriginalBuild :pages="[62, 63, 64, 65, 66, 67]" :step="$clicks" />

<!--
Original PowerPoint slide 62 · click 0

One of my favourite parts about the ArcGIS system is how easy they make it to configure things in the web. But every UI has its limits. With Arcade, Esri’s scripting language, we can customize a lot of the elements beyond a static configuration. Instead, we can pull in the context of the current editing session and the data contained to alter the look and feel of our apps dynamically.

Original PowerPoint slide 63 · click 1

Original PowerPoint slide 64 · click 2

Arcade sits between the underlying feature data and the way that data is presented. Rather than requiring every display value to exist as a stored field, an Arcade expression can derive information when it is needed.”
The expression is stored with the relevant configuration, such as the Web Map, Web Scene or layer. That helps make the logic portable because applications consuming the item can use the same expression rather than reimplementing it separately.

Original PowerPoint slide 65 · click 3

Arcade is intentionally focused. It is not a replacement for all of our application logic. Its strength is calculating and formatting values within ArcGIS visualisation and information-display workflows. Within the context of a web map, we can use it in places such as symbolization, pop-ups, and labelling.

Original PowerPoint slide 66 · click 4

Some of you might think “why reinvent the wheel with yet another scripting language, when we could just use Python?
The idea is that with Arcade we have a lighweight and fast scripting language that is specifically targeted towards its use case. It’s optimized for GIS workflows and the fact that it is a closed ecosystem means that it is more secure as we don’t have the many dependencies that come with Python. It also means we can ensure that it works the same across the board rather than having complex dependency conflicts.

Original PowerPoint slide 67 · click 5
-->

---
layout: none
clicks: 0
title: "Visualisation with Arcade"
---

<OriginalBuild :pages="[68]" :step="$clicks" />

<!--
Original PowerPoint slide 68 · click 0

Show of hands, who has used Arcade?
Quick tour of the editor
Open up the previous web map
Update the height attribute
Perform a calculation on the height to get true height
This is stored against the layer in the web map. Wherever we use the web map, that’s where we get this arcade logic
-->

---
layout: none
clicks: 5
title: "Arcade – Expression language for WebGIS"
---

<OriginalBuild :pages="[69, 70, 71, 72, 73, 74]" :step="$clicks" />

<!--
Original PowerPoint slide 69 · click 0

Original PowerPoint slide 70 · click 1

Original PowerPoint slide 71 · click 2

Original PowerPoint slide 72 · click 3

Original PowerPoint slide 73 · click 4

Original PowerPoint slide 74 · click 5
-->

---
layout: none
clicks: 0
title: "Labelling with Arcade"
---

<OriginalBuild :pages="[75]" :step="$clicks" />

<!--
Original PowerPoint slide 75 · click 0
-->

---
layout: none
clicks: 5
title: "Presentations"
---

<OriginalBuild :pages="[76, 77, 78, 79, 80, 81]" :step="$clicks" />

<!--
Original PowerPoint slide 76 · click 0

The next capability is specific to Web Scenes: presentations. I have highlighted that in the top right corner. We’ll get to a Web Map specific feature later.

Original PowerPoint slide 77 · click 1

A presentation is a collection of slides stored in the Web Scene. Each slide can capture a particular state, including its viewpoint, basemap, layer visibility, analyses and additional elements.
This allows the scene author to define a guided sequence through the content. Instead of asking the application to reconstruct each viewpoint and layer state, the application can use the authored slides
They are similar to the web map’s bookmarks feature, but store even more information such as the current selection and layer visibility.

Original PowerPoint slide 78 · click 2

Original PowerPoint slide 79 · click 3

In the code, we first obtain the scene component and wait until its view is ready. We can then access the presentation through the Web Scene, retrieve its slides and apply a selected slide to the view.
Calling applyTo restores the state represented by that slide. This provides a useful bridge between an authored presentation and a custom application experience.

Original PowerPoint slide 80 · click 4

A presentation slide may also contain pop-up information. The application can inspect that information, resolve the stored feature references and open the corresponding features in the custom application.
If the current slide has no pop-up information, the application can instead ensure that no previous pop-up remains open.

Original PowerPoint slide 81 · click 5
-->

---
layout: none
clicks: 4
title: "Components"
---

<OriginalBuild :pages="[82, 83, 84, 85, 86]" :step="$clicks" />

<!--
Original PowerPoint slide 82 · click 0

Original PowerPoint slide 83 · click 1

Components provide pre-built user-interface elements for web applications. Their purpose is to encapsulate common ArcGIS capabilities and the associated logic, reducing the amount of custom code we need to write.
They are framework agnostic, so they can be used without committing the application to one particular JavaScript framework.

Original PowerPoint slide 84 · click 2

There have been a lot of talks about components in general already, but I want to show how one particularly powerful component hooks back into the what we configure in our web map.
The Editor component! You are probably aware that we can make both attribute and geometry edits in the map viewer and scene viewer.

Original PowerPoint slide 85 · click 3

Original PowerPoint slide 86 · click 4
-->

---
layout: none
clicks: 3
title: "Feature forms"
---

<OriginalBuild :pages="[87, 88, 89, 90]" :step="$clicks" />

<!--
Original PowerPoint slide 87 · click 0

The final capability in this section is feature forms, which are supported for Web Maps.
A form defines the editing experience for a feature: how fields are organised and presented when someone creates or updates data.”

Original PowerPoint slide 88 · click 1

Because the form configuration is associated with the Web Map, applications can reuse the authored editing experience rather than independently deciding how every field should be presented
We configure Feature Forms from the Map Viewer

Original PowerPoint slide 89 · click 2

Here, we have dragged in the fields we want to expose to our editors, defined set values for for some of them, and calculated others on the fly.
For instance,

Original PowerPoint slide 90 · click 3
-->

---
layout: none
clicks: 0
title: "Outline"
---

<OriginalBuild :pages="[91]" :step="$clicks" />

<!--
Original PowerPoint slide 91 · click 0
-->

---
layout: none
clicks: 0
title: "Authorization andPermissions"
---

<OriginalBuild :pages="[92]" :step="$clicks" />

<!--
Original PowerPoint slide 92 · click 0
-->

---
layout: none
clicks: 1
title: "Authorization – Portal item access"
---

<OriginalBuild :pages="[93, 94]" :step="$clicks" />

<!--
Original PowerPoint slide 93 · click 0

Original PowerPoint slide 94 · click 1
-->

---
layout: none
clicks: 4
title: "Authorization – Sharing"
---

<OriginalBuild :pages="[95, 96, 97, 98, 99]" :step="$clicks" />

<!--
Original PowerPoint slide 95 · click 0

Original PowerPoint slide 96 · click 1

Original PowerPoint slide 97 · click 2

Original PowerPoint slide 98 · click 3

Original PowerPoint slide 99 · click 4
-->

---
layout: none
clicks: 0
title: "Authorization"
---

<OriginalBuild :pages="[100]" :step="$clicks" />

<!--
Original PowerPoint slide 100 · click 0
-->

---
layout: none
clicks: 2
title: "Authorization – User"
---

<OriginalBuild :pages="[101, 102, 103]" :step="$clicks" />

<!--
Original PowerPoint slide 101 · click 0

Original PowerPoint slide 102 · click 1

Original PowerPoint slide 103 · click 2
-->

---
layout: none
clicks: 7
title: "Authorization – Oauth"
---

<OriginalBuild :pages="[104, 105, 106, 107, 108, 109, 110, 111]" :step="$clicks" />

<!--
Original PowerPoint slide 104 · click 0

Original PowerPoint slide 105 · click 1

Original PowerPoint slide 106 · click 2

Original PowerPoint slide 107 · click 3

Original PowerPoint slide 108 · click 4

Original PowerPoint slide 109 · click 5

Original PowerPoint slide 110 · click 6

Original PowerPoint slide 111 · click 7
-->

---
layout: none
clicks: 7
title: "Authorization – Oauth"
---

<OriginalBuild :pages="[112, 113, 114, 115, 116, 117, 118, 119]" :step="$clicks" />

<!--
Original PowerPoint slide 112 · click 0

Original PowerPoint slide 113 · click 1

Original PowerPoint slide 114 · click 2

Original PowerPoint slide 115 · click 3

Original PowerPoint slide 116 · click 4

Original PowerPoint slide 117 · click 5

Original PowerPoint slide 118 · click 6

Original PowerPoint slide 119 · click 7
-->

---
layout: none
clicks: 2
title: "Authorization – Portal item access"
---

<OriginalBuild :pages="[120, 121, 122]" :step="$clicks" />

<!--
Original PowerPoint slide 120 · click 0

Original PowerPoint slide 121 · click 1

Original PowerPoint slide 122 · click 2
-->

---
layout: none
clicks: 2
title: "Authorization – App"
---

<OriginalBuild :pages="[123, 124, 125]" :step="$clicks" />

<!--
Original PowerPoint slide 123 · click 0

Original PowerPoint slide 124 · click 1

Original PowerPoint slide 125 · click 2
-->

---
layout: none
clicks: 0
title: "Authorization – Oauth"
---

<OriginalBuild :pages="[126]" :step="$clicks" />

<!--
Original PowerPoint slide 126 · click 0
-->

---
layout: none
clicks: 0
title: "Outline"
---

<OriginalBuild :pages="[127]" :step="$clicks" />

<!--
Original PowerPoint slide 127 · click 0
-->

---
layout: none
clicks: 0
title: "Summary"
---

<OriginalBuild :pages="[128]" :step="$clicks" />

<!--
Original PowerPoint slide 128 · click 0
-->

---
layout: none
clicks: 0
title: "References"
---

<OriginalBuild :pages="[129]" :step="$clicks" />

<!--
Original PowerPoint slide 129 · click 0
-->

---
layout: none
clicks: 0
title: "Collect your ticket with boat assignment from the Registration Desk from 10:00 – 16:30. "
---

<OriginalBuild :pages="[130]" :step="$clicks" />

<!--
Original PowerPoint slide 130 · click 0
-->

---
layout: none
clicks: 0
title: "Questions"
---

<OriginalBuild :pages="[131]" :step="$clicks" />

<!--
Original PowerPoint slide 131 · click 0
-->

---
layout: none
clicks: 0
title: "Acknowledgments"
---

<OriginalBuild :pages="[132]" :step="$clicks" />

<!--
Original PowerPoint slide 132 · click 0
-->

---
layout: none
clicks: 0
title: "Please share your feedback in the app"
---

<OriginalBuild :pages="[133]" :step="$clicks" />

<!--
Original PowerPoint slide 133 · click 0
-->

---
layout: none
clicks: 0
title: "Join the conversation using #EUDevTech2026"
---

<OriginalBuild :pages="[134]" :step="$clicks" />

<!--
Original PowerPoint slide 134 · click 0
-->

---
layout: none
clicks: 0
title: "Copyright © 2026 Esri. All rights reserved.Portions of this work may include Adobe Stock images used under license. Copyright © 2026 Adobe Inc. All rights reserved."
---

<OriginalBuild :pages="[135]" :step="$clicks" />

<!--
Original PowerPoint slide 135 · click 0

Portions of this work may include Adobe Stock images used under license. Copyright © 2026 Adobe Inc. All rights reserved.
-->
