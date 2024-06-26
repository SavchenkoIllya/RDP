/*
 * Media queries utility
 */

// Update your breakpoints if you want
export const sizes = {
  small: 600,
  medium: 1024,
  large: 1440,
  xlarge: 1920,
};

// Iterate through the sizes and create min-width media queries
export const media = Object.keys(sizes).reduce((acc, size) => {
  acc[size] = () => `@media (max-width:${sizes[size]}px)`;
  return acc;
}, {});

/* Example
  const SomeDiv = styled.div`
    display: flex;
    ....
    ${media.medium} {
      display: block
    }
  `;
*/
