<?php
include 'param.php';
include 'Client.php';
ini_set("xdebug.var_display_max_children", -1);
ini_set("xdebug.var_display_max_data", -1);
ini_set("xdebug.var_display_max_depth", -1);
class GestionClient
{
    
    public $pdo;
    function __construct()
    {
        $c = new config();
        $this->pdo = $c->connexion();
    }
    function ajoutClient($e)
    {
        $req = "INSERT INTO `client`( `nomc`, `prenomc`, `adressec`, `telc`, `mailc`, `cin`, `agec`) VALUES
        ('" . $e->getNom() . "','" . $e->getPrenom() . "','" . $e->getAdresse() . "','" . $e->getTel() . "','" . $e->getMail() . "','" . $e->getCin() . "','" . $e->getAge() . "')";
        $this->pdo->query($req);
    }
    function affichage()
    {
        $req = "select * from client ";
        $res = $this->pdo->query($req);
        return $res->fetchAll();
    }
    function affichageJson()
    {   
        
        $sql="select * from client";
        $result = $this->pdo->query($sql);
        $rows = $result->fetchAll(PDO::FETCH_ASSOC);
       //echo json_encode($rows);
        return $rows;
    }
    function supprimer($cin)
    {
        $req = "delete from client where cin=$cin";
        $this->pdo->query($req);
    }
    function RecupererClient($cin)
    {
        $req = "select * from client where cin='$cin'";
        $res = $this->pdo->query($req);
        return $res->fetch();
    }

    function ModifierClient($e, $cin)
    {
        $req = "UPDATE `client` SET 
        `nomc`='" . $e->getNom() . "',
        `prenomc`='" . $e->getPrenom() . "',
        `adressec`='" . $e->getAdresse() . "',
        `telc`='" . $e->getTel() . "',
        `mailc`='" . $e->getMail() . "',
        `cin`='" . $e->getCin() . "',
        `agec`='" . $e->getAge() . "'
        WHERE cin='$cin'";
        $this->pdo->query($req);
    }
}


$g = new GestionClient();
if (isset($_GET['ajout'])) {
    $e = new Client($_GET['nom'], $_GET['prenom'], $_GET['age'], $_GET['adresse'], $_GET['tel'], $_GET['mail'], $_GET['cin']);
    $g->ajoutClient($e);
} else if (isset($_GET['afficheJson'])) {
    echo json_encode($g->affichageJson(), JSON_PRETTY_PRINT);
} else if (isset($_GET['affiche'])) {
    echo "<h1>page d'affichage</h1>";
    $tab = $g->affichage();
   
?>
    <form method="post" action="GestionClient.php">
        <table border="1">
            <tr>
                <td>Nom</td>
                <td>prenom</td>
                <td>Adresse</td>
                <td>Telephone</td>
                <td>E-mail</td>
                <td>cin</td>
                <td>Age</td>
                <td>chose</td>
            </tr>
            <?php
            foreach ($tab as $i) {
                echo "<tr>";
                echo "<td>" . $i['nomc'] . "</td>";
                echo "<td>" . $i[1] . "</td>";
                echo "<td>" . $i[2] . "</td>";
                echo "<td>" . $i[3] . "</td>";
                echo "<td>" . $i[4] . "</td>";
                echo "<td>" . $i[5] . "</td>";
                echo "<td>" . $i[6] . "</td>";

            ?>

                <td><input type="radio" name="supp" value="<?php echo $i['cin'] ?>"></td>
                <td><a href="ModifierClient.php?cin=<?php echo $i['cin'];  ?>">modifier ici</a> </td>

            <?php
                echo "</tr>";
            }
            ?>
        </table>
        <input type="submit" value="supprimer" name="supprimer">
    </form>
<?php

} else if (isset($_POST['supprimer'])) {

    $g->supprimer($_POST['supp']);
    header('location:AjoutClient.html');
} else if (isset($_GET['modifier'])) {
    $cin = $_GET['cin'];
    echo $cin;
    $e = new Client($_GET['nom'], $_GET['prenom'], $_GET['age'], $_GET['adresse'], $_GET['tel'], $_GET['mail'], $_GET['cin']);
    $g->ModifierClient($e, $cin);
    header('location:AjoutClient.html');
}
