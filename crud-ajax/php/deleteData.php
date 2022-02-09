<?php 

include 'connection.php';

$id = $_POST['id'];

$sql = mysqli_query($connection, "DELETE FROM tbldata WHERE id = '$id' " );

if($sql){
    $result['status'] = '1';
    $result['msg'] = 'Berhasil Delete Data!';
}else {
    $result['status'] = '0';
    $result['msg'] = 'Gagal Delete Data!';
}
echo json_encode($result);

?>