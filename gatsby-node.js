    
const axios = require('axios');


exports.createPages = async ({ actions: { createPage } }) => {
    console.log('============================================================');
    console.log('============================================================');
    console.log('============================================================');
    console.log('============================================================');

    throw new Error("rtrersddf")

    const testGroup = await axios.get(`http://www.mocky.io/v2/5cb256b83000005400a78c66`);

    createPage({
        path: `/content-group`,
        component: require.resolve('./src/templates/content-group.js'),
        context: { testGroup }
    });
    

    // Create a page for each item on content area 2
    const contentArea2Posts = testGroup.contentAreas[1].posts;
    contentArea2Posts.forEach(item => {
        createPage({
            path: `/area-2/${item.postId}/`,
            component: require.resolve('./src/templates/item-area.js'),
            context: { item }
        });
    });
}