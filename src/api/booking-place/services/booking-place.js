'use strict';

/**
 * booking-place service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::booking-place.booking-place');
