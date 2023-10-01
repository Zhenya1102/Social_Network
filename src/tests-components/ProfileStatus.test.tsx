import React from 'react';
import {create} from 'react-test-renderer';
import {ProfileStatus} from '../componets/Profile/ProfileInfo/ProfileStatus';
import { updateStatusTC} from '../redux/profile-reducer';


describe('ProfileStatus Component', () => {
    test('status from props should be in the state', () => {
        const component = create(<ProfileStatus status={'social-network'} updateStatusTC={updateStatusTC} />);
        const rootInstance = component.root;
        // eslint-disable-next-line testing-library/await-async-query
        const spanElement = rootInstance.findByType('span');
        expect(spanElement.props.children.join('')).toBe('social-network: STATUS');
    });


    test('after creation <span> should be displayed', () => {
        const component = create(<ProfileStatus status={'social-network'} updateStatusTC={updateStatusTC} />);
        const root = component.root;
        // eslint-disable-next-line testing-library/await-async-query
        const span = root.findByType('span');
        expect(span).not.toBeNull()
    });

    test('after creation <input> should be displayed', () => {
        const component = create(<ProfileStatus status={'social-network'} updateStatusTC={updateStatusTC} />);
        const root = component.root;
        // eslint-disable-next-line testing-library/await-async-query,jest/valid-expect
        expect(()=> {
            // eslint-disable-next-line testing-library/await-async-query
            const input = root.findByType('input')
        }).toThrow()

    });
});

