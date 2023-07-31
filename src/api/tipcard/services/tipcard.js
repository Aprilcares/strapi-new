'use strict';

/**
 * tipcard service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::tipcard.tipcard');
