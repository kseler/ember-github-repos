import JSONAPISerializer from '@ember-data/serializer/json-api';
import { camelize } from '@ember/string';
import { guidFor } from '@ember/object/internals';

export default class ApplicationSerializer extends JSONAPISerializer {
  normalizeArrayResponse(store, primaryModelClass, payload) {
    payload = payload.map((item) => ({
      id: item.id ?? guidFor(item),
      type: primaryModelClass.modelName,
      attributes: this._normalizeItem(item),
    }));

    return { data: payload };
  }

  _normalizeItem(item) {
    let normalizedItem = {};

    for (let key in item) {
      let camelizedKey = this.keyForAttribute(key);
      normalizedItem[camelizedKey] = item[key];
    }
    return normalizedItem;
  }

  keyForAttribute(attr) {
    return camelize(attr);
  }
}
