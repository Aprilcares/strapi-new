'use strict';

/**
 * zine service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::zine.zine');
