export default class Screen {
    get hue() {
        return parseFloat(getComputedStyle(document.documentElement).getPropertyValue('--hue'));
    }

    set hue(value) {
        document.documentElement.style.setProperty('--hue', value);
    }
}