// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.

// Image layout values must stay in sync with sass/utils/_variables.scss.
export const OPEN_GRAPH_THUMBNAIL_SIZE = 80; // needs to match `$open-graph-thumbnail-size` in sass/utils/_variables.scss
export const OPEN_GRAPH_MAX_IMAGE_WIDTH = 392; // needs to match `$open-graph-max-image-width` in sass/utils/_variables.scss
export const OPEN_GRAPH_MAX_IMAGE_HEIGHT = 240; // needs to match `$open-graph-max-image-height` in sass/utils/_variables.scss

export const OPEN_GRAPH_NEAREST_POINT_IMAGE = {
    height: OPEN_GRAPH_THUMBNAIL_SIZE,
    width: OPEN_GRAPH_THUMBNAIL_SIZE,
};

export const OPEN_GRAPH_LARGE_IMAGE_RATIO = 4 / 3;
export const OPEN_GRAPH_LARGE_IMAGE_MIN_WIDTH = 150;
