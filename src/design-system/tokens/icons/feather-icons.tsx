import feather from 'feather-icons';
import { camelCase } from 'change-case';

const mapped = {};

for (let [key, value] of Object.entries(feather.icons)) {
  const _attrs = feather.icons[key].attrs;

  mapped[key] = value;

  mapped[key].attrs = {};

  Object.keys(_attrs).forEach(k => {
    if (k === 'class') {
      return;
    }

    mapped[key].attrs[camelCase(k)] = _attrs[k];
  });
}

export default mapped;
