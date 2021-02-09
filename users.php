<?php

//$php_array=  json_decode($_POST["users"],true);

//print_r($_POST["users"]);

ob_start();
?>
<h3>Kullanıcılar</h3>

<?php foreach ($_POST["users"] as $user): ?>

    <h5><?php echo $user ?> </h5>

<?php endforeach;

$html = ob_get_clean();
echo $html;

?>


