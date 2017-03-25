<?php

$frm_name  = "Admin";
$recepient = "omypshop@yandex.ru";
$sitename  = "Selfi";
$subject   = "Новая заявка с сайта \"$sitename\"";

$name = trim($_POST["name"]);
$phone = trim($_POST["phone"]);
$select = trim($_POST["select"]);
$color = trim($_POST["color"]);

$message = "
Форма: $formname <br>
Имя: $name <br>
Телефон: $phone <br>
Способ связи: $select <br>
Цвет: $color
";

mail($recepient, $subject, $message, "From: $frm_name <$email>" . "\r\n" . "Reply-To: $email" . "\r\n" . "X-Mailer: PHP/" . phpversion() . "\r\n" . "Content-type: text/html; charset=\"utf-8\"");
