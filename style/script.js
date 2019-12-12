// Author Corentin Minne
// Date 29 Oct. 2019

$(document).ready(function() {
    // all custom jQuery will go here
    'use strict';

    $('.progress').bind('inview', function (event, visible, visiblePartX, visiblePartY) {
        if (visible) {
            $.each($(this).find(".progress-bar"), function () {
                $(this).css('width', $(this).attr('aria-valuenow') + '%');
            });
            $(this).unbind('inview');
        }
    });

    $('#me-svg').bind('inview', function (event, visible, visiblePartX, visiblePartY) {
        if (visible) {
            $.each($(this).find('svg'), function () {
                $(this).css('visibility', 'visible');
                $(this).addClass('start');
            });
            $(this).unbind('inview');
        }
    });
});