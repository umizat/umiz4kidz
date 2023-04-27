import { DerGrueneApfel } from "./derGrueneApfel";

export default {
  title: "Components/DerGrueneApfel",
  component: DerGrueneApfel
};

const Template = props => <DerGrueneApfel {...props} />;

export const Default = Template.bind({});

Default.args = {};