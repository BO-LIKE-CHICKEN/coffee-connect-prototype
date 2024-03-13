const propertyGroups = require("stylelint-config-recess-order/groups");

module.exports = {
  customSyntax: "postcss-styled-syntax",
  extends: ["stylelint-config-standard"],
  plugins: ["stylelint-prettier", "stylelint-order"],
  rules: {
    "prettier/prettier": true,
    "property-no-vendor-prefix": null,
    "order/properties-order": propertyGroups.map((group) => ({
      ...group,
      emptyLineBefore: "always",
      noEmptyLineBetween: true,
    })),
    "declaration-empty-line-before": null,
    "media-feature-range-notation": null,
    "selector-class-pattern": null,
    "media-query-no-invalid": null,
  },
};
