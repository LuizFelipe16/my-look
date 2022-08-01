import { getStyleProperty, ThemePositions } from "./spacing";

const PROPERTY_MODULE = 'margin';

export const margin: ThemePositions = {
  full: getStyleProperty(PROPERTY_MODULE),
  vertical: getStyleProperty(PROPERTY_MODULE, 'bottom', 'top'),
  horizontal: getStyleProperty(PROPERTY_MODULE, 'left', 'right'),
  bottom: getStyleProperty(PROPERTY_MODULE, 'bottom'),
  top: getStyleProperty(PROPERTY_MODULE, 'top'),
  left: getStyleProperty(PROPERTY_MODULE, 'left'),
  right: getStyleProperty(PROPERTY_MODULE, 'right'),
};
