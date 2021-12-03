import { mount, shallowMount } from "@vue/test-utils";
import App from "@/App.vue";

describe("App.vue", () => {
  it("Renders correctly", () => {
    const wrapper = mount(App);
    expect(wrapper.text()).toMatch("I want inspiration");
    expect(wrapper.text()).toMatch("I want the truth");
  });
});
