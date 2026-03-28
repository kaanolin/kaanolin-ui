import type { Meta, StoryObj } from "@storybook/react";
import {
  HeaderNav,
  HeaderNavLogo,
  HeaderNavItems,
  HeaderNavItem,
  HeaderNavActions,
} from "./HeaderNavigation";

const meta = {
  title: "Components/HeaderNavigation",
  component: HeaderNav,
  parameters: { layout: "fullscreen" },
  tags: ["autodocs"],
} satisfies Meta<typeof HeaderNav>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <HeaderNav>
      <HeaderNavLogo>
        <span className="text-lg font-bold text-text-primary">Kaanolin</span>
      </HeaderNavLogo>
      <HeaderNavItems>
        <HeaderNavItem active>Home</HeaderNavItem>
        <HeaderNavItem>Products</HeaderNavItem>
        <HeaderNavItem>About</HeaderNavItem>
        <HeaderNavItem>Contact</HeaderNavItem>
      </HeaderNavItems>
    </HeaderNav>
  ),
};

export const WithActions: Story = {
  render: () => (
    <HeaderNav>
      <HeaderNavLogo>
        <span className="text-lg font-bold text-text-primary">Kaanolin</span>
      </HeaderNavLogo>
      <HeaderNavItems>
        <HeaderNavItem active>Dashboard</HeaderNavItem>
        <HeaderNavItem>Analytics</HeaderNavItem>
        <HeaderNavItem>Reports</HeaderNavItem>
      </HeaderNavItems>
      <HeaderNavActions>
        <button
          type="button"
          className="px-4 py-2 text-sm font-medium rounded-md bg-brand-600 text-white"
        >
          Sign Up
        </button>
        <button
          type="button"
          className="px-4 py-2 text-sm font-medium rounded-md border border-border-secondary text-text-primary"
        >
          Log In
        </button>
      </HeaderNavActions>
    </HeaderNav>
  ),
};

export const ActiveItem: Story = {
  render: () => (
    <HeaderNav>
      <HeaderNavLogo>
        <span className="text-lg font-bold text-text-primary">Kaanolin</span>
      </HeaderNavLogo>
      <HeaderNavItems>
        <HeaderNavItem href="/">Home</HeaderNavItem>
        <HeaderNavItem href="/products" active>
          Products
        </HeaderNavItem>
        <HeaderNavItem href="/about">About</HeaderNavItem>
      </HeaderNavItems>
    </HeaderNav>
  ),
};
