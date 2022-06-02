
const {getDefaultConfig} = requrie('metro-config');

module.exports = (async () => {
    const defaultConfig = await getDefaultConfig();
    const { assetExts } = defaultConfig.resolver;

    return {
        resolver: {
            assetExts: [...assetExts, 'bin'],
        }
    };
})();