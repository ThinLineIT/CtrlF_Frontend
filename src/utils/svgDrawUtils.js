export function mediumSvgDrawer(SVG_MEDIUM) {
  if (SVG_MEDIUM.length != 0) {
    for (let SVG of SVG_MEDIUM) {
      SVG.setAttribute('viewBox', '0 0 282 320');
      const POLYGON_MEDIUM = SVG.getElementsByTagName('polygon');
      const POLYLINE_MEDIUM = SVG.getElementsByTagName('polyline');
      POLYGON_MEDIUM[0].setAttribute(
        'points',
        '0 0 0 319 259 319 259 296 282 296 282 0 0 0'
      );
      POLYGON_MEDIUM[1].setAttribute(
        'points',
        '0 0 0 319 259 319 259 296 282 296 282 0 0 0'
      );
      POLYLINE_MEDIUM[0].setAttribute('points', '259 319 259 296 282 296');
    }
  }
}

export function largeSvgDrawer(SVG_LARGE) {
  if (SVG_LARGE.length != 0) {
    for (let SVG of SVG_LARGE) {
      SVG.setAttribute('viewBox', '0 0 282 440');
      const POLYGON_LARGE = SVG.getElementsByTagName('polygon');
      const POLYLINE_LARGE = SVG.getElementsByTagName('polyline');
      POLYGON_LARGE[0].setAttribute(
        'points',
        '0 0 0 432 259 432 259 409 282 409 282 0 0 0'
      );
      POLYGON_LARGE[1].setAttribute(
        'points',
        '0 0 0 432 259 432 259 409 282 409 282 0 0 0'
      );
      POLYLINE_LARGE[0].setAttribute('points', '259 432 259 409 282 409');
    }
  }
}

export function extraSvgDrawer(SVG_EXTRA) {
  if (SVG_EXTRA.length != 0) {
    for (let SVG of SVG_EXTRA) {
      SVG.setAttribute('viewBox', '0 0 282 550');
      const POLYGON_EXTRA = SVG.getElementsByTagName('polygon');
      const POLYLINE_EXTRA = SVG.getElementsByTagName('polyline');
      POLYGON_EXTRA[0].setAttribute(
        'points',
        '0 0 0 544 259 544 259 521 282 521 282 0 0 0'
      );
      POLYGON_EXTRA[1].setAttribute(
        'points',
        '0 0 0 544 259 544 259 521 282 521 282 0 0 0'
      );
      POLYLINE_EXTRA[0].setAttribute('points', '259 544 259 521 282 521');
    }
  }
}

export function smallSvgDrawer(SVG_SMALL) {
  if (SVG_SMALL.length != 0) {
    for (let SVG of SVG_SMALL) {
      SVG.setAttribute('viewBox', '0 0 282 220');
      const POLYGON_SMALL = SVG.getElementsByTagName('polygon');
      const POLYLINE_SMALL = SVG.getElementsByTagName('polyline');
      POLYGON_SMALL[0].setAttribute(
        'points',
        '0 0 0 207 259 207 259 184 282 184 282 0 0 0'
      );
      POLYGON_SMALL[1].setAttribute(
        'points',
        '0 0 0 207 259 207 259 184 282 184 282 0 0 0'
      );
      POLYLINE_SMALL[0].setAttribute('points', '259 207 259 184 282 184');
    }
  }
}
