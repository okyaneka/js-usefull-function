function pagination({ current, total, visibled }) {
  let pageRange = [];
  if (total > visibled) {
    pageRange = new Array(visibled);
    pageRange = pageRange.fill(0).map((val, i) => {
      const mid = Math.floor(visibled / 2);
      const range = visibled - 2;
      const last = visibled - 1;

      if (current > range && current < total - mid) {
        switch (i) {
          case 0:
            return current > range ? 'less' : i + current - mid;
          case last:
            return current < total - mid ? 'more' : i + current - mid;
          default:
            return i + current - mid;
        }
      }

      if (current <= range) {
        return i == last ? 'less' : i + 1;
      }

      if (current >= total - mid) {
        return i == 0 ? 'more' : i + total - last;
      }
    });
  } else {
    pageRange = new Array(total);
    pageRange = pageRange.fill(0).map((val, i) => i + 1);
  }

  return pageRange;
}

module.exports = { pagination };
