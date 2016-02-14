<?php

namespace Roots\Sage\Extras;

use Roots\Sage\Setup;

/**
 * Add <body> classes
 */
function body_class($classes) {
  // Add page slug if it doesn't exist
  if (is_single() || is_page() && !is_front_page()) {
    if (!in_array(basename(get_permalink()), $classes)) {
      $classes[] = basename(get_permalink());
    }
  }

  // Add class if sidebar is active
  if (Setup\display_sidebar()) {
    $classes[] = 'sidebar-primary';
  }

  return $classes;
}
add_filter('body_class', __NAMESPACE__ . '\\body_class');

/**
 * Clean up the_excerpt()
 */
function excerpt_more() {
  return ' &hellip; <a href="' . get_permalink() . '">' . __('Continued', 'sage') . '</a>';
}
add_filter('excerpt_more', __NAMESPACE__ . '\\excerpt_more');


/*
 * => Allow field visibility options in Gravity Forms
 * ---------------------------------------------------------------------------*/
if ( defined( 'GRAVITY_MANAGER_URL' ) ) {
  add_filter( 'gform_enable_field_label_visibility_settings', '__return_true' );
}


/*
 * => REMOVE PLUGIN ASSETS (and include in Manifest.json for less http req.)
 * ---------------------------------------------------------------------------*/
function remove_plugin_assets() {
  // Cornerstone Plugin (icon fonts won't work if we do this. Commenting out for now.)
  //wp_dequeue_style('cornerstone-shortcodes');      // cornerstone/assets/css/site/style.css
  //wp_dequeue_script('cornerstone-site-head');      // cornerstone/assets/js/dist/site/cs-head.min.js
  //wp_dequeue_script('cornerstone-site-body');      // cornerstone/assets/js/dist/site/cs-body.min.js
  
}
// add_action( 'wp_enqueue_scripts', __NAMESPACE__ . '\\remove_plugin_assets', 101);