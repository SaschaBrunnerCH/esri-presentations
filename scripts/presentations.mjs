import { fileURLToPath } from 'node:url';

export const repositoryRoot = fileURLToPath(new URL('../', import.meta.url));
export const presentations = [
  {
    path: '2026/developing-with-web-maps-and-scenes',
    pdf: 'ArcGIS_Online_Developing_with_Web_Maps_and_Web_Scenes.pdf',
    title: 'ArcGIS Online: Developing with Web Maps and Web Scenes',
    videos: [{ slide: 16, clicks: 5 }],
  },
  {
    path: '2026/app-development-components-frameworks',
    pdf: 'WEB-1138_ArcGIS_Maps_SDK_for_JavaScript_App_Development_with_Components_Using_Frameworks.pdf',
    // Mermaid diagrams need the normal slide viewport during export.
    exportPerSlide: true,
    title: 'App Development with Components',
  },
  {
    path: '2026/ai-infused-development-lessons-patterns',
    pdf: 'AI-1058_AI-Infused_Development_Lessons_Learned_and_Patterns_from_Esri_Engineers.pdf',
    title:
      'AI-Infused Development: Lessons Learned and Patterns from Esri Engineers',
    videos: [
      { slide: 8, clicks: 1 },
      { slide: 25, clicks: 1 },
      { slide: 31, clicks: 7 },
    ],
    focusStates: [
      { slide: 48, clicks: 2, paragraph: '103:0', overlay: '91' },
      { slide: 48, clicks: 2, paragraph: '103:2', overlay: null },
      { slide: 48, clicks: 5, paragraph: '103:0', overlay: null },
    ],
  },
  {
    path: '2026/3d-gis-3d-object-layer',
    pdf: '3D-1053_3D_GIS_Working_with_the_3D_Object_Layer.pdf',
    title: '3D GIS: Working with the 3D Object Layer',
    videos: [
      { slide: 6, clicks: 1 },
      { slide: 7, clicks: 1 },
      { slide: 25, clicks: 3 },
      { slide: 33, clicks: 2 },
      { slide: 35, clicks: 2 },
      { slide: 39, clicks: 2 },
    ],
  },
];
