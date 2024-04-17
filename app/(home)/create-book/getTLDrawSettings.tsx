import {
  TLComponents,
  TLUiOverrides,
  DefaultPageMenu,
  TLDefaultColorTheme,
  DefaultColorThemePalette,
} from "tldraw";
import BookOutline from "./BookOutline";

export default function getTLDrawSettings() {
  const components: TLComponents = {
    DebugMenu: null,
    HelpMenu: null,
    MainMenu: null,
    NavigationPanel: null,
    PageMenu: null,
    ZoomMenu: null,
    SharePanel: (props) => (
      <div className="tlui-style-panel tlui-style-panel__wrapper">
        <DefaultPageMenu {...props} />
      </div>
    ),
    OnTheCanvas: BookOutline,
  };

  const whitelistedTools = [
    "select",
    "draw",
    "eraser",
    "text",
    /* 'note', */ "asset",
    "rectangle",
    "ellipse",
    "line",
  ];
  const overrides: TLUiOverrides = {
    toolbar(editor, schema, helpers) {
      return schema.filter((item) => whitelistedTools.indexOf(item.id) !== -1);
    },
  };

  const overrideColors = () => {
    DefaultColorThemePalette.lightMode.background = "#444444";
    DefaultColorThemePalette.darkMode.background = "#444444";
    const colors: (keyof Partial<TLDefaultColorTheme>)[] = [
      "black",
      "blue",
      "green",
      "grey",
      "light-blue",
      "light-green",
      "light-red",
      "light-violet",
      "orange",
      "red",
      "violet",
      "yellow",
    ];
    colors.forEach((color) => {
      // @ts-ignore
      DefaultColorThemePalette.lightMode[color].semi =
        // @ts-ignore
        DefaultColorThemePalette.lightMode[color].solid;
      // @ts-ignore
      DefaultColorThemePalette.darkMode[color].semi =
        // @ts-ignore
        DefaultColorThemePalette.darkMode[color].solid;
    });
  };

  return { components, overrides, overrideColors };
}
