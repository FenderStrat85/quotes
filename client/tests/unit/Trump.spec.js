import { mount } from "@vue/test-utils";
import Trump from "@/components/Trump.vue";
import apiService from "../../src/services/apiService";

describe("Trump.vue component", () => {
  it("On click will call api service", async () => {
    const spyApiCall = jest.spyOn(apiService, "getTrumpQuote");
    const wrapper = mount(Trump);
    await wrapper.get("button").trigger("click");
    expect(spyApiCall).toHaveBeenCalledTimes(1);
  });
});
