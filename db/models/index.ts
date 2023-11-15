import Block from './Block';
import Brand from './Brand';
import Category from './Category';
import Video from './Video';
import User from './User';

Brand.hasMany(Video);
Video.belongsTo(Brand);

Category.hasMany(Video);
Video.belongsTo(Category);

export { Block, Brand, Category, Video, User };
