import rootConfig from "../../eslint.config.mjs";

/**
 * Local overrides for @kaanolin/react-icons.
 *
 * The icon components are generated from Figma — some variant names collide
 * with global identifiers (e.g. `Infinity`) and our variant marker interfaces
 * intentionally extend a base type without adding members. Neither warrants
 * rewriting generated assets.
 */
export default [
  ...rootConfig,
  {
    rules: {
      "no-shadow-restricted-names": "off",
      "@typescript-eslint/no-empty-object-type": "off",
    },
  },
];
