export const FIXED_BOTTOM = {
  styleCandidates: ['top', 'right', 'bottom', 'left', 'width', 'height', 'z-index'],
  defaultStyle: 'position: fixed; bottom: 0;',
};

export const FIXED_ELEMENT = {
  styleCandidates: ['top', 'right', 'bottom', 'left', 'width', 'height'],
  defaultStyle: 'position: fixed;',
};

export const FIXED_TOP = {
  styleCandidates: ['top', 'right', 'bottom', 'left', 'width', 'height'],
  defaultStyle: 'position: fixed; top: 0;',
};

export const HOT_AREA = {
  styleCandidates: ['top', 'right', 'bottom', 'left', 'width', 'height'],
  defaultStyle: 'z-index: 1000; position: absolute;',
};

export const IMAGE_TO_SAVE = {
  styleCandidates: ['top', 'right', 'bottom', 'left', 'width', 'height', 'background', 'z-index'],
  defaultStyle: 'position: absolute;',
};

export const POP_RULE_ENTRANCE = {
  styleCandidates: ['top', 'right', 'bottom', 'left', 'width', 'height', 'position', 'z-index'],
  defaultStyle: 'background-size:cover;',
};

export const POP_IMAGE_RULE = {
  styleCandidates: ['width', 'height'],
  defaultStyle: '',
};

export const SWIPER = {
  styleCandidates: ['top', 'right', 'bottom', 'left', 'width', 'height'],
  defaultStyle: 'position: absolute;',
};

// one horizontal line of content
export const HORIZONTAL_SCROLL = {
  styleCandidates: ['top', 'right', 'bottom', 'left', 'width', 'height', 'z-index'],
  defaultStyle: 'position: absolute;',
};

export const HORIZONTAL_SCROLL_INTERNAL = {
  styleCandidates: [],
  defaultStyle:
    'position:absolute; top:0;left:0;display:flex; align-items:center; justify-content:space-between;',
};

export const VERTICAL_SCROLL = {
  styleCandidates: ['top', 'right', 'bottom', 'left', 'width', 'height', 'z-index'],
  defaultStyle: 'position: absolute;',
};

export const SCROLL_ITEM = {
  styleCandidates: [
    'width',
    'height',
    'margin-left',
    'margin-right',
    'margin-top',
    'margin-bottom',
  ],
  defaultStyle: '',
};

export const VIDEO = {
  styleCandidates: ['width', 'height', 'left', 'right', 'top', 'bottom', 'border-radius'], //height will goes will width
  defaultStyle: 'position:absolute;',
};

export const INPUT = {
  styleCandidates: ['width','left', 'right', 'top', 'bottom'],
  defaultStyle: 'position:absolute;',
}

export const COPY_TEXT = {
  styleCandidates: ['top', 'right', 'bottom', 'left', 'width', 'height'],
  defaultStyle: 'position: absolute;',
}
