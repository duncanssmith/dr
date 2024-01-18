<?php

include 'page000.php';
include 'page001.php';

// $products = array_merge($cadenzas, $scales);

$page000Json = json_encode($page000);
$page001Json = json_encode($page001);
// $productsJson = json_encode($products);

$files = [
    'page000.json' => $page000Json,
    'page001.json' => $page001Json,
    // 'products.json' => $productsJson,
];

foreach ($files as $fname => $fval) {
    // echo "opening file $fname\n";
    $f = fopen($fname, 'w') or die("Can't open $fname for writing");
    // echo "writing file $fname\n";
    fprintf($f, $fval);
    // echo "closing file $fname\n";
    fclose($f);
}

echo "done\n";