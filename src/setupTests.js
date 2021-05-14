import "regenerator-runtime/runtime";
import { Provider } from "react-redux";
import createStore from "./store/index";
import { configure, shallow } from "enzyme";
import { createSerializer } from "enzyme-to-json";
import Adapter from "enzyme-adapter-react-16";

const store = createStore();

expect.addSnapshotSerializer(createSerializer({ mode: "deep" }));
configure({ adapter: new Adapter() });

global.shallow = shallow;

export const TestProvider = ({ children }) => {
  return <Provider store={store}>{children}</Provider>;
};
