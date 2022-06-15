const assert = require('assert');
const { pagination } = require('./functions');

describe('Pagination test', function () {
  describe('using: current = 5; total = 10; visibled = 5', function () {
    it('should return ["less", 4, 5, 6, "more"]', function () {
      const pages = pagination({ current: 5, total: 10, visibled: 5 });
      const result = ['less', 4, 5, 6, 'more'].every((v, i) => {
        return pages[i] == v;
      });
      assert.ok(result);
    });
  });
});
