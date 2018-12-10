import svg from 'svg.js';
export default class Logo {
    constructor(element) {
        console.log('Create!');
        const draw = SVG(element).size(300, 300)
        const rect = draw.rect(100, 100).attr({ fill: '#f06' })
    }
}