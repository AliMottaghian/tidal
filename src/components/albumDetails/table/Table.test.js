import Table from "./Table";

describe("<Table />", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(
      <Table
        tracks={[
          { title: "test1", artist: { name: "artist name1" }, duration: 300 },
          { title: "test2", artist: { name: "artist name2" }, duration: 500 },
        ]}
      />
    );
  });
  it("should render Table component without crashing", () => {
    expect(wrapper).toMatchSnapshot();
  });
  it("should render render three <tr>", () => {
    const tableRow = wrapper.find("tr");
    expect(tableRow).toHaveLength(3);
  });
});
