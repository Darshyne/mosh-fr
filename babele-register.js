Hooks.once('setup', () => {
    if (game.babele) {
        game.babele.register({
            module: 'mosh-fr',
            lang: 'fr',
            dir: 'compendium'
        });
    }
});
