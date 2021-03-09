import GlobalStyles from '../src/pages/styles/global'



export const decorators = [
  (Story) => (
    <>
      <GlobalStyles />
      <Story />
    </>
  ),
];


