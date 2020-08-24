<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the
 * installation. You don't have to use the web site, you can
 * copy this file to "wp-config.php" and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'live-33_blandine_wordpress' );

/** MySQL database username */
define( 'DB_USER', 'blandine' );

/** MySQL database password */
define( 'DB_PASSWORD', '4e2aadedNDA0ODE3MTg0NmExNzM0YmFjODlmYzNh90b73373' );

/** MySQL hostname */
define( 'DB_HOST', 'home.3wa.io:3307' );

/** Database Charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The Database Collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         '740aH.@86Ml[(|!eEIFf*>V.ASWGLk2_4B)??[c,V&DkJec2az4*@16[G7bx E#G' );
define( 'SECURE_AUTH_KEY',  'Tz`V  /%Ax)I(K6Nv*3T2R]6~~7+a~4Hej_=s(nu-LX1zVe/9dW{MJV75J)lTMA!' );
define( 'LOGGED_IN_KEY',    'e1VEjKOZ`EJ8?Fr/)!s8FZHah9==@z0nly@ ~lw;uc!!NL+i2okmd%-!Jco!<`<b' );
define( 'NONCE_KEY',        '@!E?nT{3de:1;P@/z(wI}U7|H0/Ey*8bQW1K8JIt&^1jM_Y1d}FP;XM-]c&`!nz^' );
define( 'AUTH_SALT',        '=g-Lv#P2,.hXdWL.c}wpV]M vr$32h8R0?IfQ.i;,OjYz!xq0<&ksNG:[<IL$Bpi' );
define( 'SECURE_AUTH_SALT', '.kuM!d8fm,an4oEj5T~O<}|DM,-<yYTj<;[$zNTuXNlfh@Bq@E>pGIkq]aa2/K2Y' );
define( 'LOGGED_IN_SALT',   'W_b%hQ/%-U/},@$1xz].9EAJhfaW//~fxnL:pT]pBsrW:}%u9:(Sep]%z.c5||-r' );
define( 'NONCE_SALT',       'zo/_F=`n&-#<i8]lb>mvQ|IVm]L]6:E#ubuDZ)ziY6V(^J:5*lM5^Z#.<EK ou=-' );

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/support/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );

/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
