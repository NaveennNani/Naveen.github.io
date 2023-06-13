let color = 'blue';

switch (color) {
    case 'red':
    case 'green':
    case 'blue':
        console.log('Color is red, green or blue');
        break;
    case 'purple':
    case 'yellow':
    case 'pink':
        console.log('Color is purple, yellow or pink');
        break;
    default:
        console.log('No color matched');
        break;
}