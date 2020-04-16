import AppHeader from "@/components/AppHeader.vue";
import {mount} from '@vue/test-utils';

describe("AppHeader.vue", () => {
  it("If user is not logged in do not show logout button", () => {
    const wrapper = mount(AppHeader);
    expect(wrapper.find('button').isVisible()).toBe(false);
  });

  it("If user is logged in show logout button", async () => {
    const wrapper = mount(AppHeader);
    wrapper.setData({loggedIn: true});
    await wrapper.vm.$nextTick();
    expect(wrapper.find('button').isVisible()).toBe(true);
  });
});