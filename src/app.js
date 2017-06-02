import css from './app.scss';

// 
if (process.env.NODE_ENV !== 'production') {
  require('file-loader!./index.ejs');
}
