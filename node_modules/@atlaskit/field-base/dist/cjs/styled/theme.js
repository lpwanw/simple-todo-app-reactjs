"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getBorderColorFocus = exports.getBorderColor = exports.getBackgroundColorHover = exports.getBackgroundColorFocus = exports.getBackgroundColor = void 0;

var _components = require("@atlaskit/theme/components");

var colors = _interopRequireWildcard(require("@atlaskit/theme/colors"));

// The following are the name for color mappings in @atlaskit/themes
// The exports are the functions, not the objects, so could not be used here
var disabled = {
  light: colors.N20,
  dark: colors.DN20
}; // For validation red is the new 'yellow' which was { light: colors.Y300, dark: colors.Y300 }

var red = {
  light: colors.R400,
  dark: colors.R400
}; // The following do not yet have a darkmode 'map': N20A, N10

var getBackgroundColor = (0, _components.themed)('appearance', {
  standard: {
    light: colors.N10,
    dark: colors.DN10
  },
  disabled: disabled,
  invalid: {
    light: colors.N10,
    dark: colors.DN10
  },
  subtle: {
    light: 'transparent',
    dark: 'transparent'
  },
  none: {
    light: 'transparent',
    dark: 'transparent'
  }
});
exports.getBackgroundColor = getBackgroundColor;
var getBackgroundColorFocus = (0, _components.themed)('appearance', {
  standard: {
    light: colors.N0,
    dark: colors.DN10
  },
  disabled: disabled,
  invalid: {
    light: colors.N0,
    dark: colors.DN10
  },
  subtle: {
    light: colors.N0,
    dark: colors.DN10
  },
  none: {
    light: 'transparent',
    dark: 'transparent'
  }
});
exports.getBackgroundColorFocus = getBackgroundColorFocus;
var getBackgroundColorHover = (0, _components.themed)('appearance', {
  standard: {
    light: colors.N30,
    dark: colors.DN30
  },
  disabled: disabled,
  invalid: {
    light: colors.N30,
    dark: colors.DN30
  },
  subtle: {
    light: colors.N30,
    dark: colors.DN30
  },
  none: {
    light: 'transparent',
    dark: 'transparent'
  }
});
exports.getBackgroundColorHover = getBackgroundColorHover;
var getBorderColor = (0, _components.themed)('appearance', {
  standard: {
    light: colors.N40,
    dark: colors.DN40
  },
  disabled: {
    light: colors.N40,
    dark: colors.DN40
  },
  invalid: red,
  subtle: {
    light: 'transparent',
    dark: 'transparent'
  },
  none: {
    light: 'transparent',
    dark: 'transparent'
  }
});
exports.getBorderColor = getBorderColor;
var getBorderColorFocus = (0, _components.themed)('appearance', {
  standard: {
    light: colors.B100,
    dark: colors.B75
  },
  disabled: {
    light: colors.B100,
    dark: colors.B75
  },
  invalid: {
    light: colors.B100,
    dark: colors.B75
  },
  subtle: {
    light: colors.B100,
    dark: colors.B75
  },
  none: {
    light: 'transparent',
    dark: 'transparent'
  }
});
exports.getBorderColorFocus = getBorderColorFocus;