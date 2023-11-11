import AboutParagraph from './AboutParagraph';
import Brand from './Brand';
import Category from './Category';
import Video from './Video';

Brand.hasMany(Video);
Video.belongsTo(Brand);

Category.hasMany(Video);
Video.belongsTo(Category);
// Brand.hasMany(Video, {
//   foreignKey: 'brand',
// });
// Video.belongsTo(Brand);

// Category.hasMany(Video, {
//   foreignKey: 'category',
// });
// Video.belongsTo(Category);

export { AboutParagraph, Brand, Category, Video };
