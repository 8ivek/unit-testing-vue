import MessageDisplay from "@/components/MessageDisplay.vue";
import {mount} from '@vue/test-utils';
import {getMessage} from '@/services/axios';
import flushPromises from 'flush-promises'

jest.mock('@/services/axios');

beforeEach(() => {
    jest.clearAllMocks()
});

describe('MessageDisplay.vue', () => {
    it('Calls getMessage and displays message', async () => { // Mock the api call
        const mockMessage = 'Hello from the db!';
        getMessage.mockResolvedValueOnce({text: mockMessage});

        const wrapper = mount(MessageDisplay);

        // wait for promise to resolve
        await flushPromises()

        // check that call happned once
        expect(getMessage).toHaveBeenCalledTimes(1);

        // check that component displays message
        const message = wrapper.find('[data-testid="message"]').element.textContent;
        expect(message).toEqual(mockMessage);

    })

    it('Displays an error when getMessage call fails', async () => { // Mock the api call
        const mockError = 'Opps! Something went wrong.';
        getMessage.mockRejectedValueOnce(mockError);

        const wrapper2 = mount(MessageDisplay);

        // wait for promise to resolve
        await flushPromises()

        // check that call happned once
        expect(getMessage).toHaveBeenCalledTimes(1);

        // check that component displays message
        const error = wrapper2.find('[data-testid="message-error"]').element.textContent;
        expect(error).toEqual(mockError);
    })
})
