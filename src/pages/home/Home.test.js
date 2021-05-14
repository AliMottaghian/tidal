import Home from "./Home";
import { TestProvider } from "../../setupTests";

describe("<Home />", () => {
  const wrapper = shallow(
    <TestProvider>
      <Home />
    </TestProvider>
  );
  it("should render Home component without crashing", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
