<?php
try {
    include 'connection.php';
    $c = new config();
    $conn = $c->connexion();
    $method_name = $_SERVER["REQUEST_METHOD"];
    if ($_SERVER["REQUEST_METHOD"]) {

        switch ($method_name) {
            case 'GET':
               /* MYSQLI WAY
                $qry = "SELECT * from product";
                $result = mysqli_query($conn, $qry);
                */
            // My function
                $sql="SELECT * FROM product";
                $result = $conn->query($sql);
                $rows = $result->fetchAll(PDO::FETCH_ASSOC);
            // </> My function

                /* MYSQLI WAY
                while ($row = mysqli_fetch_row($result)) {
                    $temp_cat[] = array("product_id" => $row[0], "product_name" => $row[1], "product_price" => $row[2], "product_qty" => $row[3]);
                }
                */
                $data = array("status" => "1", "message" => "success", "result" => $rows);
                break;

            case 'POST':

                $name = $_REQUEST['product_name'];
                $price = $_REQUEST['product_price'];
                $qty = $_REQUEST['product_qty'];
                $qry = "INSERT INTO product(product_name,product_price,product_qty) values('$name','$price','$qty')";
                $result=$conn->query($qry);
                if ($result) {
                    $data = array("status" => "1", "message" => "success", "result" => "Product add successfully");
                } else {
                    $data = array("status" => "1", "message" => "success", "result" => "Something wrong!!!");
                }
                break;

            case 'PUT':
                $id = $_REQUEST['product_id'];
                $name = $_REQUEST['product_name'];
                $price = $_REQUEST['product_price'];
                $qty = $_REQUEST['product_qty'];
                $qry = "UPDATE product SET product_name='" . $name . "', product_price='" . $price . "',product_qty='" . $qty . "' where product_id='" . $id . "' ";
                $result=$conn->query($req);
                if ($result) {
                    $data = array("status" => "1", "message" => "success", "result" => "Product Update successfully");
                } else {
                    $data = array("status" => "1", "message" => "success", "result" => "Something wrong!!!");
                }
                break;

            case 'DELETE':
                $id = $_REQUEST['product_id'];
                $qry = "delete from product where product_id='" . $id . "'";
                $result=$conn->query($qry);
                if ($result) {
                    $data = array("status" => "1", "message" => "success", "result" => "Product Update successfully");
                } else {
                    $data = array("status" => "1", "message" => "success", "result" => "Something wrong!!!");
                }
                break;
        }
        echo json_encode($data);
    } else {
        $data = array("status" => "0", "message" => "Please enter proper request method !! ");
        echo json_encode($data);
    }
} catch (Exception $e) {
    echo 'Caught exception: ',  $e->getMessage(), "\n";
}
