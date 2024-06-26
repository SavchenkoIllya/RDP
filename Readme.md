05.10.23

Reworks:

- Reworked navigation system, now two main parameters page and leaksId regulate navigation workflow. Mostly by conditional rendering in Slivs file.
- Carousel now is spread by several utils that lies in "utils" folder. Also have done optimizations and user experience improvements.

Features:

- Added event listener that doesn't allow to open context window all over the SPA.
- React Helmet added.

Styling:

- Line now is before or after element, main styling is in variables.
- Updated scrollbar sizing in index.css.
- Disabled touch events in buttons, header.
- Fully restyled pagination.
- Some restyles in SlivCards component.

---

05.10.23 vol 2

Features:

- Swipe detection added on carousel.

Styling:

- Carousel mobile fixes.

Other:

- Layout optimizations in Carousel sub-components.

---

05.10.23 vol 3

Changes:

- Added sorting by publication date.

---

12.10.23

Features:

- Added modal window to carousel.
- Added zooming in modal.
- Added picture downloading by icon clicking.

---

15.10.23

Bug fixes:

- Fixed link on download in modal window;
- Fixed swiping in modal window;

---

16.10.23

Reworks:

- Small code in modal optimizations and swipe sensitivity increased.

13.12.23

Reworks:
- Change react-helmet into react-helmet-async

---

07.01.24

Reworks:
 - Major components rework, added animation library framer motion: documentation you can find here (https://www.framer.com/motion/introduction/)

Added:
 - RTK
 - Craco for simplifying imports (https://craco.js.org/docs/getting-started/).
