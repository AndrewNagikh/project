import { classNames } from './classNames';

describe('classNames', () => {
    test('witch first param', () => {
        expect(classNames('someClass')).toBe('someClass');
    });
    test('witch add param', () => {
        expect(classNames('someClass', {}, ['class1', 'class2', 'class3']))
            .toBe('someClass class1 class2 class3');
    });
    test('witch mode param', () => {
        expect(classNames('someClass', { hovered: true, scrolabble: true }, []))
            .toBe('someClass hovered scrolabble');
    });
    test('witch mode false param', () => {
        expect(classNames('someClass', { hovered: true, scrolabble: false }, []))
            .toBe('someClass hovered');
    });
    test('witch mode undefined param', () => {
        expect(classNames('someClass', { hovered: true, scrolabble: undefined }, []))
            .toBe('someClass hovered');
    });
});
