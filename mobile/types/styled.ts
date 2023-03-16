import "styled-components";

import { theme } from "../src/themes/theme";

declare module "styled-components" {
  type themeType = typeof theme;

  export interface DefaultTheme extends themeType {}
}
