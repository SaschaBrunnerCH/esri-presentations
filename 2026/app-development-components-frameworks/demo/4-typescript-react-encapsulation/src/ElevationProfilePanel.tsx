import "@esri/calcite-components/components/calcite-panel";
import "@esri/calcite-components/components/calcite-chip";
import "@esri/calcite-components/components/calcite-chip-group";
import "@arcgis/map-components/components/arcgis-elevation-profile";

import { useState } from "react";
import type Graphic from "@arcgis/core/Graphic.js";
import type ElevationProfileAnalysisView2D from "@arcgis/core/views/2d/analysis/ElevationProfileAnalysisView2D.js";

const round = (value?: number) =>
  Math.round(((value ?? 0) + Number.EPSILON) * 100) / 100;

const ElevationProfilePanel = ({
  selectedGraphic,
}: {
  selectedGraphic?: Graphic;
}) => {
  const [distance, setDistance] = useState<string>("");
  const [elevation, setElevation] = useState<string>("");

  const handleElevationProfileChange = async (
    event: HTMLArcgisElevationProfileElement["arcgisPropertyChange"],
  ) => {
    if (event.detail.name !== "progress" || event.target.progress !== 1) {
      return;
    }
    const elevProf = event.target;
    const view = elevProf.view;
    if (!view) {
      return;
    }
    await view.when();
    const analysisView = (await view.whenAnalysisView(
      elevProf.analysis,
    )) as ElevationProfileAnalysisView2D;
    if (!analysisView.statistics || !elevProf.effectiveDisplayUnits) {
      return;
    }
    if (!elevProf.feature) return;
    console.log("Results are computed", analysisView.results);
    console.log("Statistics are computed", analysisView.statistics);
    setDistance(
      `${round(analysisView.statistics.maxDistance ?? undefined)} ${elevProf.effectiveDisplayUnits.distance}`,
    );
    setElevation(
      `${round(analysisView.statistics.elevationGain ?? undefined)} ${elevProf.effectiveDisplayUnits.elevation}`,
    );
  };

  return (
    <calcite-panel id="elevation-panel" heading="Elevation profile">
      <calcite-chip-group slot="header-actions-end" label="Statistics">
        {distance && (
          <calcite-chip icon="walking-distance" id="distance" label="Distance">
            {distance}
          </calcite-chip>
        )}
        {elevation && (
          <calcite-chip icon="altitude" id="elevation" label="Elevation">
            {elevation}
          </calcite-chip>
        )}
      </calcite-chip-group>
      <arcgis-elevation-profile
        referenceElement="map"
        feature={selectedGraphic}
        elevationUnit="meters"
        distanceUnit="meters"
        hideClearButton
        hideLegend
        hideSettingsButton
        onarcgisPropertyChange={handleElevationProfileChange}
      ></arcgis-elevation-profile>
    </calcite-panel>
  );
};

export default ElevationProfilePanel;
