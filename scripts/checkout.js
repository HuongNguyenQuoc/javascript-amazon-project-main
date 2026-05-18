import '../data/car.js';
import { loadProducts } from "../data/products.js";
import { renderCheckoutHeader } from "./checkout/checkoutHeader.js";
import { renderOrderSummary } from "./checkout/orderSummary.js";
import { renderPaymentSummary } from "./checkout/paymentSummary.js";
import { loadCart } from '../data/cart.js';

Promise.all([
    new Promise((resolve) => {
        loadProducts(() => {
            resolve('value1');
        });
    }),
    new Promise((resolve) => {
        loadCart(() => {
            resolve();
        });
    })
]).then(() => {
    renderCheckoutHeader();
    renderOrderSummary();
    renderPaymentSummary();
});

/*
{
  "editor.smoothScrolling": true,
  "workbench.list.smoothScrolling": true,
  "terminal.integrated.smoothScrolling": true,
  "editor.mouseWheelScrollSensitivity": 0.7,
  "editor.fastScrollSensitivity": 4,
  "editor.cursorSmoothCaretAnimation": "on",
  "editor.cursorBlinking": "smooth",
  "files.autoSave": "afterDelay",
  "explorer.confirmDelete": false,
  "explorer.confirmDragAndDrop": false,
  "javascript.updateImportsOnFileMove.enabled": "always",
  "claudeCode.preferredLocation": "panel",
  "typescript.updateImportsOnFileMove.enabled": "always",
  "editor.minimap.enabled": false,
  "workbench.editor.empty.hint": "hidden",
  "workbench.iconTheme": "material-icon-theme",
  "material-icon-theme.folders.theme": "specific",
  "editor.inlineSuggest.enabled": true,
  "editor.codeActionsOnSave": {
    "source.fixAll": "explicit"
  },
  "background.fullscreen": {
    "images": [
      // "/home/andev/Downloads/anime-girl-hand-fan-4k-wallpaper-uhdpaper.com-899@5@m.jpg"
    ],
    "opacity": 0.14,
    "size": "cover",
    "position": "center",
    "interval": 0,
    "random": false
  },

  // "workbench.colorCustomizations": {
  //   "editor.background": "#25253066",
  //   "editor.lineHighlightBackground": "#ffffff10",
  //   "editorCursor.foreground": "#ffffff",

  //   "sideBar.background": "#1e1e2a66",
  //   "activityBar.background": "#1a1a2466",
  //   "titleBar.activeBackground": "#1a1a2466",
  //   "titleBar.inactiveBackground": "#1a1a2444",
  //   "statusBar.background": "#1a1a2466",
  //   "panel.background": "#1e1e2a66",
  //   "terminal.background": "#1e1e2a44",

  //   "editorGroupHeader.tabsBackground": "#1e1e2a55",
  //   "tab.activeBackground": "#25253066",
  //   "tab.inactiveBackground": "#1e1e2a44",
  //   "tab.unfocusedActiveBackground": "#25253055",
  //   "tab.unfocusedInactiveBackground": "#1e1e2a33"
  // },

  "editor.tokenColorCustomizations": {
    "textMateRules": [
      {
        "scope": ["keyword"],
        "settings": {
          "foreground": "#c792ea"
        }
      },
      {
        "scope": ["entity.name.function", "support.function"],
        "settings": {
          "foreground": "#ffd866"
        }
      },
      {
        "scope": ["string"],
        "settings": {
          "foreground": "#a6e22e"
        }
      },
      {
        "scope": ["comment"],
        "settings": {
          "foreground": "#6a737d",
          "fontStyle": "italic"
        }
      },
      {
        "scope": ["variable"],
        "settings": {
          "foreground": "#82aaff"
        }
      },
      {
        "scope": ["constant.numeric"],
        "settings": {
          "foreground": "#f78c6c"
        }
      },
      {
        "scope": ["storage.type", "storage.modifier"],
        "settings": {
          "foreground": "#ffcb6b"
        }
      }
    ]
  },

  "editor.fontFamily": "JetBrains Mono, Fira Code",
  "editor.fontLigatures": true,
  "workbench.colorTheme": "cursor anysphere theme",
  "chat.viewSessions.orientation": "stacked"
}
*/