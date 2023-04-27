import { Book } from "./book";

export default {
  title: "Components/Book",
  component: Book
};

const Template = props => <Book {...props} />;

export const Default = Template.bind({});

Default.args = {};