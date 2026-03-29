import * as React from "react";
import type { VariantProps } from "class-variance-authority";
import { cx } from "@kaanolin/utils";
import {
  mapLayerToggleStyles,
  mapLayerToggleItemStyles,
} from "./MapLayerToggle.styles";

export interface MapLayer {
  /** Unique layer identifier. */
  id: string;
  /** Display label. */
  label: string;
  /** Optional icon component. */
  icon?: React.ComponentType<React.SVGProps<SVGSVGElement>>;
}

export interface MapLayerToggleProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, "onChange">,
    VariantProps<typeof mapLayerToggleStyles> {
  /** Available map layers. */
  layers: MapLayer[];
  /** ID of the currently active layer. */
  activeLayer: string;
  /** Called when the user selects a different layer. */
  onLayerChange: (layerId: string) => void;
  /** Size variant for toggle items. */
  size?: VariantProps<typeof mapLayerToggleItemStyles>["size"];
  className?: string;
}

const MapLayerToggle = React.forwardRef<HTMLDivElement, MapLayerToggleProps>(
  (
    {
      className,
      layers,
      activeLayer,
      onLayerChange,
      orientation,
      size,
      ...props
    },
    ref,
  ) => (
    <div
      ref={ref}
      role="radiogroup"
      className={cx(mapLayerToggleStyles({ orientation }), className)}
      {...props}
    >
      {layers.map((layer) => {
        const isActive = layer.id === activeLayer;
        const Icon = layer.icon;

        return (
          <button
            key={layer.id}
            type="button"
            role="radio"
            aria-checked={isActive}
            onClick={() => onLayerChange(layer.id)}
            className={cx(mapLayerToggleItemStyles({ active: isActive, size }))}
          >
            {Icon && <Icon aria-hidden="true" className="size-4 shrink-0" />}
            {layer.label}
          </button>
        );
      })}
    </div>
  ),
);

MapLayerToggle.displayName = "MapLayerToggle";

export { MapLayerToggle };
