import LoginForm from "@/components/LoginForm.vue";
import {mount} from '@vue/test-utils';

describe("LoginForm.vue", () => {
  it("emits an event with a user data payload", () => {
    const wrapper = mount(LoginForm);
    // Find text input
    // normal way
    const input_normal = wrapper.find('input[type="text"');

    // using data-testid
    const input_data_test = wrapper.find('[data-testid="name-input"]');

    // set value for text input
    input_data_test.setValue('Bivek Joshi');

    // simulate form submission
    wrapper.trigger('submit');

    // assert event has been emitted
    const formSubmittedCalls = wrapper.emitted('formSubmitted');
    expect(formSubmittedCalls).toHaveLength(1);

    // assert payload is correct
    const expectedPayload = {name: 'Bivek Joshi'};
    expect(wrapper.emitted('formSubmitted')[0][0]).toMatchObject(expectedPayload);
  });
});