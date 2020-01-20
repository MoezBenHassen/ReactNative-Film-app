<?php
echo "<h1>Formulaire de modification</h1>";
include 'GestionClient.php';
$tab=$g->RecupererClient($_GET['cin']);


?>
<html>
<head>
    <title></title>
</head>
<body>
<form method="get" action="GestionClient.php">
    <table>

        <tr>
            <td><input type="hidden" name="cin" value="<?php echo $tab[5] ?>"></td>
        </tr>

        <tr>
            <td>Cin:</td><td><input type="text" required placeholder="cin" name="cin" value="<?php echo $tab['cin']?>"></td>
        </tr>
       
        <tr>
            <td>Nom:</td><td><input type="text" required placeholder="nom" name="nom" value="<?php echo $tab['nomc']?>"></td>
        </tr>
        <tr>
            <td>Prenom:</td><td><input type="text" required placeholder="prenom" name="prenom" value="<?php echo $tab['prenomc']?>"></td>
        </tr>
        <tr>
            <td>Adresse:</td><td><input type="text" required placeholder="adresse" name="adresse" value="<?php echo $tab['adressec']?>"></td>
        </tr>
        <tr>
            <td>Telephone:</td><td><input type="text" required placeholder="tel" name="tel" value="<?php echo $tab['telc']?>"></td>
        </tr>
        <tr>
            <td>E-mail:</td><td><input type="text" required placeholder="mail" name="mail" value="<?php echo $tab['mailc']?>"></td>
        </tr>
        <tr>
            <td>Age:</td><td><input type="text" required placeholder="age" name="age" value="<?php echo $tab['agec']?>"></td>
        </tr>
        <tr><td><input type="submit" value="modifier" name="modifier"></td></tr>
    </table>

</form>

</body>
</html>