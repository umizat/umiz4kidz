import { Page } from "./page";

export default {
  title: "Components/Page",
  component: Page
};

const Template = props => <Page {...props} />;

export const Default = Template.bind({});

Default.args = {};