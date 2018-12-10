import Logo from './logo';

if (module.hot) {
    module.hot.accept('./logo', () => {
        console.log('Accepting the updated uilab-logo module!');
    });
}

window.UilabLogo = Logo;
export default Logo;