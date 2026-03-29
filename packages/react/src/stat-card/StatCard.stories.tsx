import type { Meta, StoryObj } from "@storybook/react";
import { StatCard } from "./StatCard";

const meta: Meta<typeof StatCard> = {
  title: "Components/StatCard",
  component: StatCard,
  parameters: { layout: "centered" },
};
export default meta;

type Story = StoryObj<typeof StatCard>;

export const Default: Story = {
  args: {
    label: "Incremento de rentas",
    value: "236%",
    delta: "+12% vs trimestre anterior",
    deltaType: "up",
    description: "Desde 2018 en colonias monitoreadas",
  },
};

export const Critical: Story = {
  args: {
    label: "Airbnbs activos en CDMX",
    value: "24,500",
    delta: "+34% anual",
    deltaType: "up",
    variant: "critical",
  },
};

export const Warning: Story = {
  args: {
    label: "FIBRAs presentes",
    value: "5",
    variant: "warning",
    description: "Controlando el mercado inmobiliario",
  },
};

export const Success: Story = {
  args: {
    label: "Colonias estabilizadas",
    value: "3",
    delta: "-5% renta promedio",
    deltaType: "down",
    variant: "success",
  },
};

export const AllVariants: Story = {
  render: () => (
    <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
      {(["default", "critical", "warning", "success"] as const).map((v) =>
        (["sm", "md", "lg"] as const).map((s) => (
          <StatCard
            key={`${v}-${s}`}
            variant={v}
            size={s}
            label={`${v} / ${s}`}
            value="236%"
            delta="+12%"
            deltaType="up"
          />
        )),
      )}
    </div>
  ),
};
