import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import Modal from './Modal';

export default {
    title: 'shared/Modal',
    component: Modal,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    args: {
        to: '/',
    },
} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = (args) => <Modal {...args} />;

export const ModalComp = Template.bind({});
ModalComp.args = {
    open: true,
    // eslint-disable-next-line max-len
    children: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia culpa amet perspiciatis nihil atque quibusdam totam harum, beatae unde temporibus, asperiores accusantium doloremque quo iusto ducimus excepturi eos? Molestiae nemo aut iste adipisci reprehenderit nihil libero neque quas fugit esse, autem maxime facere, expedita debitis at amet quia hic recusandae modi totam eum. Possimus quod repudiandae delectus maiores facere optio deserunt placeat, laudantium dolorem totam, neque sunt minus? Quo aliquam delectus odit, tempore distinctio laborum velit ratione cum totam sapiente nam inventore, quisquam voluptas molestiae! Assumenda, pariatur earum, sint reprehenderit, quaerat ea accusamus aut nihil ipsum culpa ratione illum totam!',
};
