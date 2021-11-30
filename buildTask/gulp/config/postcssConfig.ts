import rucksack from 'rucksack-css';
import autoprefixer from 'autoprefixer';

export default {
  plugins: [
    rucksack(),
    autoprefixer({
      browsers: [
        'last 2 versions',
        'Firefox ESR',
        '> 1%',
        'ie >= 9',
        'iOS >= 8',
        'Android >= 4',
      ],
    }),
  ],
};
