<?php
/**
 * Plugin Name:       Prueba Plugin
 * Description:       Plugin de prueba para ClaroSports y UnoTV
 * Requires at least: 6.1
 * Requires PHP:      7.0
 * Version:           0.1.0
 * Author:            Valeria Garcia
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       pruebaplugin
 *
 * @package           create-block
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

function pruebaplugin_pruebaplugin_block_init() {
    if (is_admin() && (isset($_GET['post']) || isset($_POST['post_ID']))) {
        $post_id = isset($_GET['post']) ? $_GET['post'] : $_POST['post_ID'];
        $post_type = get_post_type($post_id);

        if ($post_type === 'post') {
            register_block_type(__DIR__ . '/build');
        }
    }
}
add_action('init', 'pruebaplugin_pruebaplugin_block_init');
?>
