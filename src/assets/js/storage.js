const storage = window.localStorage;

export default {
  set(key, val) {
    if (val === undefined) {
      return;
    }
    storage.setItem(key, serialize(val));//序列化变成字符串
  },
  get(key, def) {
    const val = deserialize(storage.getItem(key));//反序列化
    return val === undefined ? def : val;
  },
  remove(key) {
    storage.removeItem(key);
  },
  clear() {
    storage.clear();
  }
};

function serialize(val) {
  return JSON.stringify(val);
}

function deserialize(val) {
  if (typeof val !== 'string') {
    return undefined;
  }
  try {
    return JSON.parse(val);
  } catch (e) {
    return val || undefined;
  }
}
