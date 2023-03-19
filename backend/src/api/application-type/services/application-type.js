'use strict';

/**
 * application-type service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::application-type.application-type');
