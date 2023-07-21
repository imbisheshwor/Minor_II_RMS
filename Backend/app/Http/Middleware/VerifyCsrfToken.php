<?php

namespace App\Http\Middleware;

use Illuminate\Foundation\Http\Middleware\VerifyCsrfToken as Middleware;

class VerifyCsrfToken extends Middleware
{
    /**
     * The URIs that should be excluded from CSRF verification.
     *
     * @var array<int, string>
     */
    protected $except = [
        'api/product',
        'api/cart',
        'api/auth/login',
        'api/auth/register',
        'api/see-table-or-user-cart',
        'api/order',
    ];
}
