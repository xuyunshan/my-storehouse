export const FIXED_BOTTOM = {
  styleCandidates: ['top', 'right', 'bottom', 'left', 'width', 'height', 'zIndex'],
  defaultStyle: { position: 'fixed', bottom: 0 },
};

export const FIXED_ELEMENT = {
  styleCandidates: ['top', 'right', 'bottom', 'left', 'width', 'height'],
  defaultStyle: 'position: fixed;',
};

export const FIXED_TOP = {
  styleCandidates: ['top', 'right', 'bottom', 'left', 'width', 'height'],
  defaultStyle: { position: 'fixed', top: 0 },
};

export const HOT_AREA = {
  styleCandidates: ['top', 'right', 'bottom', 'left', 'width', 'height'],
  defaultStyle: { zIndex: 1000, position: 'absolute' },
};

export const IMAGE_TO_SAVE = {
  styleCandidates: ['top', 'right', 'bottom', 'left', 'width', 'height', 'background'],
  defaultStyle: { position: 'absolute' },
};

export const POP_RULE_ENTRANCE = {
  styleCandidates: ['top', 'right', 'bottom', 'left', 'width', 'height', 'position', 'zIndex'],
  defaultStyle: { backgroundSize: 'cover' },
};

export const SWIPER = {
  styleCandidates: ['top', 'right', 'bottom', 'left', 'width', 'height', 'zIndex'],
  defaultStyle: { position: 'absolute' },
};

export const VIDEO = {
  styleCandidates: ['width', 'left', 'right', 'top', 'bottom', 'borderRadius'], //height will goes will width
  defaultStyle: { position: 'absolute' },
};
export const HORIZONTAL_SCROLL = {
  styleCandidates: ['top', 'right', 'bottom', 'left', 'width', 'height', 'zIndex'],
  defaultStyle: { position: 'absolute', overflowX: 'scroll' },
};

export const VERTICAL_SCROLL = {
  styleCandidates: ['top', 'right', 'bottom', 'left', 'width', 'height', 'zIndex'],
  defaultStyle: { position: 'absolute', overflowY: 'scroll' },
};

export const SCROLL_ITEM = {
  styleCandidates: ['width', 'height', 'marginLeft', 'marginRight', 'marginTop', 'marginBottom'],
  defaultStyle: { backgroundSize: 'cover' },
};

export const INPUT = {
  styleCandidates: ['width', 'left', 'right', 'top', 'bottom'],
  defaultStyle: { position: 'absolute' },
};

export const COPY_TEXT = {
  styleCandidates: ['top', 'right', 'bottom', 'left', 'width', 'height'],
  defaultStyle: { position: 'absolute' },
};
